const Aluno = require("../models/aluno")

let alunos = [
    {id: 5, nome:"Victor", sobrenome:"Farias"},
    {id: 6, nome:"Victor", sobrenome:"Lima"},
    {id: 10, nome:"Luis", sobrenome:"Andrade"},
];

module.exports.listarAlunos = function(req, res){
    let promisse = Aluno.find().exec();
    promisse.then(function(alunos){
        res.status(200).json(alunos);
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!"})
    })
}

module.exports.buscarAlunoPorId = function(req, res){
    let id = req.params.id;

    let aluno = alunos.find(function(aluno){return aluno.id==id;});
    
    if(aluno){
        res.json(aluno);
    }else{
        res.status(404).json({mensagem:"Aluno não encontrado"});
    }
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    let promisse = Aluno.create(aluno);


    //essa função é chamada quando a requisição ao banco foi concluída
    //ela recebe o aluno inserido como parâmetro
    promisse.then(function(aluno){
        res.status(201).json(aluno);
    }).catch(function(error){
        res.status(400).json({mensagem:"Sua requisição não funfou"})
    })
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    
    alunos = alunos.filter(function(aluno){return aluno.id!=id;});
    
    res.json({mensagem:"Aluno foi removido"});
}