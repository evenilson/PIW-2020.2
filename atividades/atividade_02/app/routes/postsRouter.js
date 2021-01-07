const postsController = require("../controllers/postsController");

module.exports = function(app){
    app.get("/posts", postsController.listarPosts);
    app.get("/posts/:id", postsController.BuscarPostPorId);
    app.get("/posts/:id/comentarios", postsController.obterComentarios);

    app.post("/posts", postsController.inserirPost);

    app.delete("/posts/:id", postsController.removerPost);
}