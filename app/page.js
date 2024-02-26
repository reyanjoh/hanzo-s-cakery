import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.flex}>
        <div className={styles.hero}>
          {/* <Image width="100%" src="/imgs/8.jpg" alt=""/> */}
          <img src="/imgs/10.jpg" alt="" />

          <div className={styles.heroContent}>
              <h1>Taste the Difference</h1>
              <h2>our artistal approach on food</h2>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <div className={styles.mediumImg}>
            <a href="#">
            <img src="/imgs/1.jpg" alt="" />  
            </a>
          </div>
          <div className={styles.smallImages}>
              <div className="flex-colum">
                <div>
                  <div className="smallImgCaption">
                    <h3>The Best</h3>
                    <p>description</p>
                  </div>
                  <img height="100%" src="/imgs/1.jpg" alt="" />  
                  
                </div>
                <div className="flex-row-reverse">

                  <div className="smallImgCaption">
                    smallImgCaption
                  </div>
                  <div className="smallImg">
                    smallImg
                  </div>

                </div>
              </div>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <div>
              
          </div>
          <div className={styles.mediumImg}>
            <a href="#">
            <img src="/imgs/3.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
