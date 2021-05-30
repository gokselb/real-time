export class UtilsService {
  private static gcd: (a: number, b: number) => number = (
    a: number,
    b: number
  ) => (a ? UtilsService.gcd(b % a, a) : b);

  private static lcm: (a: number, b: number) => number = (a, b) =>
    (a * b) / UtilsService.gcd(a, b);

  public static findLCM(numbers: number[]): number {
    return numbers.reduce(this.lcm);
  }

  public static getColors(): string[] {
    return [
      '#e43d40',
      '#21b6a8',
      '#f85c70',
      '#18a558',
      '#fabec0',
      '#2b7c85',
      '#175873',
      '#f37970',
      '#a3ebb1',
      '#0c1446',
      '#87aca3',
      '#116530',
    ];
  }
}
