import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import styles from '../../styles/Burgers.module.css'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()

  return {
    props: {
      burgers: data
    }
  }
}

const Burgers = ({burgers}) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
      {burgers.map(burger => (
        <Link href={`/burgers/${burger.id}`} key={burger.id}>
          <div className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width={150}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Burgers;
