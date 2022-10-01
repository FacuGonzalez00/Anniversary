import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import styles from './Carousel.module.scss'
import { Button } from 'primereact/button';
import Image from 'next/image';

type Props = {
    items: any,
    header: string
    onClick(item: any): void,
}

export const CarouselCustom = ({items, header, onClick}: Props) => {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];



  const productTemplate = (item: any) => {
    return (
      <div className={styles.container}>
        <div className="product-item">
        <div className="product-item-content">
            <div className="mb-3">
            {item.type === 'img' ? (
              <Image width={'290px'} height='300px' src={item.file} />
            ) : (
              <div>
                <video width='300px' height='300px' autoPlay loop controls>
                  <source src={item.file} type='video/mp4'></source>
                </video>
              </div>
            )}            </div>
            <div>
                <h6 className="mt-0 mb-3">{item.date}</h6>
                <h4 className="mb-1">{item.title}</h4>
                <h6 className="mt-0 mb-3">{item.description}</h6>
                <div className="car-buttons mt-5">
                    <Button icon="pi pi-eye" className="p-button-help p-button-text" tooltip='Recordar más' onClick={ () => onClick(item)}/>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
  };

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={items}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          header={<h2 style={{marginLeft: '32px'}}>{header}</h2>}
        />
      </div>
    </div>

  );
};
