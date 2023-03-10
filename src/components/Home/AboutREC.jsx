import { useNavigate } from "react-router-dom";


const AboutREC = () => {
  const navigate = useNavigate();
  return (
    <div
      id="about-rec"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 "
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-h-fit my-8"
      >

        <img
          className="shadow-2xl  rounded-xl  z-10 neon-border "
          id="about-img"
          src={require("../../assets/gallery-imgs/rec7.jpg")}
          alt=""
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div class="main text-5xl">
          <span class="socod text-left">About REC</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          producing out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </p>
        <button
          type="button"
          onClick={() => navigate("/about-rec")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod max-w-max"
        >
          <div class="main text-md">
            <span class="socod text-left">Show More</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutREC;
