import Pizza from './Pizza';
import PizzaStandart from './PizzaStandart';
import PizzaVeg from './PizzaVeg';
import PizzaSugar from './PizzaSugar';

// const muzzarela = new Pizza(8, 'Muzzarela');
// const margherita = new Pizza(6, "Margherita");
// const nutella = new Pizza(4, "Nutella");

const calabresa: PizzaStandart = {
  slices: 4,
  flavor: "Calabresa",
}

const frango: PizzaStandart = {
  slices: 6,
  flavor: "Frango",
}

const pepperoni: PizzaStandart = {
  slices: 8,
  flavor: "Pepperoni",
}

const margherita: PizzaVeg = {
  slices: 6,
  flavor: "Margherita",
}

const cogumelos: PizzaVeg = {
  slices: 8,
  flavor: "Cogumelos",
}

const nutella: PizzaSugar = {
  slices: 4,
  flavor: "Nutella",
}

console.log(calabresa);
console.log(frango);
console.log(pepperoni);
console.log(margherita);
console.log(cogumelos);
console.log(nutella);
