import Pizza from "./Pizza";
import { Sugar } from "./PizzaTypes";

interface PizzaSugar extends Pizza {
  flavor: Sugar,
}

export default PizzaSugar