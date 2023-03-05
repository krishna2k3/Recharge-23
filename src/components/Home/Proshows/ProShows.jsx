import "./Proshow.css";

const ProShows = () => {
  return (
    <div
      id="proshows"
      className="flex flex-col  text-white items-center px-5 stretch-to-screen"
    >
      <div className="main text-6xl md:7xl mb-5 ">
        <span className="webdev text-left">PROSHOWS</span>
      </div>
      <div className="proshow-cards">
        <div className="proshow-card relative flex flex-col justify-end items-center ">
          <img
            className="-z-10 absolute proshows-bg"
            alt="background-jonita"
            src={require("../../../assets/pro-shows-bg.jpg")}
          />
          <img
            src={require("../../../assets/jonita.png")}
            alt="Jonita"
            className="z-0"
          />
          <div className="z-10 gap-y-1 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              JONITA GANDHI
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              DAY 1
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center ">
          <img
            className="-z-10 absolute proshows-bg"
            alt="background-?3"
            src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png"
          />
          {/* <img
            src={require("../../../assets/jonita.png")}
            alt="Jonita"
            className="z-0"
          /> */}
          <div className="z-10 gap-y-1 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              ??
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              DAY 2
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center ">
          <img
            className="-z-10 absolute proshows-bg"
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
          <div className="z-10 gap-y-1 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              ??
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              DAY 3
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProShows;
