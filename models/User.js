const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
Schema = mongoose.Schema;

const UserSchema = mongoose.model('User', new mongoose.Schema({
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

    hash_password: {
        type: String,

    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}));

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

const User = mongoose.model('User', UserSchema);

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