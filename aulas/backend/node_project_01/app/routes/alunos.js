const controller = require("../controllers/alunos")

module.exports = function(app){
    app.get("/alunos", controller.listarAlunos);
    app.get("/alunos/:id", controller.buscarAlunoPorId);
}
