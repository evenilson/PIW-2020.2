const jwt = require("jsonwebtoken")

const comentarioModel = require("../models/comentarioModel");

const comentarioView = require("../views/comentarioView");

module.exports.listarComentarios = function(req, res){
    let promise = comentarioModel.find().exec();

    promise.then(function(comentarios){
        res.status(200).json(comentarioView.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", erro: error});
    })
}

module.exports.BuscarComentarioPorId = function(req, res){
    let id = req.params.id;
    
    let promisse = comentarioModel.findById(id).exec();

    promisse.then(function(comentario){
        res.status(200).json(comentarioView.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Deu ruim!", erro: error})
    })
}

module.exports.inserirComentario = function(req, res){
    let payload = jwt.decode(req.headers.token);
    let id_usuario_logado = payload.id;

    let comentario = {
        texto: req.body.texto,
        id_post: req.body.id_post,
        id_usuario: id_usuario_logado
    }

    let promise = comentarioModel.create(comentario);

    //essa função é chamada quando a requisição ao banco foi concluída
    //ela recebe o aluno inserido como parâmetro
    promise.then(function(comentario){
        res.status(201).json(comentarioView.render(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;

    let payload = jwt.decode(req.headers.token);
    let id_usuario_logado = payload.id;
    
    let promise = comentarioModel.findOneAndDelete({_id: id, id_usuario: id_usuario_logado});

    promise.then(function(comentario){
        if(comentario === null){
            res.status(404).json({mensagem: "Deu ruim! acesso inválido :("})
        }else{
            res.status(200).json(comentarioView.render(comentario));
        }
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}