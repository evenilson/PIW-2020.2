const usuariosController = require("../controllers/usuariosController");

module.exports = function(app){
    app.get("/usuarios", usuariosController.listarUsuarios);
    app.get("/usuarios/:id", usuariosController.BuscarUsuarioPorId);

    app.post("/usuarios", usuariosController.inserirUsuario);
    
    app.delete("/usuarios/:id", usuariosController.removerUsuario);
}