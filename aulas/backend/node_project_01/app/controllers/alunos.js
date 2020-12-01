module.exports.listarAlunos = function(req, res){
    res.json([
        {nome:"Victor", sobrenome:"Farias"},
        {nome:"Luis", sobrenome:"Andrade"},
    ]);
}