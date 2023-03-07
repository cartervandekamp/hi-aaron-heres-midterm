import Head from "next/head";
import Link from "next/link";
import styles from "../styles/dashboard.module.css";
import Product from "../components/Product";
import { list } from "../data/list";
import { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([...list.clothing]);
  return (
    <>
      <main className={styles.main}>
        <h1>BCIT Geared Up</h1>
        <Link href="/">Home</Link>
        <>
          {data &&
            data.map((i, index) => {
              return (
                <div key={index}>
                  <Product img={i.image} tag={i.title} price={i.cost} />
                </div>
              );
            })}
        </>
      </main>
    </>
  );
}
