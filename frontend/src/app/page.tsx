import styles from "./page.module.css";
import AddProduct from "./components/product/AddProduct";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <AddProduct /> */}
      {/* <Login /> */}
      <Register />
    </main>
  );
}
