import { motion } from "framer-motion";
import '../Common/neonfont.css';

const AboutREC = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 1, x: +800 },
    show: { opacity: 1, x: 0, transition: { type: "linear", duration: 0.8 } },
  };

  return (
    <div
      id="about-rec"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center bg-black gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
    >
      <div id="left" className="basis-1/2 order-first lg:order-first flex justify-center items-center">
      <div className=" z-0 md:h-40 h-12 w-96 absolute neon-img-bg animate-pulse-slow"></div>

        <img
          className="shadow-2xl rounded-md my-8 z-10 neon-border "
          id="about-img"
          src={require('../../assets/rec-1.png')}
          alt=""
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        id="right"
        className="basis-1/2 flex flex-col gap-y-5"
      >
        <div class="main text-5xl">
                <span class="webdev text-left">About REC</span>
          </div>
        
        
        <motion.p
          variants={item}
          className=" text-lg  shadow-inner leading-loose"
        >
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          churning out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </motion.p>
        <motion.button
          variants={item}
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#ff003c] duration-200 rounded-md font-medium hover:duration-500 px neon-btn max-w-max"
        >
          <div class="main text-md">
                <span class="webdev text-left">Show More</span>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutREC;
