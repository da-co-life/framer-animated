import { motion } from "framer-motion";

const MotionHoc = (Component) => {

    return function HDC() {
        return (
            <motion.div
                initial={{ y: 500 }}
                animate={{
                    Y: 0,
                    transition: { duration: 0.5, type: "spring" },
                }}
                  exit={{
                    y: -500,
                    transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
                }}
            >
                <Component />
            </motion.div>
        );
    };
};

export default MotionHoc;