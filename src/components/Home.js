import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// header, home, base 컴포넌트에 transition 옵션 추가 

const Home = () => {
  return (
     <div className="home container">
      {/* <motion.div className="box11"  
              initial={{ y : '-100vw' }}
              animate={{ y : 0}}
              transition={{ delay:0.5, type:'spring', stiffness :120}}  
              whileHover={{ scale:1.2,  color:"pink"}}  
        >box11</motion.div> */}
         <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <h2>Welcome to Pizza Joint</h2>
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

 

 

