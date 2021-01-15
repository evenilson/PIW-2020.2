const usuariosController = require("../controllers/usuariosController");
const authController = require("../controllers/authController");

module.exports = function(app){
    app.post("/usuarios", usuariosController.inserirUsuario);
    app.post("/usuarios/signin", authController.logar);

    app.use("/usuarios", authController.checar);
    app.get("/usuarios", usuariosController.listarUsuarios);
    app.get("/usuarios/:id", usuariosController.BuscarUsuarioPorId);
    app.get("/usuarios/:id/posts", usuariosController.obterPosts);
    app.delete("/usuarios/:id", usuariosController.removerUsuario);
}