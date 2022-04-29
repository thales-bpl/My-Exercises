import CarColors from './CarColors';
import CarDirections from './CarDirections';
import CarDoors from './CarDoors';

interface Car {
  _brand: string;
  _color: CarColors;
  _doors: number;
}

class Car {
  constructor(brand: string, color: CarColors, doors: number) {
    this._brand = brand; 
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log(`Honk honk`);
  }

  openTheDoor(door: CarDoors): void {
    console.log(`Abrindo porta ${door}.`);
  }

  closeTheDoor(door: CarDoors): void {
    console.log(`Fechando porta ${door}.`);
  }

  turnOn(): void {
    console.log('Ligando o carro');
  }

  turnOff(): void {
    console.log('Desligando o carro');
  }

  speedUp(): void {
    console.log(`Acelerando o carro`);
  }

  speedDown(): void {
    console.log(`Desacelerando o carro`);
  }

  stop(): void {
    console.log(`Parando o carro`);
  }

  turn(direction: CarDirections): void {
    console.log(`Virando o carro para ${direction}`);
  }
}

export default Car;
