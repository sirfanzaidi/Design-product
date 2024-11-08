import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
return (
<div className={styles.mainContainer}>

<Link href="/blog/testId" className={styles.container}>
<div className={styles.imageContainer}>
<Image
src="/b-1.jpg"
alt=""
width={400}
height={250}
className={styles.image}
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam! Optio similique blanditiis culpa consequatur minus, suscipit exercitationem doloremque tenetur?</p>
</div>
</Link>

<Link href="/testId" className={styles.container}>
<div className={styles.imageContainer}>
<Image
src="/b2.jpg"
alt=""
width={400}
height={250}
className={styles.image}
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam! Optio similique blanditiis culpa consequatur minus, suscipit exercitationem doloremque tenetur?</p>
</div>
</Link>



<Link href="/testId" className={styles.container}>
<div className={styles.imageContainer}>
<Image
src="/b3.jfif"
alt=""
width={400}
height={250}
className={styles.image}
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam! Optio similique blanditiis culpa consequatur minus, suscipit exercitationem doloremque tenetur?</p>
</div>
</Link>




<Link href="/testId" className={styles.container}>
<div className={styles.imageContainer}>
<Image
src="/b-5.jpg"
alt=""
width={400}
height={250}
className={styles.image}
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam! Optio similique blanditiis culpa consequatur minus, suscipit exercitationem doloremque tenetur?</p>
</div>
</Link>




<Link href="/testId" className={styles.container}>
<div className={styles.imageContainer}>
<Image
src="/b-7.jfif"
alt=""
width={400}
height={250}
className={styles.image}
/>
</div>
<div className={styles.content}>
<h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam! Optio similique blanditiis culpa consequatur minus, suscipit exercitationem doloremque tenetur?</p>
</div>
</Link>





</div>
);
};
export default Blog;