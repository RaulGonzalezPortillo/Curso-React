const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];

arreglo2.push(6);

//map puede crear un arreglo a partir de otro y hacer modificaciones a cada valor
const arreglo3 = arreglo2.map( (numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);