import "./Proshow.css";

const ProShows = () => {
  return (
    <div
      id="proshows"
      className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8"
    >
      <div className="main text-6xl md:7xl mb-5 ">
        <span className="socod text-left">PROSHOWS</span>
      </div>
      <div className="proshow-cards">
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/jonita.webp")}
            alt="Jonita"
            className="z-0 rounded-xl"
          />
          <div className="z-10 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              JONITA GANDHI
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              PLAYBACK SINGER
            </h1>

            <h1 className="  text-md text-center font-bold tracking-widest content">
              DAY 1
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
            src={require("../../../assets/Masala-Coffee.webp")}
            alt="Masala Cafe"
            className="z-0 rounded-xl"
          />
          <div className="z-10 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              MASALA COFFEE
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              MUSIC BAND
            </h1>

            <h1 className="  text-md text-center font-bold tracking-widest content">
              DAY 2
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
            src={require("../../../assets/siana.webp")}
            alt=""
            className="z-0 rounded-xl"
          />
          <div className="z-10 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              SIANA CATHERINE
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              SUNBURN DJ
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
