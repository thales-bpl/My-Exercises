import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaTypes";

interface PizzaVeg extends Pizza {
  flavor: Vegetarian,
}

export default PizzaVeg