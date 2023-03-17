import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  start: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  end: { 
    opacity: 1, 
    x: 0,
    transition: { 
       // 자세한 속성 설명 추가 필요 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
       // when: "beforeChildren:afterChildren"
    }
  },
};

// Order 컴포넌트만 추가 
// 부모 컴포넌트로 부터 transition 상속 되고 
// when 속성에 따라 애니메이션 표현을 달리 할 수 있음 
const childVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <h2>주문 감사합니다.</h2>
      <motion.p variants={childVariants}> 주문하신 상품은  {pizza.base} pizza 입니다.</motion.p>
      <motion.p variants={childVariants}> 추가한 토핑을 확인하세요. </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;