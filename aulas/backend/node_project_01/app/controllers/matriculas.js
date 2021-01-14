const jwt = require("jsonwebtoken")

const Matricula = require("../models/matricula")
const viewMatricula = require("../views/matriculas")

module.exports.inserirMatricula = function(req, res){ 
    let id_disciplina = req.body.disciplina;
    let payload = jwt.decode(req.headers.token);
    let id_aluno_logado = payload.id;

   
    let promise = Matricula.create({disciplina: id_disciplina, aluno:id_aluno_logado });
    promise.then(function(matricula){
        res.status(201).json(viewMatricula.render(matricula));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}

module.exports.listarMatriculas = function(req, res){
    let payload = jwt.decode(req.headers.token);
    let id_aluno_logado = payload.id;

    let promise = Matricula.find({aluno: id_aluno_logado}).populate("disciplina").populate("aluno").exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatricula.renderMany(matriculas));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}