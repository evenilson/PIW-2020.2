const mongoose = require("mongoose");
const disciplina = require("./disciplina");

module.exports = function(){
    let schema = mongoose.Schema({
        aluno:{
            type: mongoose.Schema.ObjectId,
            ref: "Aluno",
        },
        disciplina: {
            type: mongoose.Schema.ObjectId,
            ref: "Disciplina",
        }
    })
    return mongoose.model('Matriculam', schema);
}();