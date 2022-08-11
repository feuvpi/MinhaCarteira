jwt = require('jsonwebtoken');


const authConfig = require('../config/auth.json');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //verificar se foi passado um header de Autorização no req
    if(!authHeader)
        return res.status(401).send({ error: 'Nenhum token informado.' })

    //dividir o header de autorização em duas partes
    const parts = authHeader.split(' ');

    //verificar se o header de autorização de fato possui duas partes
    if(!parts.length === 2)
        return res.status(401).send({ error: 'Token inconsistente' })

    //dividir as duas partes do header de autorização em duas variaveis
    const [ scheme, token ] = parts;

    //verificando se a constante scheme começa com 'bearer' com utilização de reg expression
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token problem. Bearer not found.'})

    //verificar se o token informado no req é valido
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: err })

        req.userId = decoded.id;
    });

    return next();
};

