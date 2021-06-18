import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {

  constructor(point1: Point, point2: Point, point3: Point);
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {

    super([point1, point2, point3]);

    this.filled = filled == undefined ? true : filled;

    this.color = color || 'green';

  }

  public toString(): string {

    let string: string = 'Triangle[' +
      this.points.map((p, i) => {
        return `v${i + 1}=${p.toString()}`}
      ).join(',') + ']';

    return string;
  }

  public getType(): string {

    const sides: number[] = this.getSides(this.points);

    const equalSidesPairsCount: number = this.getPairs(sides);

    switch (equalSidesPairsCount) {
      case 0 : return 'scalene triangle'
      case 1 : return 'isosceles triangle'
      case 2 : return 'equilateral triangle'
      default : return 'undefined triangle'
    }

  }

  private getPairs(arr: number[]): number {

    let counter = 0;

    arr.forEach((el, i) => {
      if (arr[i + 1] === el) {
        counter++
      }
    })

    return counter

  }

  private getSides(points: Point[]): number[] {

    return points.map((p, i) => {
      if (i < 2) {
        return +p.distance(this.points[i + 1].x, this.points[i + 1].y).toFixed(2) + 0.01;
      } else {
        return +p.distance(this.points[0].x, this.points[0].y).toFixed(2) + 0.01;
      }
    })

  }
}
