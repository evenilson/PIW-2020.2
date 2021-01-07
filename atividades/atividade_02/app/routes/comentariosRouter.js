const comentariosController = require("../controllers/comentariosController");

module.exports = function(app){
    app.get("/comentarios", comentariosController.listarComentarios);
    app.get("/comentarios/:id", comentariosController.BuscarComentarioPorId);

    app.post("/comentarios", comentariosController.inserirComentario);
    
    app.delete("/comentarios/:id", comentariosController.removerComentario);
}