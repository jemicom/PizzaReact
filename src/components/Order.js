import React from 'react';

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2> 주문 감사합니다.</h2>
      <p> {pizza.base} 를 주문하였고 </p>
      <p> 추가한 토핑을 확인하세요. </p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order;