const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const usuarioModel = require("../models/usuarioModel");

module.exports.logar = function(req, res){
    usuarioModel.findOne({email: req.body.email})
        .then(function(usuario){
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({id:usuario._id}, "senha_secreta")
                res.status(200).json({token:token});
            }
            else{
                res.status(401).send("credenciais erradas")
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