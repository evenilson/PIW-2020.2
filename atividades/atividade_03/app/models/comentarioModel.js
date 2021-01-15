const mongoose = require("mongoose");

const Post = require("./postModel")
const Usuario = require("./usuarioModel");

module.exports = function(){
    let schema = mongoose.Schema({
        texto:{
            type: "String",
            required: true,
        },
        id_post: {
            type: mongoose.Schema.ObjectId,
            ref: "Post",
        },
        id_usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        }
    })
    return mongoose.model('Comentario', schema);
}();