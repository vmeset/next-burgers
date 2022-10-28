import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Burger.module.css'
import { IBurger } from '../types/IBurger';

interface burgerCardProps {
    burger: IBurger
}

const BurgerCard: NextPage<burgerCardProps> = ({burger}) => {
    return (
        <Link href={`/burgers/${burger.id}`}>
          <a className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width="100%" 
                height="100%" 
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </a>
        </Link>
    );
};

export default BurgerCard;