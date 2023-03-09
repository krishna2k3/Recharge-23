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
                <p className="mx-10 my-10 lg:my-16 lg:mx-52 text-lg text-white flex justify-center max-w-4xl">
                Established in 1997, Rajalakshmi Engineering College (REC) is an autonomous institution affiliated with Anna University, Chennai, that produces top-notch professionals.REC has a student-centric approach, offering various student-run societies and clubs that organize hackathons,symposiums and seminars and workshops, and provides a diverse range of programs to its 8000 students. In addition to its academic achievements, REC is known for its cultural extravagance, and vivacious events.Ranging from inviting sports celebrities such as Dwayne Bravo and T Natarajan and Krishnamachari Srikkanth, REC has since been a hub of sports activities. Not restricted to sports, the institution has also played host to sensational musicians like Andrea Jeremiah and Aruna Sairam. These events not only provide students with a refreshing break from their academic routines, but also offer them opportunities to interact with professionals from various fields, inspiring and motivating them to pursue their passions.
                </p>
        </div>
    )
}

export default About