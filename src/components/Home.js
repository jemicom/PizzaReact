import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// keyframes : variants 를 내에 키프레임을 배열로 사용 
const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: { delay: 2 }
  },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 1.5
    }
  }
}

// yoyo : repeat 지정
const buttonVariantsRepeat = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo:Infinity 
      // 왕복 횟수 , Infinity
    }
  }
}

const Home = () => {
  return (
     <div className="home container">
         <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
              
              <motion.button
                variants={buttonVariantsRepeat}
                animate="visible"
                whileHover="hover"
              >
                주문하러 가기
              </motion.button>
            </Link>
          </motion.div>
     </div>
  )
}

export default Home;

 

 

