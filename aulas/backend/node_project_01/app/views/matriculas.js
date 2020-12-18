const viewAluno = require("../views/alunos")
const viewDisciplina = require("../views/disciplina")

function render(matricula){
    return{
        id: matricula._id,
        aluno: viewAluno.render(matricula.aluno),
        disciplina: viewDisciplina.render(matricula.disciplina),
    }
}

module.exports.render = render;

function renderMany(matricula){
    return matricula.map(render);
}

module.exports.renderMany = renderMany;