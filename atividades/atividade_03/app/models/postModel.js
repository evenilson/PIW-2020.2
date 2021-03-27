const mongoose = require("mongoose");

const Usuario = require("./usuarioModel");

module.exports = function(){
    let schema = mongoose.Schema({
        texto:{
            type: "String",
            required: true,
        },
        likes: {
            type: "Number",
            required: false,
        },
        id_usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        }
    })
    return mongoose.model('Post', schema);
}();