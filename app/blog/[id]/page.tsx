import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


const BlogPost = () => {
return (
<div className={styles.container}>
  <div className={styles.top}>
    <div className={styles.info}>
    <h1 className={styles.title}>
dolor sit amet consectetur adip
</h1>
<p className={styles.desc}>
Lorem ipsum dolor sit amet consectetur adip
Lorem ipsum dolor sit amet consectetur adip
Lorem ipsum dolor sit amet consectetur adip
Lorem ipsum dolor sit amet consectetur adip
</p>
<div className={styles.author}>
<Image
src="/iffi.jpg"
alt=""
width={40}
height={40}
className={styles.avatar}
/>
<span className={styles.username}>Irfan Zaidi</span>
<div/>
<div/>
<div className={styles.imageContainer}>
<Image
src="/cta-banner.JPG"
alt=""
fill={true}
className={styles.image}
/>
</div>
</div>
<div className={styles.content}>
<p className={styles.text}>
Lorem ipsum dolor sit amet consectetur adipis
 cumque harum voluptas nulla nisi voluptates vO
 ptio similique blanditiis culpa consequatur 
 xercitationem doloremque tenetur?
 Lorem ipsum dolor sit amet consectetur adipis
 Lorem ipsum dolor sit amet consectetur adipis
 Lorem ipsum dolor sit amet consectetur adipis
<br />
<br />
Lorem ipsum dolor sit amet consectetur adipis cumque harum voluptas nulla nisi voluptates v Optio similique blanditiis culpa consequatur exercitationem doloremque tenetur?
<br />
<br />
Lorem ipsum dolor sit amet consectetur adipi cumque harum voluptas nulla nisi voluptates Optio similique blanditiis culpa consequatur exercitationem doloremque tenetur? Lorem ipsu consectetur adipisicing elit. Qui iure cumque nisi voluptates voluptatem ex magnam nam! Opt culpa consequatur minus, suscipit exercitatio Lorem ipsum dolor sit amet consectetur adipis cumque harum voluptas nulla nisi voluptates v Optio similique blanditiis culpa consequatur exercitationem doloremque tenetur?
</p>
</div>
</div>
</div>
</div>
);
};

export default BlogPost;