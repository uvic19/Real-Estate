import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About<span className='underline underline-offset-4 decoration-1 under font-light'> Our Brand</span></h1>
      <p className='text-gray-600 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-grey-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <motion.p initial={{opacity: 0, y:-50}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true}} className='text-4xl font-medium text-gray-800'>10+</motion.p>
                    <p >Years of Experience</p>
                </div>
                <div>
                <motion.p initial={{opacity: 0, y:-50}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true}}  className='text-4xl font-medium text-gray-800'>12+</motion.p>
                    <p >Projects Completed</p>
                </div>
                <div>
                <motion.p initial={{opacity: 0, y:-50}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true}}className='text-4xl font-medium text-gray-800'>20+</motion.p>
                    <p>Min. Sq. Ft. Delivered</p>
                </div>
                <div>
                <motion.p initial={{opacity: 0, y:-50}}
                transition={{duration: 1.5}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once:true}}className='text-4xl font-medium text-gray-800'>25+</motion.p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className='my-10 max-w-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium unde optio, totam consequatur necessitatibus natus eaque nobis nemo quaerat maiores dolore iure quidem dignissimos reprehenderit! Incidunt natus temporibus, repudiandae voluptates culpa tempore id quod consectetur nobis fugiat quos, nulla porro quidem facere provident qui vero numquam voluptate error asperiores blanditiis.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
