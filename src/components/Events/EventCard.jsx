import { motion } from "framer-motion";
import './style.css'
// import dance from './Home/Images/'
const EventCard = ({ title, imgUrl }) => {
    const myStyle = {
        backgroundImage:
            `url('${imgUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', /* Center the image */
        backgroundSize: "cover",

    };
    return (
        <div className="parent-container ">
            <motion.div
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="h-60 w-60 rounded-md bg-slate-300 m-4 hover:!scale-105 duration-500 bg-blend-darken	hover:bg-blend-normal box lg:my-10 lg:text-6xl ml-5 lg:flex text-white" style={
                    myStyle
                }>
                <p className="text-3xl p-2 font-bold">{title}</p>
                <hr class="border-0 h-1 w-20 mt-10 ml-100 bg-[#b718f1] drop-shadow-lg"></hr>


            </motion.div>

            <div className="overlay"></div>
        </div>
    )
};

export default EventCard;