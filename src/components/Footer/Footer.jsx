
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        <div className=" text-2xl flex items-center gap-2 uppercase">
          <p className="text-primary">
            Fruit
          </p>
          <p className="text-secondary">
            Store
          </p>
          <FaLeaf className="text-green-500" />
        </div>
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaTwitter />
        </div>

      </motion.div>
    </footer >

  );
};

export default Footer;
