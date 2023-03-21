import { useRef, useState } from "react";
import "./css/Merchandise.css";


const Merchandise = () => {

  const slides = [require("../assets/merchandise/front.webp"),
  require("../assets/merchandise/side.webp"),
  require("../assets/merchandise/back.webp")]

  const [current, setCurrent] = useState(0)
  const [style1, setStyle1] = useState('active')
  const [style2, setStyle2] = useState('inactive')
  const [style3, setStyle3] = useState('inactive')

  const mainImg = useRef(null);

  const changeCurrent = (idx) => {
    mainImg.current.classList.remove('show');
    mainImg.current.classList.add('hide');
    setTimeout(() => {
      setCurrent(idx)
      if ( idx === 0 ) {
        setStyle1('active')
        setStyle2('inactive')
        setStyle3('inactive')
      } else if ( idx === 1 ) {
        setStyle2('active')
        setStyle1('inactive')
        setStyle3('inactive')
      } else if ( idx === 2 ) {
        setStyle3('active')
        setStyle2('inactive')
        setStyle1('inactive')
      }
      mainImg.current.classList.remove('hide');
      mainImg.current.classList.add('show');
    }, 1500);  
  }


  return (
    <div id="merchandise" className="m-8 mt-0">
      <div id="content" className="flex flex-col items-center py-10 gap-y-4">
        <div class="main lg:text-6xl text-5xl justify-center">
          <span class="socod">MERCHANDISE</span>
        </div>
        <div id="main-content" className="flex flex-col lg:flex-row">
          <div id="images" className="flex flex-col justify-start basis-3/5">
            <div className="flex justify-center">
              <img ref={mainImg} className="main-img" src={slides[current]} alt="" />
            </div>
            <div className="flex flex-row justify-center mt-2">
            <img className={style1} src={slides[0]} alt="" onClick={() => changeCurrent(0)}/>
              <img className={style2} src={slides[1]} alt="" onClick={() => changeCurrent(1)}/>
              <img className={style3} src={slides[2]} alt="" onClick={() => changeCurrent(2)}/>
            </div>
          </div>
          <div id="desc" className="flex flex-col basis-2/5">
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">Price:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">Rs. 350</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">Sizes:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">S | M | L | XL</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">About:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">Get ready to rock with our Recharge Fest t-shirt! Featuring a vibrant design inspired by the Recharge Fest's theme, this shirt is perfect for music lovers and Fest-goers alike. Made from high-quality materials, this shirt is both comfortable and durable. Show off your love for the Fest and look great while doing it with our Recharge Fest t-shirt!</p>
              </div>
            </div>
           
            
            <div className="flex justify-center">
            <button
            type="button"
            onClick={() => window.open("http://rec.rechargefest.org/merch", "_self")}
            className="mt-5 px-4 py-2 text-white items-center hover:text-white hover:bg-[#0099ff8a]  duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod w-52"
          >
            <div class="main text-md">
              <span class="socod text-left">BUY NOW</span>
            </div>
          </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
