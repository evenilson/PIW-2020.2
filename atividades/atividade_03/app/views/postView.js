
function render(post){
    return {
        id: post._id,
        texto: post.texto,
        id_usuario: post.id_usuario
    }
}

module.exports.render = render;

function renderMany(posts){
    return posts.map(render);
}

module.exports.renderMany = renderMany;