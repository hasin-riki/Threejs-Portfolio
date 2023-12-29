import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software engineer with experience in Javascript, TypeScript and
        Dart, and expertise in frameworks like React, Node.js, and Flutter. 
        I'm a quick learner. I make it a habit to adopt better coding 
        practices every day. When developing, I aim to create scalable, secure 
        and user-friendly solutions that solve real-world problems. 
        Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'> 
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  )
}

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full xs:w-[250px]'>
    <motion.div 
      variants={fadeIn('right', 'springy', 0.5*index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450}}
        className='bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center' 
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, 'about')