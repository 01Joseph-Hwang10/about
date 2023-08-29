import { SerializedStyles, css } from "@emotion/react";
import SVGIcon from "./SVGIcon";

export interface MonotoneSVGIconProps {
  color?: string;
}

abstract class MonotoneSVGIcon<P = {}, S = {}> extends SVGIcon<
  MonotoneSVGIconProps & P,
  S
> {
  public static type() {
    return MonotoneSVGIcon;
  }

  protected get color(): string {
    return this.props.color || "var(--ifm-color-primary-contrast-foreground)";
  }

  protected get css(): SerializedStyles {
    return (
      this.props.css ||
      css`
        path,
        polygon {
          fill: ${this.color};
        }
      `
    );
  }
}

export default MonotoneSVGIcon;
