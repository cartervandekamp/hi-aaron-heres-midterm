import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>

      <main className={styles.main}>
        <Link href="dashboard">Dashboard</Link>
        <div className={styles.buttons}>
          <Counter />
        </div>
      </main>
    </div>
  );
}
