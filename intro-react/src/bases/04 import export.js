import heroes, {owners} from "./data/heroes";

/*
const getHeroById = (id) => {
  return heroes.find((hero) => {
    return hero.id === id;
  })
} */

//Función flecha que recibe id, devuelve por medio del método find a los heroes cuyo id coincida con el id recibido
const getHeroById = (id) => heroes.find((hero) => hero.id === id);
//Función flecha que recibe owner, devuelve por medio del método filter a los heroes cuyo owner coincida con el owner recibido
const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(heroes);
console.log(owners);
console.log(getHeroById(4));
console.log(getHeroByOwner('DC'));