import Image from "next/image";
import styles from "./page.module.css";
import Card from "./UI/card/card";
import AddProduct from "./components/product/AddProduct";
// import ListItem from "./UI/listItem/listItem";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddProduct />
    </main>
  );
}
