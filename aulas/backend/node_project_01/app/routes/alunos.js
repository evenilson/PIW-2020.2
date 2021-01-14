const controller = require("../controllers/alunos")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/alunos", controller.inserirAluno);
    app.post("/alunos/signin", controllerAuth.logar)

    app.use("/alunos", controllerAuth.checar);
    app.get("/alunos", controller.listarAlunos);
    app.get("/alunos/:id", controller.buscarAlunoPorId);
    app.get("/alunos/:id/matriculas", controller.obterMatriculas);
    app.get("/alunos/:id/disciplinas", controller.obterDisciplinas);
    app.delete("/alunos/:id", controller.removerAluno);

}
