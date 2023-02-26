import { motion } from "framer-motion";

const EventCard = ({title}) => {
    return <motion.div layout
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0}}
            exit={{opacity: 0, scale: 0}}
            className="h-96 w-60 rounded-md bg-slate-300 m-10 hover:!scale-105 duration-500">
            <p className="text-3xl p-4 text-center">{title}</p>
        </motion.div>
};

export default EventCard;