import { motion } from "framer-motion";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const childVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const EachClasses = ({ name, description, image }: Props) => {
  const classOverlay = `p-5 absolute opacity-0 hover:opacity-90 z-1 flex flex-col items-center justify-center  whitespace-normal bg-primary-500 text-center text-white text-sm transition duration-500 h-full w-full`;

  return (
    <motion.li
      className="relative h-[450px] md:w-[32%]"
      variants={childVariants}
    >
      <motion.div className={classOverlay} initial="hidden" animate="visible">
        <motion.h1 className="text-xl text-gray-300 font-bold">
          {name}
        </motion.h1>
        <motion.p
          className="text-sm text-gray-50"
          initial="hidden"
          animate="visible"
        >
          {description}
        </motion.p>
      </motion.div>
      <motion.img
        src={image}
        alt=""
        className="w-full h-full object-cover"
        variants={childVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.li>
  );
};

export default EachClasses;
