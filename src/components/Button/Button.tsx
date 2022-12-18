import { CSSProperties } from "@emotion/serialize";
import { Button as Btn, CircularProgress } from "@mui/material";
import { ReactNode } from "react";

interface IProps extends CSSProperties {
  children: ReactNode | string;
  // disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  variant?: "text" | "outlined" | "contained";
  type?: "submit";
}

export default function Button(props: IProps) {
  const styleProps = { ...props };
  delete styleProps.onClick;
  delete styleProps.loading;
  delete styleProps.children;
  delete styleProps.variant;
  delete styleProps.type;

  return (
    <Btn
      type={props.type}
      disabled={props.loading}
      onClick={props.onClick}
      variant={props.variant ? props.variant : "contained"}
      sx={{
        backgroundColor: "primary",
        borderRadius: "10px",
        minHeight: "40px",
        minWidth: "50px",
        boxShadow: "none",
        color: "text.primary",
        fontSize: "1.5rem",
        lineHeight: 1,
        textTransform: "none",
        width: "100%",
        "&:hover": { backgroundColor: "#e6c700" },
        ...styleProps,
      }}
    >
      {props.loading ? (
        <CircularProgress
          style={{ width: "25px", height: "25px", color: "black" }}
        />
      ) : (
        props.children
      )}
    </Btn>
  );
}
