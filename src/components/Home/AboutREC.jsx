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
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center bg-[#1A1330] gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
    >
      <div id="left" className="basis-1/2 order-first lg:order-first">
        <motion.img
          initial={{ scale: 0.8, x: -30, y: -30 }}
          whileInView={{ scale: 1, x: 0, y: 0, transition: { duration: 1.5 } }}
          className="shadow-2xl rounded-md my-8"
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
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          churning out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </motion.p>
        <motion.button
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          variants={item}
          className=" mt-6 px-4 py-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 hover:duration-500 px "
        >
          Show More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutREC;
