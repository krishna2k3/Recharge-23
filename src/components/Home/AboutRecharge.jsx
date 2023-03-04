import { motion } from "framer-motion";
const AboutRecharge = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration:1
      }
    }
  }
  const item = {
    hidden: { opacity: 1,x:-800 },
    show: { opacity: 1,x:0,transition:{type:"linear",duration:0.8} }
  }

  
  return (
    <div
      id="about-recharge"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center bg-black gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        id="left"
        className="basis-1/2 order-last lg:order-first"
      >
        <motion.p
          variants={item}
          className="text-7xl font-extrabold shadow-inner"
        >
          About Recharge
        </motion.p>
        <motion.hr
          variants={item}
          className=" border-2 w-20 my-4 ml-2 border-[#FB2576]"
        ></motion.hr>
        <motion.hr
          variants={item}
          className="w-20 my-4 border-2 ml-8 border-[#FB2576] "
        ></motion.hr>
        <motion.p
          variants={item}
          className=" text-lg  shadow-inner leading-loose"
        >
          Rajalakshmi Institutions is proud to present its most prominent and
          signature cultural fest RECHARGE'23 which promotes liberty, energy,
          and enthusiasm among both participants and viewers while also
          providing students with the opportunity to explore and rediscover
          themselves.
        </motion.p>
        <motion.button
          variants={item}
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          className=" mt-6 px-4 py-2 rounded-md font-medium text-[#FB2576] hover:text-white hover:bg-[#FB2576] hover:duration-500 px neon-btn"
        >
          Show More
        </motion.button>
      </motion.div>

      <div id="right" className="basis-1/2 flex justify-center items-center">
        <div className=" z-0 h-40 lg:h-96 w-96 absolute neon-img-bg"></div>
        <img
          className="shadow-2xl rounded-md my-8 z-10 neon-border"
          id="about-img"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutRecharge;
