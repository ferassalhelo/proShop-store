import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Badg, BadgeName } from "./bage.style";

interface IProps {
  icon: ReactNode;
  text: string;
  badgeContent?: number;
  path?: string;
  onClick?: () => void;
}

export default function Badge(props: IProps) {
  return (
    <>
      {props.path ? (
        <Link to={props.path}>
          <Badg badgeContent={props.badgeContent}>{props.icon}</Badg>
          <BadgeName>{props.text}</BadgeName>
        </Link>
      ) : (
        <div onClick={props.onClick} style={{ cursor: "pointer" }}>
          <Badg badgeContent={props.badgeContent}>{props.icon}</Badg>
          <BadgeName>{props.text}</BadgeName>
        </div>
      )}
    </>
  );
}
