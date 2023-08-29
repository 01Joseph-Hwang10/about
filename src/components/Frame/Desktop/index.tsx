import { SerializedStyles } from "@emotion/react";
import React from "react";

interface DesktopFrameProps {
  children?: React.ReactNode;
  css?: SerializedStyles;
  /**
   * @todo
   * IDK why zoom not works when passed as `css` prop.
   * Needa fix it.
   */
  zoom?: number;
}

class DesktopFrame extends React.Component<DesktopFrameProps> {
  /**
   * @description
   * .marvel-device.macbook::width + .marvel-device.macbook::padding-right * 2
   * Units in pixels.
   */
  static viewBoxWidth = 960 + 44 * 2;

  /**
   * @description
   * .marvel-device.macbook::height + .marvel-device.macbook::padding-top + .marvel-device.macbook::padding-bottom
   * Units in pixels.
   */
  static viewBoxHeight = 600 + 44 + 76;

  render(): React.ReactNode {
    return (
      <div className="marvel-devie-root" css={this.props.css}>
        <div
          className="marvel-device macbook"
          style={{ zoom: this.props.zoom }}
        >
          <div className="top-bar"></div>
          <div className="camera"></div>
          <div className="screen">{this.props.children}</div>
          <div className="bottom-bar"></div>
        </div>
      </div>
    );
  }
}

export default DesktopFrame;
