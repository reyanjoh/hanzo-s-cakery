'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from '../css/components.module.css'

export default function Nav() {

    const pathName = usePathname()

    const pages = [
        {name : 'Home' , path : '/'},
        {name : 'Menu' , path : '/menu'},
        {name : 'About' , path : '/about'},
        {name : 'Contacts' , path : '/contacts'},

    ];

    const isActive = (path) =>{
        return pathName === path;
    }

  return (
    <nav className={styles.mainNav}>
        <Link href="/">
            <Image height={90} width={90} src="/imgs/logo.png" alt="" />
        </Link>

        <ul>
            {pages.map((page) => {
                {return(
                    <li key={page.name}>
                        <Link className= {isActive(page.path) ? 'active-nav' : 'blueHover'} href={page.path} >{page.name}</Link>
                    </li>
                )}
            })}
        </ul>
    
    </nav>
  )
}
