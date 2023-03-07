import Image from "next/image";
import Styles from "./product.module.css";
import { list } from "../../data/list";

export default function Product({ img = "", tag = "", price = 0 }) {
  return (
    <div className={Styles.content}>
      <Image src={img} width={200} height={200} />

      <div>{tag}</div>
      <div>{price}</div>
    </div>
  );
}
