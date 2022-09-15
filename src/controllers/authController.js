const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

const router = express.Router();

//função para gerar token de autenticação com jwt. params: passar 'id: user.id'
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

//rota para criação de usuário
router.post('/register', async(req, res) => {
    const { email } = req.body;
    //checando se ja existe mesmo email cadastrado no sistema
    try {

        if(await User.findOne({ email } )) {
            return res.status(400).send({error: 'Ja existe um usuário cadastrado com este e-mail.'})
        }
        //pegando o req.body da solicitação POST em /register e criando um novo usuario  
        const result = await User.create(req.body);
   
        //retirando a senha antes de enviar os dados de volta ao client apos criar novo usuario
        const {password, ...user} = result.toObject(); //do not pass the password in the response, it`s already saved.
        return res.send({ user, token: generateToken({ id: user.id }) })
    
    //tratando possiveis erros
    } catch(err) {
        console.log(err);
        return res.status(400).send({ error: 'Registration failed.'})
    }
})

// -- rota para autenticação de usuário
router.post('/authenticate', async (req, res) => {
   
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    // res.setHeader("Access-Control-Max-Age", "1800")
    // res.setHeader("Access-Control-Allow-Headers", "content-type")
    // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
    //pegando os dados inseridos pelo usúario no req.body
    const { email, password } = req.body; 
    //buscando no banco de dados um usúario que tenha o mesmo email informado e salvando em uma constante
    const user = await User.findOne({ email }).select('+password');
    //verificando se o usuário não existe
    if(!user){
        return res.status(400).send({ error: 'Usuário não encontrado.'});
    }
    //comparando a senha informada com a senha registrada no banco de dados, utilizando bcrypt
    if(!await bcrypt.compare(password, user.password)){
        console.log("Senha incorreta")
        return res.status(400).send({ error: 'Senha incorreta.'});}
    
    //retirando a senha do user antes de enviar ao client
    user.password = undefined;

    //enviando a requisição de volta com informações sobre o usuário autenticado\
    console.log(user.id)
    res.send({user, token: generateToken({ id: user.id }) })

});

// -- rota para edição de usuario --
router.post('/user', async (req, res) => {
    const { oldPassword } = req.body
    const { _id } = req.body
    const user = await User.findOne({ _id }).select('+password')
    if(!user){
        return res.status(400).send({ error: 'Problema ao localizar usuário no banco de dados.'});
    }

    if(!await bcrypt.compare(oldPassword, user.password)){
        return res.status(200).send({ message: 'Senha antiga não confere.'});}

    user.password = req.body.password
    user.name = req.body.name
    user.email = req.body.email
    const save = await user.save()
    if(save){
        res.send({ message: 'Perfil atualizado com sucesso!' })
    } else {
        res.send({ message: 'Problema de conexão com o banco de dados. Tente novamente mais tarde.' })
    }
    
    
})

//rota para recuperação de senha
router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {
        //buscando no banco de dados um usuário com o email informado
        const user = await User.findOne({ email });

        

        if(!user) return res.status(400).send({ error: 'Usuário não encontrado'});

        

        const token = crypto.randomBytes(20).toString('hex');
        

        const expires = new Date();
        
        expires.setHours(expires.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: expires,
            }
        });

        mailer.sendMail({
            to: email,
            from: "frdvp1@gmail.com",
            template: 'auth/forgot_password',
            context: { token },
        }, (err) => {
            console.log(err);
            if (err) return res.status(400).send({ error: 'Não é possível enviar token para recuperação de email agora.' });
            return res.send();
        });

        console.log(token, expires);

    } catch (err) {

        res.status(400).send({ error: 'Ocorreu um problema, tente mais tarde.'});

    }
});

//rota para reset de senha 
router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        //buscar um usuário no banco de dados a partir do email do req.body
        const user = await User.findOne({ email }).select('+passwordResetToken passwordResetExpires');

        //verificar existe um usuários cadastrado com o email fornecido
        if(!user) return res.status(400).send({ error: 'User not found' });
        
        //verificar se o token é valido
        if(token !== user.passwordResetToken) return res.status(400).send({ error: 'Token invalido.' });

        
        const expires = new Date();

        //verificar se o token expirou
        if(expires > user.passwordResetExpires) return res.status(400).send({ error: 'Token expirado.' });

        //realizar a alteração da senha do usuário com a nova senha fornecida
        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({ error: 'Não foi possível recuperar a senha. Tente novamente mais tarde.' });
    }
})

module.exports = app => app.use('/auth', router);