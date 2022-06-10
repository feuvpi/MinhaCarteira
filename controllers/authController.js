const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body;
    
    try {
        if(await User.findOne({ email} )) {
            return res.status(400).send({error: 'Ja existe um usuário cadastrado com este e-mail.'})
        }

        //pegando o req.body da solicitação POST em /register
        const result = await User.create(req.body);
        const {password, ...user} = result.toObject(); //do not pass the password in the response, it`s already saved.
        return res.send({ user })
    } catch(err) {
        console.log(err);
        return res.status(400).send({ error: 'Registration failed.'})
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    //verificando se existe um usuário com o email informado no banco de dados
    if(!user){
        return res.status(400).send({ error: 'Usuário não encontrado.'});
    }

    //comparando a senha informada com a senha registrada no banco de dados, utilizando bcrypt
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha incorreta.'});
    
    res.send({ user })




})

module.exports = app => app.use('/auth', router);