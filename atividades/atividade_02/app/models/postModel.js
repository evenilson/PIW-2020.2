const mongoose = require('mongoose');

const Usuario = require("./usuarioModel");

module.exports = function(){
    let schema = mongoose.Schema({
        texto:{
            type: "String",
            require: true,
        },
        id_usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        }
    })
    return mongoose.model('Post', schema);
}();