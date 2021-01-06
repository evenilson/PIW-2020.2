let posts = [ 
    {id: 1, texto: "Olá, tudo bem?", likes: 20},
    {id: 2, texto: "Sextou em casa", likes: 40},
]

module.exports.listarPosts = function(req, res){

    res.json(posts);
}

module.exports.BuscarPostPorId = function(req, res){
    let id = req.params.id;

    let post = posts.find(function(post){return post.id == id});

    if(post){
        res.json(post)
    }
    else{
        res.status(404).json({mensagem: "Post não encontrado"});
    }
}

module.exports.inserirPost = function(req, res){
    let post = req.body;

    posts.push(post);

    res.status(201).json(post);
}

module.exports.removerPost= function(req, res){
    let id = req.params.id;

    posts = posts.filter(function(post){ return post.id!=id});

    res.json({mensagem:"Post foi removido"});
}