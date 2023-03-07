import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <button onClick={() => setNumber(number + 2)}>Increment</button>
        <button onClick={() => setNumber(number - 2)}>Decrement</button>
        {number}
      </div>
    </>
  );
}
