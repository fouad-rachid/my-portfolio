import "./hero.scss"
import {motion} from 'framer-motion'


const textVariants = {
    initial:{
        x:-500,
        opacity:0,
        

    },
    animate:{
        x:0,
        opacity:1,

        transition:{
        duration:1,
        staggerChildren:0.1,
        },
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        },


    },
   
};

const sliderVariants = {
    initial:{
        x:0,
    },

    animate:{
        x:-1070,
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20},
    },
    
};

const downloadFile = () => {
    window.location.href = "/files/mon-cv.pdf"
  }
  


const Hero = () => {
  return (
    <div className="hero">
        
    <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>RACHID FOUAD</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack<br/> Web Devloper</motion.h1>
           
            
            <motion.div className="buttons" variants={textVariants}>
                {/* <a href="/files/mon-cv.pdf" download="mon-cv.pdf" target='_blank'>
                <motion.button  variants={textVariants} whileHover={{scale:1.1}}>Download CV </motion.button>
                </a> */}
                
                <a href="#Contact">
                    <motion.button  variants={textVariants} whileHover={{scale:1.1}}>Contact Me</motion.button>
                </a>

                <motion.button id="bt" onClick={downloadFile} variants={textVariants} whileHover={{scale:1.1}}>Download CV </motion.button>
                
                
                
            </motion.div>
            <motion.img src="/scroll.png" alt=""  variants={textVariants} animate="scrollButton"/>

        </motion.div>
    </div>

    <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Full stack Devloper
    </motion.div>

    <div className="imageContainer">
            <img src="./Untitled-2.png" alt="" />
            {/* <img src="./Un1.png" alt="" /> */}
        </div>
       
    </div>
  )
}

export default Hero
