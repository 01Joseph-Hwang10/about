/* eslint-disable no-unused-vars */
class Rect {
  constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly top: number,
    public readonly right: number,
    public readonly bottom: number,
    public readonly left: number,
  ) {}

  public static fromElementOffset(element: HTMLElement) {
    return new Rect(
      element.offsetWidth,
      element.offsetHeight,
      element.offsetTop,
      element.offsetLeft + element.offsetWidth,
      element.offsetTop + element.offsetHeight,
      element.offsetLeft,
    );
  }

  public static zero() {
    return new Rect(0, 0, 0, 0, 0, 0);
  }
}

export default Rect;
