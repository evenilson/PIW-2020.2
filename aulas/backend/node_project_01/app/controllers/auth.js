const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const Aluno = require("../models/aluno");

module.exports.logar = function(req, res){
    Aluno.findOne({matricula: req.body.matricula})
        .then(function(aluno){
            if(bcrypt.compareSync(req.body.senha, aluno.senha)){
                let token = jwt.sign({id:aluno._id}, "senha_secreta");
                res.status(200).json({token:token});
            }else{
                res.status(401).send("credenciais erradas");
            }
        })
        .catch(function(error){
            res.status(401).send("credenciais erradas");
        })
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;

    jwt.verify(token, "senha_secreta", function(err, decoded){
        if(err){
            res.status(401).send("Token invalido");
        }else{
            next();
        }
        
    })
}