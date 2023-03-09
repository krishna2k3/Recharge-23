import video from "../../assets/video/about-video.mp4";
import { useNavigate } from "react-router-dom";
const AboutRecharge = () => {
  const navigate = useNavigate();
  return (
    <div
      id="about-recharge"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8 "
    >
      <div
        id="left"
        className="basis-1/2 order-last lg:order-first flex flex-col gap-y-5"
      >
        <div class="main text-5xl">
          <span class="webdev text-left">About RECHARGE</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Institutions is proud to present its most prominent and
          signature cultural fest RECHARGE'23 which promotes liberty, energy,
          and enthusiasm among both participants and viewers while also
          providing students with the opportunity to explore and rediscover
          themselves.
        </p>
        <button
          type="button"
          onClick={() => navigate("/about-recharge")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#ff003c] duration-200 rounded-md font-medium hover:duration-500 px neon-btn max-w-max"
        >
          <div class="main text-md">
            <span class="webdev text-left">Show more</span>
          </div>
        </button>
      </div>

      <div id="right" className="basis-1/2 flex justify-center items-center">
      <div className="z-0 md:h-40 md:w-96 h-10 w-72 absolute neon-img-bg animate-pulse-slow"></div>
        <video
          className="shadow-2xl rounded-xl my-8 z-10 neon-border"
          loop
          autostart
          autoPlay
          muted
          src={video}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default AboutRecharge;
