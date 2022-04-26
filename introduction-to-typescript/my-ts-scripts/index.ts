import * as Length from './length';
import * as Mass from './mass';
import * as Characters from './characters';

console.log("_________________ \n");
console.log('exercise length conversion:');
console.log(`Converting: 1 kilometer equals to ${Length.convert(1, 'km', 'cm')} cm`);
console.log(`Converting: 10 meters equals to ${Length.convert(10, 'm', 'km')} km`);
console.log("_________________ \n");

console.log('exercise mass conversion:');
console.log(`Converting: 1 kilogram equals to ${Mass.convert(1, 'kg', 'cg')} cg`);
console.log(`Converting: 10 grams equals to ${Mass.convert(10, 'g', 'kg')} kg`);
console.log("_________________ \n");

console.log('exercise MMO characters:');
console.log(Characters);

