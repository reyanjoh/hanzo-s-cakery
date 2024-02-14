import styles from "./page.module.css";
import EmailCapture from "./components/EmailCapture";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="hero grid-2">
        <div className="grid-2-left justify-center">

          <h1 className="hero-header headers">Taste The <br /> Difference</h1>

          <h2 className="hero-subheader">our artistal approach on food</h2>

          <div className="hero-cta">
              <Link className="twin-btn blue-btn" href="#">Order now</Link>
              <Link className="twin-btn white-btn" href="/menu">Menu</Link>
          </div>

          {/* <Image 
            src="imgs/blob-cake-1.png"
            width={500}
            height={500}
            alt="cake 1"
          /> */}
          
        <div className="featured-blob-imgs">
          <div className="blob-imgs-container scale-hover">
            <img className="blob-imgs" src="imgs/blob-cake-1.png"/>
            <img src="/imgs/icons/eye.png" className="eye-icon"/>
          </div>
          <div className="blob-imgs-container scale-hover">
            <img className="blob-imgs" src="imgs/blob-cake-2.png"/>
            <img src="/imgs/icons/eye.png" className="eye-icon"/>
          </div>
          <div className="blob-imgs-container scale-hover">
            <img className="blob-imgs" src="imgs/blob-cake-3.png"/>
            <img src="/imgs/icons/eye.png" className="eye-icon"/>
          </div>
        </div>


        </div>
        <div className="grid-2-right">
          <img className="hero-img" src="imgs/whole cake with overlay.png" alt="hanzo's cakery featured cake" />
        </div>
      </div>


      <div className="section-2 grid-2">
        <div className="grid-2-left justify-center"> 
          <div className="blob-imgs-container center-content">
            <img className="blob-background" src="/imgs/blobs/blob-1.png"/>
            <img className="blobed-imgs" src="/imgs/cookies.png"/>
          </div>
        </div>
        <div className="grid-2-right justify-center"> 
          <div>
            <h2 className="headers-2">Enjoy the pure bite</h2>
            <p className="sec-2-p">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </p>

            <a className="learn-more white-btn" href="#">Learn More</a>
          </div>
        </div>
      </div>

      {/* <div className="section-3 ">
        <h2 className="headers-2">Why us?</h2>
        <div className="grid-3">
          <div className="why-us-blob-container why-us-img-1 center-content-column">
           
            <div className="icom-with-bg center-content-column"> */}
              {/* <img className="why-us-icon" src="/imgs/icons/bag-shopping-solid.svg"/> */}
              
              {/* <img className="why-us-icon" src="/imgs/icons/bag-shopping-solid.svg"/>
            </div>

            <h4 className="why-us-headers">Easy to order</h4>
            <p className="why-us-p">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          
          </div>
          <div className="why-us-blob-container why-us-img-2 center-content-column">
              <div className="icom-with-bg center-content-column">
                <img className="why-us-icon" src="/imgs/icons/truck-fast-solid.svg"/>                  
              </div>
            <h4 className="why-us-headers">Easy to order</h4>
            <p className="why-us-p">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
         
          </div>
          <div className="why-us-blob-container why-us-img-3 center-content-column">
              <div className="icom-with-bg center-content-column">
                <img className="why-us-icon" src="/imgs/icons/award-solid.svg"/>
              </div>
            <h4 className="why-us-headers">Easy to order</h4>
            <p className="why-us-p">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          
          </div>
        </div>
      </div> */}

      <div className="section-4 center-content-column"> 
        <div className="center-content-column">
          <h2 className="headers-2">Enjoy the pure bite</h2>
          <p className="sec-4-p">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="grid-3 homepage-cake-card-container">
          
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/418443456_327620643436046_6191546965866612978_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=hF7JYgkzMeoAX8xnPsS&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfB5IKhi2rbWhb6wZYV0j1eFo4FAyIIRae_n5zzXco88ew&oe=65CFE267" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="/imgs/blob-cake-1.png" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="/imgs/blob-cake-1.png" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="/imgs/blob-cake-1.png" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="/imgs/blob-cake-1.png" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>
          <div className="homepage-cake-card"> 
            <div className="cake-card-cover"> 
              <img className="cake-card-cover-img" src="/imgs/blob-cake-1.png" />
            </div>
            <div className="cake-card-body">
              <h5 className="cake-card-header">
                Focaccia
              </h5>

              <span className="cake-card-price">
                ₱ 350
              </span>

              <p className="cake-card-p">
                Top with chocolate buttercream and chocolate chips for 3x the chocolate flavor.
              </p>
            </div>
          </div>

          


        </div>

        <Link className="view-more white-btn" href={'/menu'}>
          View More
        </Link>

      </div>

      <EmailCapture />
    </main>
  );
}
