import {motion} from "framer-motion";
import "./services.scss";


const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        opacity:1,
        x:0,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        },
    },
    
}


const Services = () => {
  return (
    <motion.div className="services"
     variants={variants}
      initial="initial"
    //    whileInView="animate"
    animate={"animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>
                i focus on helping your brand grow
                 <br/> and move forward
            </p>
            <hr/>
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
            </div>
            
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Busniess. </h1>
                <motion.button whileHover={{backgroundColor:"orangered",color:"white", scale:0.9}}>WHAT WE DO!</motion.button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Full Stack Developer</h2>
                <p className="pp"> - Freelance

Developed interactive and responsive websites using technologies like React, React Native, Next.js, and Node.js
Collaborated with clients to understand their requirements and deliver customized solutions
Implemented front-end designs and ensured smooth user experiences through optimized code
Integrated databases and handled server-side logic for seamless functionality.</p>

                <button>GO</button>
            </motion.div>
            <motion.div className="box"whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Repellendus, omnis in. Minima aperiam tempore quisquam 
                 consequuntur cum soluta ducimus, inventore rerum eius assumenda
                  nesciunt pariatur sit ex facilis quia ipsam.</p>

                <button>GO</button>
            </motion.div>
             <motion.div className="box"whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Repellendus, omnis in. Minima aperiam tempore quisquam 
                 consequuntur cum soluta ducimus, inventore rerum eius assumenda
                  nesciunt pariatur sit ex facilis quia ipsam.
                  </p>

                <button>GO</button>
            </motion.div> 
            <motion.div className="box"whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Repellendus, omnis in. Minima aperiam tempore quisquam 
                 consequuntur cum soluta ducimus, inventore rerum eius assumenda
                  nesciunt pariatur sit ex facilis quia ipsam.</p>

                <button>GO</button>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
