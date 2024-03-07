import { useMemo } from "react";
import "./RectangleFrame.css";

const RectangleFrame = ({ wrapperEllipse1Height, propHeight }) => {
  const hiMuhammadAsadContainerStyle = useMemo(() => {
    return {
      height: wrapperEllipse1Height,
    };
  }, [wrapperEllipse1Height]);

  const welcomeBackStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <header className="rectangle-frame2">
      <div className="assets-table-footer-arrow">
        <div className="wrapper-info-circle">
          <img
            className="info-circle-icon"
            loading="lazy"
            alt=""
            src="/info-circle.svg"
          />
        </div>
        <div className="wrapper-notification">
          <img
            className="notification-icon"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <div className="text-frame4">
          <div className="line-frame">
            <div
              className="hi-muhammad-asad-container"
              style={hiMuhammadAsadContainerStyle}
            >
              <span>{`Hi, `}</span>
              <span className="muhammad-asad14">Muhammad Asad</span>
            </div>
            <div className="welcome-back" style={welcomeBackStyle}>
              welcome back!
            </div>
          </div>
          <div className="wrapper-ellipse-1">
            <img
              className="wrapper-ellipse-1-child"
              loading="lazy"
              alt=""
              src="/ellipse-1@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default RectangleFrame;
