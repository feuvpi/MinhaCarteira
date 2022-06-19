//arquivo para envio automatico de e-mail para recuperação de senha utilizando a ferramenta de teste nodemailer

const path = require('path');

//importando o modulo nodemailer
const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

//utilizando desestruturação para importar informações de configuração do arquivo de configuração mail.json
const { host, port, user, pass } = require('../config/mail.json');

//integration
var transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    },
  });

//console.log(path.resolve('../resources/mail'));
  
transport.use('compile', hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve('./src/resources/mail')
    },
    viewPath: path.resolve('./src/resources/mail'),
    extName: '.html',
}));

//exportando 
module.exports = transport;