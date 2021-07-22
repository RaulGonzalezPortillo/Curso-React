const persona = {
    nombre: 'Raúl',
    apellido: 'González',
    edad: 21
};

//Operador spread: Copia los datos de una variable sin hacer referencia a la original
const persona2 = {
    fechaNacimiento: '15-02-2000',
    ...persona
};
persona2.nombre = 'Toño';

console.log(persona);
console.log(persona2);