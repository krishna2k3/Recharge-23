import VANTA from 'vanta/dist/vanta.dots.min'
import * as THREE from "three";
import { useEffect, useState,useRef } from "react";
const BuyTickets = ()=>{
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
                    <span class="webdev">Tickets</span>

                </div>
                <div className='mt-16 flex flex-row flex-wrap'>
                    <div 
                        className="border-white h-80 w-80 m-6 rounded-md bg-slate-900 hover:!scale-105 duration-500 hover:bg-blend-normal box lg:text-6xl lg:flex text-white justify-center items-center">
                        Hello
                    </div>
                    <div 
                        className="h-80 w-80 m-6 rounded-md bg-slate-900 hover:!scale-105 duration-500 hover:bg-blend-normal box lg:text-6xl lg:flex text-white justify-center items-center">
                        Hello
                    </div>
                </div>
        </div>
    )
}

export default BuyTickets