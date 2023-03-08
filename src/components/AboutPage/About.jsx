import VANTA from 'vanta/dist/vanta.dots.min'
import * as THREE from "three";
import { useEffect, useState,useRef } from "react";
const About = ()=>{
    const [vantaEffect1, setVantaEffect1] = useState(0);
    const vantaRefrec = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!vantaEffect1) {
            setVantaEffect1(
        VANTA({
          el: vantaRefrec.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          THREE: THREE,
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
      if (vantaEffect1) vantaEffect1.destroy();
    };
  }, [vantaEffect1]);

    
    return (
            <div id="about" 
            ref={vantaRefrec}
            className="flex flex-col lg:flex-col stretch-to-screen text-white items-center ">
                <div class="mt-16 text-7xl lg:mt-16 main text-center">
                    <span class="webdev">About REC</span>

                </div>
                <p className="mx-10 my-10 lg:my-16 lg:mx-52 text-lg text-white justify-between max-w-4xl">
                    Recharge is Rajalakshmi Engineering College’s inter-collegiate annual cultural fest. The previous edition of Recharge and other cultural fests at REC have featured celebrities from the showbiz like Karthi Sivakumar, Santhosh Narayanan, Andrea Jeremiah, and DJ Gowtham. REC has also had the privilege of hosting eminent sports personalities like Kris Srikkanth, T. Natarajan, and Dwayne Bravo at our sport-driven events. 
                    <br></br><br></br>With over 75+ events ranging from music and dance to sports and other exciting fun ones, Recharge 2023 provides students from across the country a platform to express themselves and showcase their talents. The proshows of Recharge 2023 will feature an exciting lineup that includes performances from music superstars and international DJs and appearances from sports legends. 
                    <br></br><br></br>So, what are you waiting for? Buy your passes now to feel reignited, rejuvenated, and revivified at Recharge 2023. We’ll see you there!
                </p>
        </div>
    )
}

export default About