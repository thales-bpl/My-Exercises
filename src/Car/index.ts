import Car from './Car';
import CarColors from './CarColors';
import CarDirections from './CarDirections';
import CarDoors from './CarDoors';

const honda = new Car('Honda', CarColors.SILVER, 4)

honda.openTheDoor(CarDoors.DRIVER);
honda.closeTheDoor(CarDoors.DRIVER);
honda.turnOn();
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.LEFT);
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.RIGHT);
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.RIGHT);
honda.speedDown();
honda.stop();
honda.openTheDoor(CarDoors.BEHIND_RIDER);
honda.closeTheDoor(CarDoors.BEHIND_RIDER);
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.RIGHT);
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.LEFT);
honda.speedUp();
honda.speedDown();
honda.turn(CarDirections.RIGHT);
honda.speedDown();
honda.stop();
honda.openTheDoor(CarDoors.BEHIND_RIDER);
honda.closeTheDoor(CarDoors.BEHIND_RIDER);
honda.speedUp();