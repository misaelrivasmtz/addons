const pokemon = [
  {
    name: "Pikachu",
    type: "electric",
    attackPoints: 55,
    defensePoints: 40,
  },
  {
    name: "Bulbasaur",
    type: "grass",
    attackPoints: 49,
    defensePoints: 49,
  },
  {
    name: "Charmander",
    type: "fire",
    attackPoints: 52,
    defensePoints: 43,
  },
  {
    name: "Squirtle",
    type: "water",
    attackPoints: 48,
    defensePoints: 65,
  },
];

//1
const foundItem = pokemon.find((items) => {
    return items.type === "fire";
});

if(foundItem){
    console.log("Sí, existe elementos tipo fuego en el equipo");
}


//2
console.log("-------------------------");
const clonedItems = pokemon.slice(0, 2);
//console.log(clonedItems);

//3
console.log("-------------------------");
pokemon.splice(2, 0, {name: "Mewtwo", type: "psychic", attackPoints: 110, defensePoints: 90});
//console.log(pokemon);

//4
console.log("-------------------------");
pokemon.splice(1, 1);
//console.log(pokemon);

//5
console.log("-------------------------");
const elementos = pokemon.map((items) => {
    return `The pokemon ${items.name} is an ${items.type} with ${items.attackPoints} attack points and ${items.defensePoints} defense points`
});
console.log(elementos);

//6


