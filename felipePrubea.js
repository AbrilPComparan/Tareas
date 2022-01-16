let carreritas =  ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);
//Andrea adelanta a  María, no se modifica el array

//José queda escalificado de la carrera
carreritas.pop();
console.log(carreritas);
//Se agragan tres corredores nuevos "Cristobal, Fernando y Armando"
carreritas.unshift("Cristobal", "Fernando", "Armando");
console.log(carreritas);
//Federico toma el primer puesto
carreritas.unshift("Federico");
console.log(carreritas);