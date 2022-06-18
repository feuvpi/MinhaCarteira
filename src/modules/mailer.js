//arquivo para envio automatico de e-mail para recuperação de senha utilizando a ferramenta de teste nodemailer

//importando o modulo nodemailer
const nodemailer = require('nodemailer');

const hbs = require('nodemailer-express-handlebars');

//utilizando desestruturação para importar informações de configuração do arquivo de configuração mail.json
const { host, port, user, password } = require('../config/mail.json');

//integration
var transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      password
    }
  });

  
transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('/src/resources/mail'),
    extName: '.html',
}));

//exportando 
module.exports = transport;