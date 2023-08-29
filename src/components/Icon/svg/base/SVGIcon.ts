import React from "react";
import { SerializedStyles } from "@emotion/react";
import { SizeBase, ViewBox } from "./utils";

export interface SVGProps {
  size?: number;
  sizeBase?: SizeBase;
  className?: string;
  /**
   * @description
   * Custom styles for the icon.
   * This is applied on "path" tag.
   *
   * Also, if defined, it overrides the @param {string} color prop.
   */
  css?: SerializedStyles;
}

abstract class SVGIcon<P = {}, S = {}> extends React.Component<
  P & SVGProps,
  S
> {
  public static type() {
    return SVGIcon;
  }

  protected get size(): number {
    return this.props.size || 32;
  }

  protected abstract get viewBox(): ViewBox;

  protected get sizeBase(): SizeBase {
    return this.props.sizeBase || "width";
  }

  protected get heightToWidthRatio(): number {
    return this.viewBox.height / this.viewBox.width;
  }

  protected get widthToHeightRatio(): number {
    return this.viewBox.width / this.viewBox.height;
  }

  protected get width(): number {
    return this.sizeBase === "width"
      ? this.size
      : this.size * this.widthToHeightRatio;
  }

  protected get height(): number {
    return this.sizeBase === "height"
      ? this.size
      : this.size * this.heightToWidthRatio;
  }

  protected abstract get css(): SerializedStyles;

  protected get className(): string {
    return this.props.className;
  }

  abstract render(): React.ReactNode;
}

export default SVGIcon;
