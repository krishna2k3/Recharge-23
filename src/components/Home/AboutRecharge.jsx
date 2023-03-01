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
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center bg-[#1A1330] gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
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
          className=" border-2 w-20 my-4 ml-2 border-red-500"
        ></motion.hr>
        <motion.hr
          variants={item}
          className="w-20 my-4 border-2 ml-8 border-red-500 "
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
          className=" mt-6 px-4 py-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 hover:duration-500 px "
        >
          Show More
        </motion.button>
      </motion.div>

      <div id="right" className="basis-1/2 ">
        <motion.img
          initial={{scale:0.8,x:+30,y:+30}}
          whileInView={{scale:1,x:0,y:0,transition:{duration:1.5}}}
          className="shadow-2xl rounded-md my-8"
          id="about-img"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutRecharge;
