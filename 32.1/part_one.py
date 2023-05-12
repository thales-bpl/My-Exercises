from numbers import Number
from statistics import mean
from math import ceil


# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def returnHighest(firstNumber: Number, secondNumber: Number):
  return max(firstNumber, secondNumber)


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def returnMean(numberList: list[Number]):
  return mean(numberList)


def returnMeanAlt(numberList: list[Number]):
  return sum(numberList)/len(numberList)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def createSquareN(size: int):
  if size > 1:
    counter = 1
    while counter <= size:
      print(size * '*')
      counter += 1
  else:
    print ('Invalid size. Try using a positive integer number')


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.
def returnLongestName(nameList: list[str]):
  return max(nameList, key=len)


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).
def howManyPaint(areaToBePainted: int):
  bucketsOfPaint = ceil(areaToBePainted / 54)
  totalPrice = bucketsOfPaint * 80
  returnTuple = (bucketsOfPaint, totalPrice)
  return returnTuple


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.
def triangleTriage(firstAngle: int, secondAngle: int, thirdAngle: int):
  if firstAngle + secondAngle + thirdAngle != 180:
    return 'não é triangulo'
  if firstAngle != secondAngle != thirdAngle:
    return 'Triângulo Escaleno'
  if firstAngle == secondAngle == thirdAngle:
    return 'Triângulo Equilátero'
  else:
    return 'Triângulo Isósceles'


print(f'exercise 1 - testing returnHighest(9, 6): {returnHighest(9,6)}')
print(f'exercise 2 - testing returnMean([9, 6, 4, 5, 7]): {returnMean([9, 6, 4, 5, 7])}')
print(f'exercise 2 - testing returnMeanAlt([9, 6, 4, 5, 7]): {returnMeanAlt([9, 6, 4, 5, 7])}')
print('exercise 3 - testing createSquareN(4):')
createSquareN(4)
print('exercise 3 - testing createSquareN(0):')
createSquareN(0)
print(f'exercise 4 - testing returnLongestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]): {returnLongestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])}')
print(f'exercise 5 - testing howManyPaint(100): {howManyPaint(100)}')
print(f'exercise 6 - testing triangleTriage(60, 60, 60): {triangleTriage(60, 60, 60)}')
print(f'exercise 6 - testing triangleTriage(60, 80, 40): {triangleTriage(60, 80, 40)}')
print(f'exercise 6 - testing triangleTriage(40, 40, 100): {triangleTriage(40, 40, 100)}')
print(f'exercise 6 - testing triangleTriage(60, 60, 50): {triangleTriage(60, 60, 50)}')