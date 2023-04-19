import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const SectionTitle = ({title}: {title:string}) => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        transition: { duration: 1.0 },
      });
    } else {
      controls.start({
        scale: 0,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={controls}
      >
      <h2>{title}</h2>
      <hr/>
    </motion.div>
  )
}

