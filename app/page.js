import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flex}>
        <div className={styles.hero}>1</div>
        <div className={styles.imgContainer}>
          <div className={styles.mediumImg}>
              2
          </div>
          <div>
              3
          </div>

        </div>
        <div className={styles.imgContainer}>
          <div className={styles.mediumImg}>
              4
          </div>
          <div>
              5
          </div>
        </div>
      </div>
    </main>
  );
}
