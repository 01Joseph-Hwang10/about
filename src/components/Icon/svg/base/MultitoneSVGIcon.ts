import { SerializedStyles, css } from "@emotion/react";
import SVGIcon from "./SVGIcon";

export interface MultitoneSVGIconProps {
  colors: string[];
}

abstract class MultitoneSVGIcon<P = {}, S = {}> extends SVGIcon<
  MultitoneSVGIconProps & P,
  S
> {
  public static type() {
    return MultitoneSVGIcon;
  }

  protected get colors(): string[] {
    if (this.props.colors.length === 0)
      throw new Error("No colors provided for multitone icon");
    return this.props.colors;
  }

  protected get css(): SerializedStyles {
    return (
      this.props.css ??
      css`
        ${this.colors.map(
          (color, index) => `
          .multitone-color-${index} {
            fill: ${color};
          }
        `,
        )}
      `
    );
  }

  protected useColorAt(index: number): string {
    if (index >= this.colors.length)
      throw new Error("Index out of bounds for multitone icon");
    return `multitone-color-${index}
    `;
  }
}

export default MultitoneSVGIcon;
