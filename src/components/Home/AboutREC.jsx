import VANTAJS from 'vanta/dist/vanta.dots.min'
import * as THREE from "three";

import { useEffect, useState,useRef } from "react";

const AboutREC = () => {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRefrec = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!vantaEffect) {
      setVantaEffect(
        VANTAJS({
          el: vantaRefrec.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x848484,
          color2: 0x0,
          backgroundColor: 0x0,
          size: 2.60,
          showLines: false
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      id="about-rec" ref={vantaRefrec}
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8 "
    >
      <div id="left" className="basis-1/2 order-first lg:order-first flex justify-center items-center">
      {/* <div className=" z-0 md:h-40 h-12 w-96 absolute neon-img-bg animate-pulse-slow"></div> */}

        <img
          className="shadow-2xl rounded-md my-8 z-10 neon-border "
          id="about-img"
          src={require('../../assets/rec-1.png')}
          alt=""
        />
      </div>

      <div
        
        id="right"
        className="basis-1/2 flex flex-col gap-y-5"
      >
        <div class="main text-5xl">
                <span class="webdev text-left">About REC</span>
          </div>
        
        
        <p
          className=" text-lg  shadow-inner leading-loose"
        >
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          churning out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </p>
        <button
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#ff003c] duration-200 rounded-md font-medium hover:duration-500 px neon-btn max-w-max"
        >
          <div class="main text-md">
                <span class="webdev text-left">Show More</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutREC;
