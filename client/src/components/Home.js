import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from './ProductList';
import BestSeller from './BestSeller';
import '../Home.css';


const Home = () => {
  const images = [
    'https://images.ctfassets.net/3s5io6mnxfqz/4IEHnYIrfzoxYOQTraepmO/c1d1eab003ecf5d8a29e9eb8bec94450/AdobeStock_272372014.jpeg?w=1920',
    'https://www.usmagazine.com/wp-content/uploads/2019/04/Skincare-Products.jpg?crop=0px%2C201px%2C2000px%2C1131px&resize=1600%2C900&quality=86&strip=all ',
    'https://media.restless.co.uk/uploads/2022/09/ways-to-cut-the-cost-of-your-beauty-routine.jpg',
  ];

  const bestSellerCategory = 'Best Selling';

  return (
    <>
    <div className='home-container'>
    
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 l-60" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      </div>
     

      <BestSeller bestSellerCategory={bestSellerCategory} />
    

      <ProductList />
     
    </>
  );
};

export default Home;
