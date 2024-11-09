import React from 'react'
import styles from "./page.module.css"
import Button from '@/Components/Button/Button'
import Image from 'next/image'

// Define the structure of params
type Params = {
  category: string;
};

interface CategoryProps {
  params: Params;
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.imgContainer}
            fill={true}
            src="/trevi-fountain.jpg" 
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Minimal Single Product</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.imgContainer}
            fill={true}
            src="/guitar.jpg" 
            alt=""
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Strong Together Charity</h1>
          <p className={styles.desc}>Fado is a music style that arose in Portugal in the early 19th century. The word fado means fate or destiny. Fado music is known for its melancholic melodies that are often accompanied by a Portuguese guitar. The lyrics of Fado songs are typically about love, loss and everyday life struggles. Fado songs are sung with a deep sense of emotion by the so-called Fadistas, the Fado singers.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.imgContainer}
            fill={true}
            src="/statue.jpg" 
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default Category;
