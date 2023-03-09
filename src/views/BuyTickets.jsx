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
            <div id="buytickets" 
            ref={vantaRefrec}
            className="flex flex-col lg:flex-col stretch-to-screen text-white items-center ">
                <div class="mt-16 text-7xl lg:mt-16 main text-center">
                    <span class="webdev">Tickets</span>

                </div>
                <div className='mt-16 lg:grid lg:grid-cols-2 flex flex-col'>
                    <div 
                        className="border-2 border-[#BBC2CC] p-4 lg:m-12 backdrop-blur-sm m-4 rounded-md box !bg-[#BBC2CC40] hover:!bg-[#BBC2CC60] hover:!scale-105 duration-500 lg:flex text-white justify-center flex-col lg:basis-1/2">
                        <p className='text-4xl m-3 text-white'>Standard</p>
                        <ul className='list-disc'>
                            <li className='m-3 ml-6'>
                                Gain exclusive entry to over 75 exciting events with our all-access pass, including highly anticipated proshows.
                            </li>
                            <li className='m-3 ml-6'>
                                Be a part of the concert action with standard tickets - entry is based on first come, first serve!
                            </li>
                            <li className='m-3 ml-6'>
                                Get your tickets now and enjoy the concert with your friends - each standard ticket admits one concertgoer!
                            </li>
                            <li className='m-3 ml-6'>
                                Don't miss out on the chance to see your favorite artists live - standard tickets are going fast!
                            </li>
                            <li className='m-3 ml-6'>
                                Experience the thrill of live music with standard tickets and be a part of the unforgettable concert atmosphere!
                            </li>
                        </ul>
                    </div>
                    <div 
                        className="border-2 border-[#FFD700] p-4 lg:m-12 m-4 rounded-md !bg-[#FFD70020] hover:!bg-[#FFD70040] hover:!scale-105 duration-500 hover:bg-blend-normal box lg:flex text-white justify-center flex-col lg:basis-1/2">
                        <p className='text-4xl m-3 text-[#FFD700]'>Premium</p>
                        <ul className='list-disc'>
                            <li className='m-3 ml-6'>
                                Gain exclusive entry to over 75 exciting events with our all-access pass, including highly anticipated proshows.
                            </li>
                            <li className='m-3 ml-6'>
                                Elevate your concert experience with premium tickets and enjoy exclusive access to the fanpit only for premium ticket holders!
                            </li>
                            <li className='m-3 ml-6'>
                                Get up close and in the center of the action with your favorite artists! With premium standing tickets, it's first come, first serve - so don't wait!
                            </li>
                            <li className='m-3 ml-6'>
                                Treat yourself to the ultimate concert experience with premium tickets priced at 1.5k per day!
                            </li>
                            <li className='m-3 ml-6'>
                                Each premium ticket admits one reveller to the concert - don't miss out on this incredible opportunity!
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default BuyTickets