import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {
  return (
     <div className="home container">
         <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

 

 

