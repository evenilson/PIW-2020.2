let alunos = [
    {id: 5, nome:"Victor", sobrenome:"Farias"},
    {id: 10, nome:"Luis", sobrenome:"Andrade"},
];

module.exports.listarAlunos = function(req, res){
    res.json(alunos);
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