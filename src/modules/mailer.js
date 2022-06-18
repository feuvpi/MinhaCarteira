//arquivo para envio automatico de e-mail para recuperação de senha utilizando a ferramenta de teste nodemailer

//importando o modulo nodemailer
const nodemailer = require('nodemailer');

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

  module.exports = transport;