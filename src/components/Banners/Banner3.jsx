

import BannerPng from '../../assets/banner-bg.jpg'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation.jsx'
import { IoBagHandleOutline } from 'react-icons/io5'

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  height: '100%',
  width: '100%',
}
const Banner3 = () => {
  return (
    <section>
      <div
        style={bgStyle}
        className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'
      >
        <div>

        </div>
        <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
          <motion.h1
            variants={FadeLeft(0.5)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase"
          >
            Get Fresh Fruits Today
          </motion.h1>
          <motion.p
            variants={FadeLeft(0.7)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </motion.p>
          <motion.div
            variants={FadeLeft(0.9)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex justify-center md:justify-start'>
            <button className='primary-btn flex items-center gap-2'>
              <span><IoBagHandleOutline /></span>
              Order Now
            </button>
          </motion.div>


        </div>
      </div>
    </section>

  )
};

export default Banner3;
