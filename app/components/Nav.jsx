import React from 'react'

import Link from "next/link";

export default function Nav() {
  return (
    // <nav>

    //     <Link className="nav-active" href={"/about"}>About</Link>
    //     <Link href={"/menu"}>Menu</Link>
    //     <Link href={"/contact"}>Contact</Link>
    // </nav>
    <div className="main-nav-container">

    <Link href="/">
        <img height="90" src="imgs/hanzo_s_cakery.png" alt="" />
    </Link>
      <nav className="main-nav">
          <ul>
              <li>
                  <Link className="nav-active blueHover" href="/">Home</Link>
              </li>
              <li>
                  <Link className='blueHover' href="/menu">Menu</Link>
              </li>
              <li>
                  <Link className='blueHover' href="#">Contact</Link>
              </li>
          </ul>
      </nav>
    </div>
  )
}
