import styles from "./page.module.css";
import EmailCapture from "./components/EmailCapture";

export default function Home() {
  return (
    <main>
        <div className="hero grid-2">
        <div className="grid-2-left justify-center">

          <h1 className="hero-header headers">Taste The <br /> Difference</h1>

          <h2 className="hero-subheader">our artistal approach on food</h2>

          <div className="hero-cta">
              <a className="twin-btn blue-btn" href="#">Order now</a>
              <a className="twin-btn white-btn" href="#">Menu</a>
          </div>

        </div>
        <div className="grid-2-right">
          <img className="hero-img" src="imgs/whole cake with overlay.png" alt="hanzo's cakery featured cake" />
        </div>
      </div>

      <EmailCapture />
    </main>
  );
}
