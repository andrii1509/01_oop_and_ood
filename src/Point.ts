export class Point {
  readonly x: number;
  readonly y: number;

  constructor();
  constructor(x?: number, y?: number) {

      this.x = x || 0;

      this.y = y || 0;

  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(x?: number | Point, y?: number): number {

    if (x instanceof Point) {
      return Math.sqrt((x.x - this.x) * (x.x - this.x) + (x.y - this.y)*(x.y - this.y));
    } else if (x != undefined && y != undefined) {
      return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    } else {
      return Math.sqrt((0 - this.x) * (0 - this.x) + (0 - this.y) * (0 - this.y));
    }

  }
}

