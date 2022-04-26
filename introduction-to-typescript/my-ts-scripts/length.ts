const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function unitError(unit: string) {
  throw new Error(`A unidade ${unit} não é uma unidade válida.`)
}

export function convert(value: number, unit: string, conversion: string): number {
  if (!units.includes(unit)) unitError(unit);
  if (!units.includes(conversion)) unitError(conversion);

  const fromIndex = units.indexOf(unit);
  const toIndex = units.indexOf(conversion);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}