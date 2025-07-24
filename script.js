const malla = [
  {
    nombre: "1er Semestre",
    cursos: ["Introducción a Matemáticas", "Fundamentos de Contabilidad", "Gestión de Empresas", "Introducción a la Economía", "Sist. Información para Gestión", "Intro. Pensamiento Filosófico" ,"Comunicación Efectiva"]
  },
  {
    nombre: "2do Semestre",
    cursos: ["Matemáticas", "Contabilidad I", "Gestión de Talentos", "Microeconomía", "Base de Datos", "Derecho de la Empresa", "Identidad Personal"]
  },
  {
    nombre: "3er Semestre",
    cursos: ["Álgebra Lineal", "Cálculo I", "Contabilidad II", "Macroeconomía", "Programación I", "Apreciación de Lenguajes Artísticos"]
  },
  {
    nombre: "4to Semestre",
    cursos: ["Estadísticas I", "Metodós Cuantitativos para Gestión", "Costos", "Marketing Estratégico", "Fundamentos de Auditoría", "Antropología Filosófica"]
  },
  {
    nombre: "5to Semestre",
    cursos: ["Estadísticas II", "Costos para la Gestión", "Dirección Estratégica", "Derecho Tributario", "Programación II", "Auditoría Interna"]
  },
  {
    nombre: "6to Semestre",
    cursos: ["Econometría", "Administración Financiera", "Inteligencia de Negocios", "Control de Gestión I", "Taller Análisis de Datos", "Ética"]
  },
  {
    nombre: "7mo Semestre",
    cursos: ["Investigación de Operaciones", "Finanzas Corporativas", "Estrategias Digitales", "Gestión de Métricas Managment", "Control de Gestión II", "Auditoría de Sist. de Información", "Persona y Trascendencia"]
  },
  {
    nombre: "8vo Semestre",
    cursos: ["Control de Procesos", "Preparación y Eval. de Proyectos", "Data Mining", "Seminario de Licenciatura", "Diseño Procesos Empresariales", "Taller Integración Profesional"]
  },
  {
    nombre: "9no Semestre",
    cursos: ["Machine Learning", "Bussiness Analytics", "Transformación Digital Empresarial", "Taller Empresarial", "Electivo I", "Electivo II", "Electivo III"]
  }
];

// Qué desbloquea cada curso
const cursosRelacionados = {
  "Introducción a Matemáticas": { semestre: "2do Semestre", curso: "Matemáticas" }

const container = document.getElementById("malla-container");

// Función para mostrar el curso relacionado
function mostrarCursoRelacionado(semestreNombre, cursoNombre) {
  const semestres = document.querySelectorAll('.semestre');
  semestres.forEach(semestre => {
    const titulo = semestre.querySelector('h2').textContent;
    if (titulo === semestreNombre) {
      const cursos = semestre.querySelectorAll('.curso');
      cursos.forEach(curso => {
        if (cursos.textContent === cursoNombre) {
          curso.style.display = 'block';
        }
      });
    }
  });
}

// Construir visualmente la malla
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

    // Ocultar cursos que se desbloquean después
    if (object.values(cursosRelacionados).some(r => r.curso === curso)) {
      curso.Div.style.display = 'none'
    }
    
    cursoDiv.onclick = () => {
      cursoDiv.classList.toggle("Completado");

      if (cursosRelacionados[cursos]) {
        const { semestre, curso: cursoDesbloqueado } = cursosRelacionados[cursos];
        mostrarCursoRelacionado(semestre, cursoDesbloqueado);
      }
    };

    semestreDiv.appendChild(cursoDiv);
  });

  container.appendChild(semestreDiv);
});
