from numbers import Number
from math import ceil


# Exercício 1: Dada uma lista, descubra o menor elemento.
def returnLower(number: list[Number]):
  return min(number)


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.
def createTriangleN(size: int):
  if size > 1:
    counter = 1
    while counter <= size:
      print(counter * '*')
      counter += 1
  else:
    print('invalid size.')


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
def sumAllDigitsFromOne(number: Number):
  sum = 0
  counter = 0
  while counter <= number:
    sum += counter
    counter += 1
  return sum


# Exercício 4: Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente
alcoholInfo = {
  'code': 'A',
  'literPrice': 1.90,
  'alcoholSmallDiscount': 0.97,
  'alcoholBigDiscount': 0.95
}

gasInfo = {
  'code': 'G',
  'literPrice': 2.50,
  'gasSmallDiscount': 0.96,
  'gasBigDiscount': 0.94
}

discount = {
  'threshold': 20,
  'alcoholSmall': 0.97,
  'alcoholBig': 0.95,
  'gasSmall': 0.96,
  'gasBig': 0.94
}

def gasPrices(liters: Number, gasType: str):
  if liters <= 0 or (gasType != alcoholInfo['code'] and gasType != gasInfo['code']):
    return 'Sorry, we can only sell positive amount of liters of either Gasoline(G) or Alcohol(A).'
  if gasType == alcoholInfo['code']:
    partialPrice = liters * alcoholInfo['literPrice']
    if liters < discount['threshold']:
      return partialPrice * discount['alcoholSmall']
    if liters >= discount['threshold']:
      return partialPrice * discount['alcoholBig']
  if gasType == gasInfo['code']:
    partialPrice = liters * gasInfo['literPrice']
    if liters < discount['threshold']:
      return partialPrice * discount['gasSmall']
    if liters >= discount['threshold']:
      return partialPrice * discount['gasBig']


print(f'ex 1 list [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]: {returnLower([5, 9, 3, 19, 70, 8, 100, 2, 35, 27])}')
print('ex 2 - createTriangle(4):')
createTriangleN(4)
print(f'ex 3 - sumAllDigitsFromOne(5): {sumAllDigitsFromOne(5)}')
print(f'ex 4 - gasPrices(10, "A"): {gasPrices(10, "A")}')
print(f'ex 4 - gasPrices(20, "G"): {gasPrices(20, "G")}')
print(f'ex 4 - gasPrices(-1, "A"): {gasPrices(-1, "A")}')