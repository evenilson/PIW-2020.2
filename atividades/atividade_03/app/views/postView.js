const viewUsuario = require("../views/usuarioView");

function render(post){
    return {
        id: post._id,
        texto: post.texto,
        id_usuario: viewUsuario.render(post.id_usuario),
    }
}

module.exports.render = render;

function renderMany(posts){
    return posts.map(render);
}

module.exports.renderMany = renderMany;