import { motion } from "framer-motion";
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
          className="shadow-2xl rounded-md my-8 z-10 neon-border"
          id="about-img"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        id="right"
        className="basis-1/2"
      >
        <motion.p
          variants={item}
          className="text-7xl font-extrabold shadow-inner"
        >
          About REC
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
          className=" mt-6 px-4 py-2 rounded-md font-medium hover:duration-500 px neon-btn"
        >
          Show More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutREC;
