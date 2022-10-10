import React from "react";
import { Inputs } from "./input.style";

interface IProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
}

export default function Input(props: IProps) {
  return <Inputs type={props.type || "text"} placeholder={props.placeholder} />;
}
