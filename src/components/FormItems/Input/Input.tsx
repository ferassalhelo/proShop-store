import { Field } from "formik";
import React from "react";
import { Inputs } from "./input.style";

interface IProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  name?: string;
  as?: React.ElementType<Node>;
  width?: string;
  height?: string;
  component?: string;
}

export default function Input(props: IProps) {
  return (
    <Inputs
      height={props.height}
      as={Field}
      type={props.type || "text"}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}
