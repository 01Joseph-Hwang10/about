import React, { ReactNode } from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

class PayloadCMSIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromRect(256, 305);
  }

  render(): ReactNode {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={this.className}
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        css={this.css}
      >
        <g>
          <path
            d="M116.204338,0 L256,84.0314829 L256,243.530232 L150.735428,304.426681 L150.735428,144.927526 L10.7718249,61.0076104 L116.204338,0 Z M105.488528,171.121391 L105.488528,295.584108 L0,232.129462 L105.488528,171.121391 Z"
            fill={this.color}
          ></path>
        </g>
      </svg>
    );
  }
}

export default PayloadCMSIcon;
