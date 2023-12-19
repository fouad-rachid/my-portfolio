import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";




const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
        <Sidebar/>
        
        <div className="wrapper">
            <motion.span
             initial={{opacity:0 , scale:0.5}}
             animate={{opacity:1 , scale:1}}
             transition={{duration:2}}
            > Rachid Fouad</motion.span>
        
              {/* <span>RACHID Fouad</span> */}
              <div className="social">
                {/* <motion.a href="#" target="blank" whileHover={{scale:1.2}}><img src="/gmail.png" alt=""/></motion.a> */}
                <motion.a href="https://www.linkedin.com/in/fouad-rachid-788376275/" target="blank" whileHover={{scale:1.2}}><img src="/linkdin.png" alt=""/></motion.a>
                <motion.a href="https://github.com/fouad-rachid" target="blank" whileHover={{scale:1.2}}><img src="/github-mark-white.png" alt=""/></motion.a>
                <motion.a href="https://www.facebook.com/profile.php?id=61553827723677&sk"  target="blank" whileHover={{scale:1.2}}><img src="/facebook.png" alt=""/></motion.a>
              </div>
              
            
            
        </div>
      
    </div>
  )
}

export default Navbar
