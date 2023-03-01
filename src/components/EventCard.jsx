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
        className="h-60 w-60 rounded-md bg-slate-300 m-10 hover:!scale-105 duration-500" style={
            myStyle
        }>
        <p className="text-3xl p-4 text-center font-bold	">{title}</p>
    </motion.div>
};

export default EventCard;