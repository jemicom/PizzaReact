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