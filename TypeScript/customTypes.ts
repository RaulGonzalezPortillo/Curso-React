type PersonaType = {
    nombre: string;
    apellido: string;
    edad: number;
    sexo?: string;
    getName: () => void;
}

//No colocar el signo '=' a las interfaces
interface Interfaz1 {
    nombre: string;
    apellido: string;
}

interface Interfaz2 extends Interfaz1 {
    edad: number;
    sexo?: string;
    getName: () => void;
}

const persona: Interfaz2 = {
    nombre: "Raúl",
    apellido: "González",
    edad: 21,
    getName: function(){
        console.log(this.nombre);
    }
}

const persona2: PersonaType = {
    nombre: "César",
    apellido: "Arellano",
    edad: 21,
    getName: function(){
        console.log(this.nombre);
    }
}

const persona3: PersonaType = {
    nombre: "Jair",
    apellido: "Escamilla",
    edad: 21,
    sexo: "M",
    getName: function(){
        console.log(this.nombre);
    },
}