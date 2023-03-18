import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// header, home, base 컴포넌트에 variants 옵션 추가 
// 변수로 별도로 빼고 객체대신 ""속성으로 내부 숨겨진 속성을 사용한다.


const Home = () => {
  return (
     <div className="home container">
         <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <h2>Pizza React</h2>
            <Link to="/base">
              <motion.button
                animate={{  }}
              >
                주문하러 가기
              </motion.button>
            </Link>
          </motion.div>
     </div>
  )
}

export default Home;

 

 

