import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActiveValue,
  ColorBox,
  ColorItem,
  SizeBox,
} from "./productOptions.style";

interface IProps {
  colors?: string[];
  sizes?: string[];
}
export default function ProductColors(props: IProps) {
  let [t] = useTranslation();
  let [active, setActive] = useState("");
  return (
    <>
      <Typography my="25px" variant="h5" color="text.secondary">
        {t("size")} :{" "}
        <ActiveValue>{active === "" ? t("selectOptions") : active}</ActiveValue>
      </Typography>
      <Grid container>
        {props.colors?.map((color: string) => (
          <ColorBox
            key={color}
            onClick={() => setActive(color)}
            borderColor={`${
              color !== active ? "transparent !important" : "text.primary"
            }`}
          >
            <ColorItem bgcolor={color} />
          </ColorBox>
        ))}
        {props.sizes?.map((size: string) => (
          <SizeBox
            key={size}
            onClick={() => setActive(size)}
            bgcolor={`${
              size !== active ? "background.secondary" : "text.primary"
            }`}
            color={`${size !== active ? "text.primary" : "background.primary"}`}
          >
            {size}
          </SizeBox>
        ))}
      </Grid>
    </>
  );
}
