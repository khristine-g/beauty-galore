import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from './ProductList';
import '../Home.css';


const Home = () => {
  const slides = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0012/1657/7656/files/self-care-items-every-woman-needs.jpg?v=1680117344',
      text: 'Discover our self-care essentials',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0492/8680/7715/files/shiko_skincare_banner.jpg?v=1616592023',
      text: 'Experience the magic of  skincare',
    },
    {
      image: 'https://st5.depositphotos.com/62628780/62388/i/450/depositphotos_623885620-stock-photo-skincare-beauty-black-women-friends.jpg',
      text: 'Enhance your beauty routine with friends',
    },
  ];

  return (
    <>
      <div className='home-container'>
        <Carousel>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={slide.image} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <h2 className='home-text'>{slide.text}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
   

      <ProductList />
    </>
  );
};

export default Home;


