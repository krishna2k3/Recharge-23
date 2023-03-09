import "./Proshow.css";

const Spotlight = () => {
  return (
    <div
      id="proshows"
      className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8"
    >
      <div className="main text-6xl md:7xl mb-5 ">
        <span className="webdev text-left">SPOTLIGHT</span>
      </div>
      <div className="proshow-cards">
        <div className="proshow-card lg:scale-90 relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/raina-bg.png")}
            alt="Jonita"
            className="z-0 rounded-xl"
          />
          <div className="z-10 gap-y-1 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              SURESH RAINA
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              
            </h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Spotlight;