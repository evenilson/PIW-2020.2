const comentariosController = require("../controllers/comentariosController");
const authController = require("../controllers/authController");

module.exports = function(app){
    app.use("/comentarios", authController.checar);
    app.post("/comentarios", comentariosController.inserirComentario);
    app.get("/comentarios", comentariosController.listarComentarios);
    app.get("/comentarios/:id", comentariosController.BuscarComentarioPorId);    
    app.delete("/comentarios/:id", comentariosController.removerComentario);
}