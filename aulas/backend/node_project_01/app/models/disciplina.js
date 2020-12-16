const mongoose = require("mongoose");

module.exports = function(){
    let schema = mongoose.Schema({
        codigo:{
            type:"String",
            required: true,
        },

        carga_horaria:{
            type:"Number",
            required:true,
        }
    })

    return mongoose.model("Disciplina", schema);
}();