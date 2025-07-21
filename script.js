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
