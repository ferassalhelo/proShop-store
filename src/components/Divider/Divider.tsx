import { CSSProperties } from "@mui/styled-engine";
import { DividerBox, DividerLines, Title } from "./divider.style";

interface IPrpos extends CSSProperties {
  text: string;
  align?: "start" | "center" | "end";
}

export default function Divider(props: IPrpos) {
  const styleProps = { ...props };

  delete styleProps.align;
  return (
    <DividerBox textAlign={props.align || "center"} sx={styleProps}>
      <Title>{props.text}</Title>
      <DividerLines></DividerLines>
    </DividerBox>
  );
}
