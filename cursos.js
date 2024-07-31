const cursos = [];
const prompt = require("prompt-sync")();
const professores = [];
const alunos = [];
const materias = [];

const modelo = () => {
  const nome = prompt("Digite o nome do curso! ");
  const duracao = prompt("Digite a duração do curso! ");

    while (true) {
      const professor = prompt("Digite o nome do professor, ou digite 'fim: " );
      if (professor == "fim") {
        break;
      } else console.log("Inválido");
    }

    professores.push(professor);

    while (true) {
      const aluno = prompt("Digite o nome do aluno, ou digite 'fim: ");
      if (aluno == "fim") {
        break;
      }
    }

    alunos.push(aluno);
  }

  while (true) {
    const materia = prompt("Digite o nome da materia, ou digite 'fim: ");
    if (materia == "fim") {
      break;
    }
  }

  materias.push(materia);

if(
    nome != "" &&
    isNaN(duracao) &&
    professores.length > 0 &&
    alunos.length > 0 &&
    materias.length > 0 
){
    return {
        nome, duracao, professores, alunos, materias
    }
}
    console.log("Dados inválidos")

    const criar = () => {
        const novo = modelo()

        if(novo) {
            cursos.push(novo)
            console.log("Curso criado com sucesso.")
        }
    }
