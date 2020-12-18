const Matricula = require("../models/matricula")
const viewMatricula = require("../views/matriculas")

module.exports.inserirMatricula = function(req, res){
    let matricula = req.body;
    let promise = Matricula.create(matricula);
    promise.then(function(matricula){
        res.status(201).json(viewMatricula.render(matricula));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}

module.exports.listarMatriculas = function(req, res){
    let promise = Matricula.find().exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatricula.renderMany(matriculas));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}