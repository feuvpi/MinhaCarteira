const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body;
    
    try {
        if(await User.findOne({ email} )) {
            return res.status(400).send({error: 'Ja existe um usuário cadastrado com este e-mail.'})
        }

        //pegando o req.body da solicitação POST em /register
        const result = await User.create(req.body);
        const {userPassword, ...user} = result.toObject(); //do not pass the password in the response, it`s already saved.
        return res.send({ user })
    } catch(err) {
        console.log(err);
        return res.status(400).send({ error: 'Registration failed.'})
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, userPassword } = req.body;
    const result = await User.findOne({ email }).select('+password');
    const {password, ...user} = result.toObject();
    //verificando se existe um usuário com o email informado no banco de dados
    if(!user){
        return res.status(400).send({ error: 'Usuário não encontrado.'});
    }

    //comparando a senha informada com a senha registrada no banco de dados, utilizando bcrypt
    if(!await bcrypt.compare(userPassword, password))
        return res.status(400).send({ error: 'Senha incorreta.'});
    
    res.send({ user })


})

module.exports = app => app.use('/auth', router);