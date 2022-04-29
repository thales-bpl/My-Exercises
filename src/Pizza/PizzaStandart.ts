import Pizza from './Pizza';
import { Standart } from './PizzaTypes';

interface PizzaStandart extends Pizza {
  flavor: Standart,
}

export default PizzaStandart