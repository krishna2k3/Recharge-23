import video from "../../assets/video/about-video.mp4";
import { useNavigate } from "react-router-dom";

const AboutRecharge = () => {
  const navigate = useNavigate();

  return (
    <div
      id="about-recharge"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8   stretch-to-screen text-white p-10 lg:gap-x-20 "
    >
      <div
        id="left"
        className="basis-1/2 order-last lg:order-first flex flex-col gap-y-5"
      >
        <div class="main text-5xl">
          <span class="socod text-left">About RECHARGE</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Institutions is proud to present its most prominent and
          signature Cultural fest - RECHARGE'23, which promotes liberty, energy,
          and enthusiasm among both participants and spectators while also
          providing students an opportunity to explore and rediscover
          themselves.
        </p>
        <button
          type="button"
          onClick={() => navigate("/about-recharge")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#0099ff] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod   max-w-max"
        >
          <div class="main text-md">
            <span class="socod text-left">Show more</span>
          </div>
        </button>
      </div>

      <div id="right" className="basis-1/2 flex justify-center items-center video-border max-h-fit my-8">
        <video
          className="shadow-2xl rounded-xl z-10 neon-border "
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
