import Image from 'next/image'
import React from 'react'
import styles from './Card.module.scss'
import { Button } from 'primereact/button';

export const Card = ({item}:any) => {
  return (
    <div className={styles.container}>
        <Image width={'100%'} height={'50%'} src={item.img}/>
        <div className={styles.containerTitle}>
            <p className={styles.title}>{item.title}</p>
        </div>
        <p className={styles.description}>{item.description}</p>
        <Button label='Ver más' icon='pi pi-eye' tooltip='Ver más'/>
    </div>
  )
}
