const malla = [
  {
    nombre: "1er Semestre",
    cursos: ["Matemática I", "Física I", "Intro a la Ingeniería", "Programación I"]
  },
  {
    nombre: "2do Semestre",
    cursos: ["Matemática II", "Física II", "Programación II", "Álgebra Lineal"]
  },
  {
    nombre: "3er Semestre",
    cursos: ["Estructuras de Datos", "Estadística", "Electrónica", "Comunicación Oral"]
  }
];

const container = document.getElementById("malla-container");

malla.forEach((semestre) => {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";
  
  const titulo = document.createElement("h2");
  titulo.textContent = semestre.nombre;
  semestreDiv.appendChild(titulo);
  
  semestre.cursos.forEach((curso) => {
    const cursoDiv = document.createElement("div");
    cursoDiv.className = "curso";
    cursoDiv.textContent = curso;
    cursoDiv.onclick = () => alert(`Detalles del curso: ${curso}`);
    semestreDiv.appendChild(cursoDiv);
  });

  container.appendChild(semestreDiv);
});
