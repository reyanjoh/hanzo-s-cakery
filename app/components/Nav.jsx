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

    <a href="#">
        <img height="90" src="imgs/hanzo_s_cakery.png" alt="" />
    </a>
      <nav className="main-nav">
          <ul>
              <li>
                  <Link className="nav-active" href="#">Home</Link>
              </li>
              <li>
                  <Link href="#">Menu</Link>
              </li>
              <li>
                  <Link href="#">Contact</Link>
              </li>
          </ul>
      </nav>
    </div>
  )
}
