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
}
