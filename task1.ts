class Alumno {
  public nombre: string;
  public edad: number;
  public correo: string;
  public promedio: number;

  constructor(nombre: string, edad: number, correo: string, promedio: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.promedio = promedio;
  }
}

const alumnos: Array<Alumno> = [
  { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
  { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
  { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
  { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
  { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
  { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
  { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
  { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
  { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
  { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
  { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
  { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }, 
];

function filterByGrade(alumnos: Alumno[]): Alumno[] {
	return alumnos.filter(alumno => alumno.promedio > 6);
}
const aproved = filterByGrade(alumnos);

function filterByGradeAndAge(alumnos: Alumno[]): Alumno[] {
	return alumnos.filter(alumno =>  alumno.edad > 19 && alumno.promedio < 6);
}
const aprovedAdults = filterByGradeAndAge(alumnos);

function sortByGrade(alumnos: Alumno[]): Alumno[] {
	return alumnos.sort((a, b) => a.promedio > b.promedio ? 1 : -1)
}
const sortedByGrade = sortByGrade(alumnos);

function add2ifGradeIsLessThan4(alumnos: Alumno[]): Alumno[] {
	const filteredByGrade = [...alumnos];
  filteredByGrade.forEach(alumno => {if(alumno.promedio < 4) alumno.promedio += 2});
	return filteredByGrade;
}
const added2ifGradeIsLessThan4 = add2ifGradeIsLessThan4(alumnos);

function getAverageGradeOfAll(alumnos: Alumno[]): number {
	return alumnos.reduce((partSum, item) => partSum + item.promedio, 0) / alumnos.length;
}
const averageGradeOfAll = getAverageGradeOfAll(alumnos);
console.log(averageGradeOfAll);