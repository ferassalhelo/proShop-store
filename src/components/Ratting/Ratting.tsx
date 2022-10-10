import { Rate } from "./ratting.style";

interface IProps {
  value: number;
  readonly?: boolean;
}

export default function Rating(props: IProps) {
  return <Rate precision={0.5} value={props.value} readOnly={props.readonly} />;
}
