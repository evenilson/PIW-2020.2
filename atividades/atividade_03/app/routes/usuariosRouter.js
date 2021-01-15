const usuariosController = require("../controllers/usuariosController");

module.exports = function(app){
    app.get("/usuarios", usuariosController.listarUsuarios);
    app.get("/usuarios/:id", usuariosController.BuscarUsuarioPorId);
    app.get("/usuarios/:id/posts", usuariosController.obterPosts);

    app.post("/usuarios", usuariosController.inserirUsuario);

    app.delete("/usuarios/:id", usuariosController.removerUsuario);
}