import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }
  
const letter = {
    hidden: { opacity: 0, y: -40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

const splitText = (text) => {
    return text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
        {char === " " ? "\u00A0" : char}
        </motion.span>
    ))
}

const slideInFromTop = (duration, delay) => ({
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
        type: "spring",
        stiffness: 100,
        duration: duration,
        delay: delay,
    }
})

const slideInFromBottom = (duration, delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
        type: "spring",
        stiffness: 100,
        duration: duration,
        delay: delay,
    }
})

const slideInFromLeft = (duration, delay) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            type: "spring", 
            stiffness: 100, 
            duration: duration, 
            delay: delay } 
    }
})

export default slideInFromLeft;


export { container, splitText, slideInFromTop, slideInFromBottom, slideInFromLeft }