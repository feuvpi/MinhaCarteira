//solicitando a database
const mongoose = require('../database');
//solicitando bcrypt 
const bcrypt = require('bcrypt');

//criando a schema do User
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        maxLength: 50
    },

    email: {
        type: String,
        required: true,
        minLength: 5,
        trim: true,
        maxLength: 255,
        unique: true
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    passwordResetToken: {
        type: String,
        select: false,
    },

    passwordResetExpires: {
        type: Date,
        select: false,
    },

    /*hash_password: {
        type: String,

    },*/

    createdAt: {
        type: Date,
        default: Date.now
    }
});

//função para encriptar a senha do usuario com bcrypt antes de salvar 
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash.toString();
    next();
})

//metodo para comparar password
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

//criando um novo modelo User
const User = mongoose.model('User', UserSchema);

//exportando um modelo User
module.exports = User;




/* 

const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;

*/