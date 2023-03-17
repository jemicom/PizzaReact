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