import {Point} from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    public points: Point[] = [];

    constructor(points: Point[]);
    constructor(points: Point[], color?: string, filled?: boolean) {

        if (points.length < 3) {
            throw new Error();
        }

        this.points = points;

        this.color = color || 'green';

        this.filled = filled == undefined ? true : filled;

    }

    abstract getType(): string;

    public toString(): string {

        const filled: string = this.filled ? 'filled' : 'not filled';

        const points: string = this.points.map((p) => p.toString()).join(', ')

        return `A Shape with color of ${this.color} and ${filled}. Points: ${points}.`;

    }

    public getPerimeter(): number {

        let perimeter = 0;

        this.points.forEach((p, i) => {
            if (i !== this.points.length - 1) {
                perimeter += p.distance(this.points[i + 1].x, this.points[i + 1].y);
            } else {
                perimeter += p.distance(this.points[0].x, this.points[0].y);
            }
        })

        return perimeter;

    }
}
