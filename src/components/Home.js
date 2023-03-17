import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>
         Pizza React
      </h2>
      <Link to="/base">
        <button>
          주문
        </button>
      </Link>
    </div>
  )
}

export default Home;