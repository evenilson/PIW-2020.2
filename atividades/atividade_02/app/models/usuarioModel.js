const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        id:{
            type:"String",
            require: true,
        },
        nome:{
            type: "String",
            require: true,
        },
        email: {
            type: "String",
            require: true,
        },
        senha: "String",
        require: true,
    })
    return mongoose.model('Usuario', schema);
}();