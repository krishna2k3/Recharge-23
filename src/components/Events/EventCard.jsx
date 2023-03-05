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
                className="h-60 w-60 rounded-md bg-slate-300 m-4 hover:!scale-105 duration-500 bg-blend-darken	hover:bg-blend-normal box lg:my-10 lg:text-6xl ml-5 lg:flex text-white hover:text-black justify-items-start	" style={
                    myStyle
                }>           
                <div class="grid  grid-flow-row">
                        <p className="text-3xl m-3 font-bold	">{title}</p>
                        <hr class="ml-10 lg:ml-24 border-0 h-1 w-20 mt-2 bg-[#b718f1]                         row-end-1	drop-shadow-lg"></hr>

                    </div>
            </motion.div>

            <div className="overlay"></div>
        </div>
    )
};

export default EventCard;