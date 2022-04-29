import { Standart, Vegetarian, Sugar } from './PizzaTypes';

type PizzaSlices = 4 | 6 | 8;
type PizzaFlavor = Standart | Vegetarian | Sugar;

interface Pizza {
  slices: PizzaSlices,
  flavor: PizzaFlavor,
}

// class Pizza {
//   constructor(slices: PizzaSlices, flavor: PizzaFlavor) {
//     this.slices = slices;
//     this.flavor = flavor;
//   }
// }

export default Pizza;
