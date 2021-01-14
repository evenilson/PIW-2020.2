const controller = require("../controllers/matriculas");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/matriculas", controllerAuth.checar);
    app.post("/matriculas", controller.inserirMatricula);
    app.get("/matriculas", controller.listarMatriculas);
}