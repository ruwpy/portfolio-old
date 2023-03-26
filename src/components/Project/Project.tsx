import "./Project.scss";
import Button from "../Button/Button";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface ProjectProps {
  name: string;
  qrCode: JSX.Element;
  barCode: JSX.Element;
  brailleName: JSX.Element;
  codeLink?: string;
  demoLink?: string;
  image: string;
  endYear: number | string;
}

export default function Project({
  name,
  qrCode,
  barCode,
  brailleName,
  codeLink,
  demoLink,
  endYear,
  image,
}: ProjectProps) {
  return (
    <div className="project">
      <img src={image} alt="project preview image" className="project__image" />
      <div className="project__container">
        <div className="project__info">
          <div className="project__main-container">
            <div className="project__name">
              <span className="project__name eng">{name.toUpperCase()}</span>
              <span className="project__name braille">{brailleName}</span>
            </div>
            <div className="project__buttons">
              {codeLink && (
                <Link to={codeLink} target="_blank">
                  <Button buttonStyle="primarywdot" size="small">
                    code
                  </Button>
                </Link>
              )}
              {demoLink && (
                <Link to={demoLink} target="_blank">
                  <Button buttonStyle="primarywdot" size="small">
                    live demo
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="project__codes">
            <div className="project__codes-container">
              <div className="project__barcode">{barCode}</div>
              <div className="project__expireddate">
                <span>
                  EXPIRED <br /> DATE
                </span>
                <span>{endYear}</span>
              </div>
            </div>
            <div className="project__qrcode">{qrCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
