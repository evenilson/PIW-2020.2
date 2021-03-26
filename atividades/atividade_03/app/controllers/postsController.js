const jwt = require("jsonwebtoken")

const postModel = require("../models/postModel");
const postView = require("../views/postView");

const comentarioModel = require("../models/comentarioModel");
const comentarioView = require("../views/comentarioView");

module.exports.listarPosts = function(req, res){
    let promise = postModel.find().populate("id_usuario").exec();

    promise.then(function(posts){
        res.status(200).json(postView.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", erro: error});
    })
}

module.exports.BuscarPostPorId = function(req, res){
    let id = req.params.id;
    
    let promisse = postModel.findById(id).exec();

    promisse.then(function(post){
        res.status(200).json(postView.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Deu ruim!", erro: error})
    })
}

module.exports.inserirPost = function(req, res){
    let payload = jwt.decode(req.headers.token);
    let id_usuario_logado = payload.id;

    let post = {
        texto: req.body.texto,
        likes: req.body.likes,
        id_usuario: id_usuario_logado
    }

    let promise = postModel.create(post);

    //essa função é chamada quando a requisição ao banco foi concluída
    //ela recebe o aluno inserido como parâmetro
    promise.then(function(post){
        res.status(201).json(postView.render(post));
    }).catch(function(error){
        res.status(400).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.removerPost= function(req, res){
    let id = req.params.id;


    let payload = jwt.decode(req.headers.token);
    let id_usuario_logado = payload.id;
    
    let promise = postModel.findOneAndDelete({_id: id, id_usuario: id_usuario_logado});

    promise.then(function(post){
        if(post === null){
            res.status(404).json({mensagem: "Deu ruim! acesso inválido :("})
        }else{
            res.status(200).json(postView.render(post));
        }
    }).catch(function(error){
        res.status(500).json({mensagem:"Deu ruim!", error:error})
    })
}

module.exports.obterComentarios = function(req, res){
    let id = req.params.id;

    let promise = comentarioModel.find({id_post: id}).exec();
    promise.then(function(comentarios){
        res.status(200).json(comentarioView.renderMany(comentarios))
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu ruim!", error: error})
    })
}