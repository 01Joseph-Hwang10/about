import { SerializedStyles } from "@emotion/react";
import React from "react";

interface MobileFrameProps {
  children?: React.ReactNode;
  css?: SerializedStyles;
  /**
   * @todo
   * IDK why zoom not works when passed as `css` prop.
   * Needa fix it.
   */
  zoom?: number;
}

class MobileFrame extends React.Component<MobileFrameProps> {
  /**
   * @description
   * .marvel-device.note8::width + .marvel-device.note8::padding * 2
   * Units in pixels.
   */
  static viewBoxWidth = 400 + 10 * 2;

  /**
   * @description
   * .marvel-device.note8::height + .marvel-device.note8::padding * 2
   * Units in pixels.
   */
  static viewBoxHeight = 822 + 45 * 2;

  render(): React.ReactNode {
    return (
      <div className="marvel-device-root" css={this.props.css}>
        <div className="marvel-device note8" style={{ zoom: this.props.zoom }}>
          <div className="inner"></div>
          <div className="overflow">
            <div className="shadow"></div>
          </div>
          <div className="speaker"></div>
          <div className="sensors"></div>
          <div className="more-sensors"></div>
          <div className="sleep"></div>
          <div className="volume"></div>
          <div className="camera"></div>
          <div className="screen">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default MobileFrame;
