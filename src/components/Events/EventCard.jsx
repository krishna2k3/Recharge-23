import { motion } from "framer-motion";
// import dance from './Home/Images/'
const EventCard = ({ title, imgUrl }) => {
    const myStyle = {
        backgroundImage: 
 `url('${imgUrl}')`,
 backgroundRepeat: 'no-repeat',
 backgroundPosition: 'center', /* Center the image */
 backgroundSize: "cover" /* Resize the background image to cover the entire container */


};
    return <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        className="h-60 w-60 rounded-md bg-slate-300 m-10 hover:!scale-105 duration-500 bg-blend-darken	hover:bg-blend-normal	" style={
            myStyle
        }>
        <p className="text-3xl p-2 text-center font-bold">{title}</p>
        <hr class="ml-10 lg:ml-20 border-0 h-1 w-20 mt-0 bg-[#b718f1] drop-shadow-lg"></hr>

    </motion.div>
};

export default EventCard;