import React from 'react';
import PaymentInfoData from './PaymentInfoData/PaymentInfoData';
import './PaymentInfoItem.scss';

const PaymentInfoItem = ({
  productDate,
  productStatus,
  products,
  productTotalPrice,
}) => {
  // console.log(productDate);
  // const Year = productDate.toLocaleDateString();
  // console.log(Year);
  // const Month = productDate.getMonth();
  // const Day = productDate.getDay();
  // console.log(`${Year}+${Month}+${Day}`);

  return (
    <div className="payment-info-item">
      <div className="payment-info-data">
        <p className="payment-info-date">
          <span>{productDate}</span>
        </p>
        {products.map(data => {
          return (
            <PaymentInfoData
              key={data.productId}
              productImg={data.thumbnail}
              productCount={data.cnt}
              productName={data.name}
              productPrice={data.eachPrice}
            />
          );
        })}
      </div>
      <div className="payment-info-etc">
        <div className="payment-info-price">
          <p>
            {parseInt(productTotalPrice).toLocaleString()}
            <span>원</span>
          </p>
        </div>
        <div className="payment-info-status">
          <p>{productStatus}</p>
          <button>결제 취소</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoItem;
