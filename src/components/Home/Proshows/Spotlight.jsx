/* import "./Proshow.css"; */

const Spotlight = () => {
  return (
    <div id="spotlight" className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8">
      <div className="main text-6xl md:7xl mb-5 text-white">
        <span className="socod text-left">SPOTLIGHT</span>
      </div>
      <div className="proshow-cards">
      <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/raina-transformed.png")}
            alt="Jonita"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              SURESH RAINA
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              FORMER INDIAN CRICKETER
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/jagan-1.png")}
            alt="Jonita"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              JAGAN KRISHNAN
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              STANDUP COMEDIAN
            </h1>
          </div>
        </div>

        <div className="proshow-card relative flex flex-col justify-end items-center ">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-?3"
            src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png"
          />
          {/* <img
            className="-z-10 absolute proshows-bg"
            src={require("../../../assets/pro-shows-bg.jpg")}

          /> */}
          {/* <img
            src={require("../../../assets/jonita.png")}
            alt="Jonita"
            className="z-0"
          /> */}
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              ??
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
