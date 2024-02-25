import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../css/components.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerMain}>
        <div className={styles.footerLogoContainer}>
            <Link href="">
                <Image height={90} width={90} src="/imgs/logo.png" alt="" />
            </Link>
            <ul>
                
                <li>
                    <Link className="blueHover" href="tel:0912-232-1231">0912-232-1231</Link>
                </li>
                <li>
                    <Link className="blueHover" href="mailto:Hanzoscakery@gmail.com">Hanzoscakery@gmail.com</Link>
                </li>
                <li>
                    <Link className="blueHover" href="#">
                        Mampaalong street, <br/>
                        Murillo St, Malaybalay, <br/>
                        8700 Bukidnon
                    </Link>
                </li>
            </ul>
        </div>

        <div className={styles.footerSitemap}>
            <ul>
                <li>
                    <span>Services</span>
                    <ul>
                        <li>
                            <Link className="blueHover" href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Menu</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Order</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Popular</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Contact</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <span>About</span>
                    <ul>
                        <li>
                            <Link className="blueHover" href="#">About us</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Support</Link>
                        </li>
                        <li>
                            <Link className="blueHover" href="#">Terms of Service</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <span>Follow us</span>
                    <ul>
                        <li>
                            <Link className="blueHover" target='_blank' href="https://www.facebook.com/profile.php?id=100085643388007">Facebook</Link>
                        </li>
                        <li>
                            <Link className="blueHover" target='_blank' href="#">tik-tok</Link>
                        </li>
                        <li>
                            <Link className="blueHover" target='_blank' href="#">Pinterest</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
  )
}
