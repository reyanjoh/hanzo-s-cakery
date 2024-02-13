'use client';

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {

  const pathname = usePathname()

  const pages = [
    {name: 'Home', href: '/'},
    {name: 'Menu', href: '/menu'},
    {name: 'About', href: '/about'}
  ];

  const isActive = (path) => {
    // console.log(pathname);
    return pathname === path;
  }


  return (

    <div className="main-nav-container">

    <Link href="/">
        <img height="90" src="imgs/hanzo_s_cakery.png" alt="" />
    </Link>
      <nav className="main-nav">
          <ul>

              {pages.map((page) =>{
                // const isActive = pathname.startsWith(link.href);

                
                {return(
                  <li key={page.name}>
                  <Link className={isActive(page.href) ? 'active-nav' : 'blueHover'} href={page.href}>{page.name}</Link>
                  </li>
                )}
              })}

              {/* <li>
                  <Link className="blueHover" href="/">Home</Link>
              </li>
              <li>
                  <Link className='blueHover' href="/menu">Menu</Link>
              </li>
              <li>
                  <Link className='blueHover' href="#">Contact</Link>
              </li> */}
          </ul>
      </nav>
    </div>
  )
}
