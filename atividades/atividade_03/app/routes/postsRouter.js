const postsController = require("../controllers/postsController");
const authController = require("../controllers/authController");

module.exports = function(app){
    app.use("/posts", authController.checar);
    app.post("/posts", postsController.inserirPost);
    app.get("/posts", postsController.listarPosts);
    app.get("/posts/:id", postsController.BuscarPostPorId);
    app.get("/posts/:id/comentarios", postsController.obterComentarios);
    app.delete("/posts/:id", postsController.removerPost);
}
