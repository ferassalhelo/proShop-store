import makeAnimated from "react-select/animated";
import Select from "react-select";
import React from "react";
import "./style.css";
import { useTheme } from "@mui/material/styles";

const animatedComponents = makeAnimated();

type options = { value: string; label: string }[];
interface IProps {
  options: options;
  handleValues: any;
}

export default function SelectBox(props: IProps) {
  const theme = useTheme();
  return (
    <Select
      className={
        theme.palette.mode === "light" ? "bg-select" : "bg-select-dark"
      }
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={props.options}
      onChange={(e: any) => {
        props.handleValues(e);
      }}
      placeholder=" "
    />
  );
}
