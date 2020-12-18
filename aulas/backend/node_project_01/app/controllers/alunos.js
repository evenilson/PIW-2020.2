const Aluno = require("../models/aluno")

const View = require("../views/alunos");

const Matricula = require("../models/matricula");
const viewMatricula = require("../views/matriculas");

const viewDisciplina = require("../views/disciplina");


module.exports.listarAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(function(alunos){
        res.status(200).json(View.renderMany(alunos));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error:error})
    })
}

module.exports.buscarAlunoPorId = function(req, res){
    let id = req.params.id;

    let promise = Aluno.findById(id).exec();
    promise.then(function(aluno){
        res.status(200).json(View.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem:"Deu ruim!", error:error});
    })
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    let promise = Aluno.create(aluno);

    //essa função é chamada quando a requisição ao banco foi concluída
    //ela recebe o aluno inserido como parâmetro
    promise.then(function(aluno){
        res.status(201).json(View.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    
    let promise = Aluno.findByIdAndRemove(id);

    promise.then(function(aluno){
        res.status(200).json(View.render(aluno));
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.obterMatriculas = function(req, res){
    let id = req.params.id;
    let promise = Matricula.find({aluno:id}).exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatricula.renderMany(matriculas))
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.obterDisciplinas = function(req, res){
    let id = req.params.id;
    let promise = Matricula.find({aluno:id}).populate("disciplina").exec();
    promise.then(function(matriculas){
        let disciplinas = matriculas.map(function(matricula){return matricula.disciplina});
        res.status(200).json(viewDisciplina.renderMany(disciplinas))
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}