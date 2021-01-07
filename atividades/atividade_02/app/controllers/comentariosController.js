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
    let comentario = req.body;

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
    
    let promise = comentarioModel.findByIdAndRemove(id);

    promise.then(function(comentario){
        res.status(200).json(comentarioView.render(comentario));
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}