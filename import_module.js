// myMathModule.js
// В данном модуле мы создали функцию которая вычисляет
// площадь треугольника, принимая на вход высоту и длину основания
// BEGIN
export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};
// END



// solution.js
// В данном модуле, мы импортировали нашу функцию 
// вычисляющую площадь треугольника из myMathModule.js 
// и написали новую функцию
// BEGIN
import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;
// END