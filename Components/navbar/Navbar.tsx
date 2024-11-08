"use client"
import styles from './navbar.module.css'
import Link from 'next/link'
import React from 'react'


const Links = [
    {id: 1,
    title: "Home",
    url: "/",
},
{id: 2,
    title: "portfolio",
    url: "/portfolio",
},
{id: 3,
    title: "Blog",
    url: "/blog",
},
{id: 4,
    title: "About",
    url: "/about",
},
{id: 5,
    title: "Contact",
    url: "/contact",
},
// {id: 6,
//     title: "Dashboard",
//     url: "/dashboard",
// },

];




const Navbar = () => {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        Iffi4u
        </Link>
        <div className={styles.Links}>
         {Links.map((link) =>(
            <Link key={link.id} href={link.url} className={styles.Link}> {link.title}</Link>
         ))}   
         {/* <button
         className={styles.logout}
          onClick={()=>{
            console.log("Logged out");
            }}
            >
            Logout
            </button> */}
      </div>
    </div>
  )
}

export default Navbar
