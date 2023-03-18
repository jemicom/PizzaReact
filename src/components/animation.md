#  animation box 
```
<motion.div className="box01"  animate={{ scale : 2}}
>box01</motion.div>

<motion.div className="box02"  animate={{ rotateZ : 360, y: 50 }}
>box02</motion.div>

<motion.div className="box03"  animate={{ rotateZ : 360, x: 300 }}
>box03</motion.div>

<motion.div className="box04"  animate={{ opacity: 1, y:100 }}
>box04</motion.div>

<motion.div className="box05"  animate={{ opacity: 0 }}
>box05</motion.div>

<motion.div className="box06"
    animate={{ width:200, margin: "auto", background: "orange" , color:"purple"}}
>box06</motion.div>

// initial 옵션
<motion.div className="box07"  
              initial={{ y : -250 }}
              animate={{ y : 10}}
        >box07</motion.div>

<motion.div className="box08"  
        initial={{ x : '-100vw' }}
        animate={{ x : 0}}
>box08</motion.div>

// transition 옵션
<motion.div className="box09"  
        initial={{ x : '-100vw' }}
        animate={{ x : 0}}
        transition={{ delay:1.5, duration:1.5}}
>box09</motion.div>

<motion.div className="box10"  
              initial={{ x : '-100vw' }}
              animate={{ x : 0}}
              transition={{ delay:0.5, type:'tween|spring', stiffness :120}}
        >box10</motion.div>

// whileHover
// Toppings.js, Base.js 수정 
<motion.div className="box11"  
              initial={{ y : '-100vw',}}
              animate={{ y : 0}}
              transition={{ delay:0.5, type:'spring', stiffness :120}}  
              whileHover={{ scale:1.2,  color:"pink"}}  
        >box11</motion.div>
> originX : 중심점 변경        
```

# animation test1

```
<motion.div className="home container"
    animate={{ rotateZ: 180, opacity: 0.2, marginTop: 200 }}
>
    <motion.h2  animate={{ fontSize : 50, color:"red", y: 50}}>
        Pizza React
    </motion.h2>
    <Link to="/base">
    <motion.button
        animate={{ scale: 1.5 }}
    >
        주문
    </motion.button>
    </Link>
</motion.div>
```

# animation test2
``` 
<motion.div className="home container"
    animate={{ scale :1, opacity:1 }}
>
    <motion.h2  animate={{ fontSize : 50  }}>
        Pizza React
    </motion.h2>
    <Link to="/base">
    <motion.button
        animate={{ scale: 0.8 }}
    >
        주문
    </motion.button>
    </Link>
</motion.div>
```    

# variants 
> 디자인 속성을 상수로 빼서 객체로 숨겨둔 후 컴포넌트의 속성으로 사용 
```
const box12Variants ={
    start :{ y:-250},
    end : { y :10}
}
const box13Variants ={
    start :{ x : '-100vw' },
    end : { x : 0}
}
const box14Variants ={
    start :{ 
        x : '100vw',
        opacity:0
    },
    end : { 
      x : 0,
      opacity:1,
      transition:{ 
        delay:1.5, 
        duration:1.5
      }
    }
}
const box15Variants ={
    start :{ 
        x : '100vw',
        opacity:0
    },
    end : { 
      x : 0,
      opacity:1,
      transition:{ 
         delay:0.5, type:'spring', stiffness :120 
      }
    }
}
```

```
<motion.div className="box12"  
        variants={box12Variants}
        initial="start"
        animate="end"
    >box12</motion.div>

<motion.div className="box13"  
        variants={box13Variants}
        initial="start"
        animate="end"
>box13</motion.div>

<motion.div className="box14"  
        variants={box14Variants}
        initial="start"
        animate="end"
>box14</motion.div>

<motion.div className="box15"  
        variants={box14Variants}
        initial="start"
        animate="end"
>box15</motion.div>

<motion.div className="box16"  
        variants={box14Variants}
        initial="start"
        animate="end"
        whileHover={{ scale:1.2,  color:"pink"}}  
>box16</motion.div>
```

> Toppings, Base.js , Order.js : varants 추가 
> 모두 같은 variants 이므로 복사하여 사용할 것 


```
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
```

# keyframes

```

```


# <AnimatePresence>  ?
elemet가 나타나거나 사라질 경우 애니메이션 효과 발생시키는 컴포넌트이다.
자연스러운 show / hide의 애니메이션 효과를 부여한다.
* AnimatePresence의 규칙 *
1. visible상태여야 한다.
2.내부에는 조건문이 있어야 한다.
3. 내부 조건을 변경하기 위해 useState 필요

https://cocococo.tistory.com/entry/React-Framer-Motion4-AnimatePresence-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84

```
import React, {useState} from 'react';
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

const Order = ({ pizza }) => {
  // useState 추가하여 6초 후에 h2를 사라지도록 함 
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 6000);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      {/* { 
        showTitle && <h2>주문 감사합니다.</h2>

        // 사라질때 띡 사라지지만 AnimatePresence를 사용하면 사라질때도 Animate를 넣을 수 있음 
      } */}
      <AnimatePresence>

      /// 조건을 변경하여 적용하기 위함
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }}>주문 감사합니다.</motion.h2>
        )}
      </AnimatePresence>
      
      <motion.p variants={childVariants}> 주문하신 상품은  {pizza.base} pizza 입니다.</motion.p>
      <motion.p variants={childVariants}> 추가한 토핑을 확인하세요. </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;
```

```
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

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
const box14Variants ={
  start :{ 
      x : '100vw',
      opacity:0
  },
  end : { 
    x : 0,
    opacity:1,
    transition:{ 
      delay:1.5, 
      duration:1.5
    }
  }
}
const Home = () => {
  const [ boxExit, setBoxExit ] = useState(true);
  // 조건을 바꾸기 위한 state

  return (
     <div className="home container">

      <AnimatePresence>
          {
            boxExit &&  <motion.div className="box16"  
                    variants={box14Variants}
                    initial="start"
                    animate="end"
                    exit={{x:'-100vw'}}
            >box16</motion.div>
          }
      </AnimatePresence>
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
                onMouseEnter={ ()=>setBoxExit(false)}  /// 조건을 바꾸기 위함 
              >
                주문하러 가기
              </motion.button>
            </Link>
          </motion.div>
     </div>
  )
}

export default Home;
```