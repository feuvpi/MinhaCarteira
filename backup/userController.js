var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('User');



//registro de usuário
exports.register = function(req, res) {
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
    newUser.save(function(err, user) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.hash_password = undefined;
            return res.json(user);
        }
    } )
};

exports.login = function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if(err) throw err;
        if(!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Invalid password or username.' });
        }
    });
};

exports.loginRequired = function(req, res) {
    if(req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Authorization required.'})
    }
};

exports.profile = function(req, res, next){
    if(req.user) {
        res.send(req.user);
        next();
    } else {
        return res.status(401).jsib({ message: 'Invalid Credential.'})
    }
};

module.exports = app => app.use('/operations', router);


/**
 * 'use strict';


*/