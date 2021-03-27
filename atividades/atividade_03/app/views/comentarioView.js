
function render(comentario){
    return {
        id: comentario._id,
        texto: comentario.texto,
        id_usuario: comentario.id_usuario._id,
        id_post: comentario.id_post,
        nome_usuario: comentario.id_usuario.nome
    }
}

module.exports.render = render;

function renderMany(comentarios){
    return comentarios.map(render);
}

module.exports.renderMany = renderMany;