import Container from "./container";
import cn from "classnames";

export default function Alert({ product }) {
  return (
    <div
      className={cn("border-b", {
        "border-accent-7 text-white": product,
        "border-accent-2": !product,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
            This is page is a alert product.
        </div>
      </Container>
    </div>
  );
}
