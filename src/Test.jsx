import React from 'react';
import {motion} from "framer-motion"

const Test = () => {

    const [open,setOpen]= useState(false)
    const variants ={
        visible:{opacity : 1, x:1000},
        hidden:{opacity:0},
    }



    return(

    <div className="course">

         <motion.div className="box"

         //opacity : opposit of transparancy "same work"
         //scale : allows you to change the size of elements
        
         variants={variants}
         animate={open ? "visible" : "hidden"}
     
            ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>click</button>


    </div>
    

    )
}

export default Test

