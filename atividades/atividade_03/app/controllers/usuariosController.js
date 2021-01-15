const usuarioModel = require("../models/usuarioModel");
const usuarioView = require("../views/usuarioView");

const postModel = require("../models/postModel");
const postView = require("../views/postView");


module.exports.listarUsuarios = function(req, res){
    let promise = usuarioModel.find().exec();

    promise.then(function(usuarios){
        res.status(200).json(usuarioView.renderMany(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", erro: error});
    })
}

module.exports.BuscarUsuarioPorId = function(req, res){
    let id = req.params.id;
    
    let promisse = usuarioModel.findById(id).exec();

    promisse.then(function(usuario){
        res.status(200).json(usuarioView.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Deu ruim!", erro: error})
    })
}

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;

    let promise = usuarioModel.create(usuario);

    //essa função é chamada quando a requisição ao banco foi concluída
    //ela recebe o aluno inserido como parâmetro
    promise.then(function(usuario){
        res.status(201).json(usuarioView.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.removerUsuario = function(req, res){
    let id = req.params.id;
    
    let promise = usuarioModel.findByIdAndRemove(id);

    promise.then(function(usuario){
        res.status(200).json(usuarioView.render(usuario));
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.obterPosts = function(req, res){
    let id = req.params.id;

    let promise = postModel.find({id_usuario: id}).exec();
    promise.then(function(posts){
        res.status(200).json(postView.renderMany(posts))
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error: error})
    })
}
