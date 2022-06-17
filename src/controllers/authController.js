const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

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

        //retirando a senha antes de enviar os dados de volta ao client apos acriar novo usuario
        const {password, ...user} = result.toObject(); //do not pass the password in the response, it`s already saved.
        return res.send({ user, token: generateToken({ id: user.id }) })
    
    //tratando possiveis erros
    } catch(err) {
        console.log(err);
        return res.status(400).send({ error: 'Registration failed.'})
    }
})

//rota para autenticação de usuário
router.post('/authenticate', async (req, res) => {
    //pegando os dados inseridos pelo usúario no req.body
    const { email, password } = req.body;

    //buscando no banco de dados um usúario que tenha o mesmo email informado e salvando em uma constante
    const user = await User.findOne({ email }).select('+password');

    //verificando se o usuário não existe
    if(!user){
        return res.status(400).send({ error: 'Usuário não encontrado.'});
    }

    //comparando a senha informada com a senha registrada no banco de dados, utilizando bcrypt
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha incorreta.'});
    
    //retirando a senha do user antes de enviar ao client
    user.password = undefined;

    //enviando a requisição de volta com informações sobre o usuário autenticado
    res.send({ user, token: generateToken({ id: user.id }) })


})

module.exports = app => app.use('/auth', router);