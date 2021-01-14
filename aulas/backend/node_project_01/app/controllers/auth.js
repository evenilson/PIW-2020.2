const Aluno = require("../models/aluno");
const bcrypt = require("bcrypt");

module.exports.logar = function(req, res){
    Aluno.findOne({matricula: req.body.matricula})
        .then(function(aluno){
            if(bcrypt.compareSync(req.body.senha, aluno.senha)){
                res.status(200).send("credenciais ok");
            }else{
                res.status(401).send("credenciais erradas");
            }
        })
        .catch(function(error){
            res.status(401).send("credenciais erradas");
        })
}