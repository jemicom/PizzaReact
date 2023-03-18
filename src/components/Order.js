import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Order = ({ pizza, setShowModal }) => { 

  // Order가 호출된 후 backdrop 을 어둡게 조성 
  // index.css 디자인 있음 , modal 디자인 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <motion.h2 >주문 감사합니다.</motion.h2>
      <motion.p variants={childVariants}> 주문하신 상품은  {pizza.base} pizza 입니다.</motion.p>
      <motion.p variants={childVariants}> 추가한 토핑을 확인하세요. </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;


// const Order = ({ pizza }) => {
//   // useState 추가하여 6초 후에 h2를 사라지도록 함 
//   const [showTitle, setShowTitle] = useState(true);
//   setTimeout(() => {
//     setShowTitle(false);
//   }, 6000);

//   return (
//     <motion.div className="container order"
//       variants={containerVariants}
//       initial="start"
//       animate="end"
//     >
//       {/* { 
//         showTitle && <h2>주문 감사합니다.</h2>

//         // 사라질때 띡 사라지지만 AnimatePresence를 사용하면 사라질때도 Animate를 넣을 수 있음 
//       } */}
//       <AnimatePresence>
//         {showTitle && (
//           <motion.h2 exit={{ y: -1000 }}>주문 감사합니다.</motion.h2>
//         )}
//       </AnimatePresence>
      
//       <motion.p variants={childVariants}> 주문하신 상품은  {pizza.base} pizza 입니다.</motion.p>
//       <motion.p variants={childVariants}> 추가한 토핑을 확인하세요. </motion.p>
//       <motion.div variants={childVariants}>
//         {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
//       </motion.div>
      
//     </motion.div>
//   )
// }

 