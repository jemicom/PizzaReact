import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import {motion} from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FaPizzaSlice color="red" style={{fontSize:"30px"}}/>
        {/* <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg> */}
      </div>
      <motion.div className="title"
        initial={{ position: 'relative', top: -250}}
        animate={{ top: -10 }}
      >
        <h1>Pizza React</h1>
      </motion.div>
    </header>
  )
}

export default Header;