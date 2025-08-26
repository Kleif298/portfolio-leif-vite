import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="hero">
            <motion.div 
                className="hero-title"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Leif Fieger
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Apprentice | Sunrise GmbH
                </motion.p>
            </motion.div>
            <motion.div 
                className="text-box"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <p>Hi, I'm Leif <br /> <br /> I'm an apprentice software developing at Sunrise.</p>
            </motion.div>
        </div>
    );
};

export default Hero;
