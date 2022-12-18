import ProductColors from "../../../components/ProductOptions/ProductOptions";
import { Screen } from "../../screens.style";

export default function CartPage() {
  return (
    <Screen>
      <ProductColors colors={["red", "green", "yellow"]} />
      <ProductColors sizes={["red", "green", "yellow"]} />
    </Screen>
  );
}
