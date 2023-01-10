import React from 'react';
import './PaymentAside.scss';

const PaymentAside = () => {
  return (
    <div className="payment-aside">
      <h1 className="payment-aside-title">구매 내역</h1>
      <div>
        <p>고객님의 주문 내역을 조회해보세요.</p>
        <p>주문 확인 및 취소도 가능합니다.</p>
      </div>
    </div>
  );
};

export default PaymentAside;