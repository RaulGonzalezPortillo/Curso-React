const myArray: string[] = [];

myArray.push('Hola');
myArray.push('Mundo');

const myArray2: Array<number> = [];
myArray2.push(1);
myArray2.push(2);
myArray2.push(3);

const myArray3 = myArray2.map( element => element * 2 );
console.log(myArray3);