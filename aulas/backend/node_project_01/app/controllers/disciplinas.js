const Disciplina = require("../models/disciplina");
const viewDisciplina = require("../views/disciplina");

module.exports.listarDisciplinas = function(req, res){
    let promise = Disciplina.find().exec();
    promise.then(function(disciplinas){
        res.status(200).json(viewDisciplina.renderMany(disciplinas));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}

module.exports.inserirDisciplinas = function(req, res){
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);
    promise.then(function(disciplina){
        res.status(201).json(viewDisciplina.render(disciplina));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}

