const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        id:{
            type:"String",
            require: true,
        },
        texto:{
            type: "String",
            require: true,
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