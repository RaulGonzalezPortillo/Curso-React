const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 41,
    key: 'IronMan'
}

console.log(persona);

//nombre:nombre2 cambia el nombre de la variable en el nuevo objeto
const {nombre:nombre2, apellido, edad, key} = persona;

console.log(nombre2);

//range = 'Cap' indica que si no se encuentra el parametro, utilizará el valor por defecto 'Cap'
const returnPerson = ({nombre, key, range = 'Cap'}) => {
return {
    nombre,
    key,
    range,
    //Se le añade un nuevo parámetro al objeto que va a devolver
    location: {
    lat: 14.21,
    lng: 54.456
    }
}
}

const nuevaPersona = returnPerson(persona);

//Doble destructuración
const {location: {lat, lng}} = nuevaPersona;

console.log(lat, lng);

//Con arreglos
const personajes = ['Goku', 'Vegetta', 'Trunks'];

//' ,' Nos permite omitir el primer elemento de nuestro arreglo
const [ , element2, element3] = personajes;
console.log(element2, element3);