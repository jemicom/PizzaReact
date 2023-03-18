import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// index.css 디자인 확인
/* 
 디자인 화면을 어둡게 하기 
.backdrop{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
 */

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
// 모달은 숨김 => 보임, 사라질때 다시 숨김임 


// 모달 애니, index.css 모달 디자인 추가 
const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { 
    y: "200px", 
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

// 모달을 사라지도록 하기 위해 AnimatePresence 필요
//  <button onClick={()=>setShowModal(false)} 시 동작
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className="backdrop" //화면을 어둡게만 함
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
              variants={modal}
            >
              <p>피자를 추가하시겠습니까?</p>
              <Link to="/">
                <button onClick={()=>setShowModal(false)}>새로운 피자 주문</button>
              </Link>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;