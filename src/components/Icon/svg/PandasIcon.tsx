import React, { ReactNode } from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

/**
 * @see https://techicons.dev/icons/pandas
 */
class PandasIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(128);
  }

  render(): ReactNode {
    return (
      <svg
        className={this.className}
        height={this.width}
        width={this.height}
        viewBox={this.viewBox.toString()}
        xmlns="http://www.w3.org/2000/svg"
        css={this.css}
      >
        <path
          d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z"
          color="#000"
          fill={this.color}
        />
        <path
          d="M48.697 48.037h12.25v12.001h-12.25z"
          color="#000"
          fill={this.color}
        />
        <path
          d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z"
          color="#000"
          fill={this.color}
        />
        <path
          d="M67.97 68.983h12.25v12.001H67.97z"
          color="#000"
          fill={this.color}
        />
        <path
          d="M87.238 8.55h12.25v84.552h-12.25z"
          color="#000"
          fill={this.color}
        />
      </svg>
    );
  }
}

export default PandasIcon;
