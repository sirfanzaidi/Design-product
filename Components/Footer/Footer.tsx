"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  
    return (
    <div className={styles.container}>
      <div> © Lamamia. ALL rights reserved</div>
      <div className={styles.social}>
              <Image src="/3.png" width={15} height={15} className={styles.icon}  alt="lama Dev"/>
              <Image src="/4.png" width={15} height={15} className={styles.icon}  alt="lama Dev"/>
              <Image src="/2.png" width={15} height={15} className={styles.icon}  alt="lama Dev"/>
              <Image src="/1.png" width={15} height={15} className={styles.icon}  alt="lama Dev"/>
              
      
      </div>
    </div>
  )
}

export default Footer
