//arquivo para automatizar a importação de controllers para o app.js 

const fs = require('fs');
const path = require('node:path');

fs.readdirSync(__dirname).filter(file => (file.indexOf('.') !== 0 && file !== "index.js")).forEach(file => console.log("here " + path.resolve(__dirname, file)))

module.exports = (app) => {
    fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0 && file !== "index.js"))
    .forEach(file => require((path.resolve(__dirname, file)))(app));
};