import { useRef, useState } from "react";
import "./css/Merchandise.css";

const Merchandise = () => {

  const slides = ["https://www.mydesignation.com/wp-content/uploads/2021/03/what-do-you-mean-tshirt-mydesignation-mockup-image-latest.gif",
                  "https://www.indianphysicist.com/wp-content/uploads/2020/12/Blue-Shirt-Half-Sleeves-Round-Neck-Unisex-Maroon-Physics-Tshirt.jpg",
                    "https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---T-Shirt-sg_800x.jpg?v=1616826490"]

  const [current, setCurrent] = useState(0)
  const [style1, setStyle1] = useState('active')
  const [style2, setStyle2] = useState('inactive')
  const [style3, setStyle3] = useState('inactive')

  const changeCurrent = (idx) => {
    setCurrent(idx)
    if ( idx == 0 ) {
      setStyle1('active')
      setStyle2('inactive')
      setStyle3('inactive')
    } else if ( idx == 1 ) {
      setStyle2('active')
      setStyle1('inactive')
      setStyle3('inactive')
    } else if ( idx == 2 ) {
      setStyle3('active')
      setStyle2('inactive')
      setStyle1('inactive')
    }
  }


  return (
    <div id="merchandise" className="m-8 mt-0">
      <div id="content" className="flex flex-col items-center py-10 gap-y-4">
        <div class="main text-6xl justify-center">
          <span class="socod">MERCHANDISE</span>
        </div>
        <div id="main-content" className="flex flex-col lg:flex-row">
          <div id="images" className="flex flex-col justify-start basis-3/4">
            <div className="flex justify-center">
              <img className="main-img" src={slides[current]} alt="" />
            </div>
            <div className="flex flex-row justify-center">
            <img className={style1} src={slides[0]} alt="" onClick={() => changeCurrent(0)}/>
              <img className={style2} src={slides[1]} alt="" onClick={() => changeCurrent(1)}/>
              <img className={style3} src={slides[2]} alt="" onClick={() => changeCurrent(2)}/>
            </div>
          </div>
          <div id="desc" className="flex flex-col basis-1/4">
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">Time:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">something</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">Time:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">something</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-4">
                <span className="socod text-xl ">Time:</span>
              </div>
              <div className="ml-2 mt-4">
                <p className=" text-xl text-white">something</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
