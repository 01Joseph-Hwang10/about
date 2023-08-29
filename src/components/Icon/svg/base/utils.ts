/* eslint-disable no-unused-vars */

export class ViewBox {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly width: number,
    public readonly height: number,
  ) {}

  static fromRect(width: number, height: number): ViewBox {
    return new ViewBox(0, 0, width, height);
  }

  static fromSquare(side: number): ViewBox {
    return ViewBox.fromRect(side, side);
  }

  toString(): string {
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }
}

export type SizeBase = "width" | "height";
