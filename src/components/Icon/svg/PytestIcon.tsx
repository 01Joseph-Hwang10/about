import React, { ReactNode } from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

/**
 * @see https://icon.icepanel.io/Technology/svg/pytest.svg
 */
class PytestIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(128);
  }

  render(): ReactNode {
    return (
      <svg
        className={this.className}
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        xmlns="http://www.w3.org/2000/svg"
        css={this.css}
      >
        <path
          d="M31.512 30.398h61.304a3.006 3.006 0 010 6.012H31.512a3.007 3.007 0 01-3.004-3.004 3.008 3.008 0 013.004-3.008zm0 0"
          fill={this.color}
        />
        <path d="M32.047 24.32H44.37v2.844H32.047zm0 0" fill={this.color} />
        <path d="M48.168 24.32h12.324v2.844H48.168zm0 0" fill={this.color} />
        <path d="M64.07 24.32h12.328v2.844H64.07zm0 0" fill={this.color} />
        <path
          d="M79.91 24.32h12.324v2.844H79.91zm0 15.22h12.324v20.835H79.91zm0 0"
          fill={this.color}
        />
        <path d="M64.07 39.54h12.352v33.847H64.07zm0 0" fill={this.color} />
        <path d="M48.168 39.54h12.324v50.698H48.168zm0 0" fill={this.color} />
        <path d="M32.047 39.54H44.37v61.792H32.047zm0 0" fill={this.color} />
      </svg>
    );
  }
}

export default PytestIcon;
