import { useState, useEffect, useRef } from 'react';
import './ProductSlide.scss';
import ProductSlideItem from './ProductSlideItem/ProductSlideItem';

const ProductSlide = () => {
  const [productCardList, setProductCardList] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    fetch('../data/list-data.json')
      .then(res => res.json())
      .then(result => {
        setProductCardList(result);
      });
  }, []);

  return (
    <div className="product-slide-wrap">
      {/* <div className="product-slide-item-list">
        <h1>이 제품은 어때요?</h1>
      </div> */}
      <div className="product-slide-item-wrap">
        <div className="image-container" ref={carouselRef}>
          {productCardList.map(productCard => {
            return (
              <ProductSlideItem
                key={productCard.id}
                productCard={productCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
