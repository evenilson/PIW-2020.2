let usuarios = [ 
    {id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123 "},
    {id: 5, nome: "João", email: "joao@gmail.com", senha: "456"},
]

module.exports.listarUsuarios = function(req, res){

    res.json(usuarios);
}

module.exports.BuscarUsuarioPorId = function(req, res){
    let id = req.params.id;

    let usuario = usuarios.find(function(usuario){return usuario.id == id});

    if(usuario){
        res.json(usuario)
    }
    else{
        res.status(404).json({mensagem: "Usuário não encontrado"});
    }
}

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;

    usuarios.push(usuario);

    res.status(201).json(usuario);
}

module.exports.removerUsuario = function(req, res){
    let id = req.params.id;

    usuarios = usuarios.filter(function(usuario){ return usuario.id!=id});

    res.json({mensagem:"Usuário foi removido"});
}