import "./portfolio.scss";
import {useRef} from 'react';
import {motion,useScroll,useSpring,useTransform} from "framer-motion";


const items=[
  {
    id:1,
    title:"Sonatrach IAP Website",
    img:"./Sona.png",
    desc:"As a Frontend Developer at Sonatrach IAP, I spearheaded the creation of two dynamic and interactive website versions, seamlessly integrating HTML, CSS, Bootstrap, JavaScript, and GSAP. These versions, deployed successfully to Sonatrach IAP servers, showcased my commitment to modern, responsive design and proficiency in the latest web development technologies, contributing to an enriched user experience.",
  },
  {
    id:2,
    title:"ui/ux for ",
    img:"./ui-ux-tabibi.png",
    desc:"I designed the UI/UX for the 'Tabibi' app using Figma, showcasing my adeptness in creating intuitive and visually appealing user interfaces",

  },
  {
    id:3,
    title:"Dashboard with php",
    img:"./dash.png",
    desc:"Developed a sleek and modern dashboard utilizing PHP for backend functionality, MySQL for database management, and prioritizing a simple yet interactive user experience. ",

  },
  // {
  //   id:4,
  //   title:"ui/ux portfolio",
  //   img:"https://images.pexels.com/photos/18968412/pexels-photo-18968412/free-photo-of-fleurs-croissance-fleurir-decoratif.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //   desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elitUt voluptate deleniti possimus recusandae vitae provident voluptatibus! Ratione incidunt explicabo sunt provident maiores vero, nesciunt expedita nobis omnis possimus eligendi! Porro!",

  // },
]; 



const Single = ({item}) => {

  const ref = useRef();

  const {scrollYProgress}=useScroll({
    target:ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [-200,200]);

  return (

  <section >
    <div className="container">
      <div className="wrapper">

        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt=""/>
        </div>

        
        <motion.div className="textContainer" style={{ y }} >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          {/* <button >See Demo</button> */}
          </motion.div>

      </div>
    </div>
  </section>
  );
};

const Portfolio = () => {

  const ref= useRef();

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["end end","start start"],
  });

  const scaleX =useSpring(
    scrollYProgress,{
    stiffness:20,
    dumping:10,
  });

  return (

    <div className="portfolio" ref={ref}>

      <div className="progress">

        <h1>Featured Works</h1> 

        <motion.div style={{scaleX}} className="progressBar"></motion.div>

      </div>

      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    
    </div>
  )
}

export default Portfolio
