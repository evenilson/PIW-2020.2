const viewUsuario = require("../views/usuarioView");
const viewPost = require("../views/postView");

function render(comentario){
    return {
        id: comentario._id,
        texto: comentario.texto,
        id_usuario: viewUsuario.render(comentario.id_usuario),
        id_post: viewPost.render(comentario.id_post),

    }
}

module.exports.render = render;

function renderMany(posts){
    return posts.map(render);
}

module.exports.renderMany = renderMany;