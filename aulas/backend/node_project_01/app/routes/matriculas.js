const controller = require("../controllers/matriculas");

module.exports = function(app){
    app.post("/matriculas", controller.inserirMatricula);
    app.get("/matriculas", controller.listarMatriculas);
}