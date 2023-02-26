const Landing = () => {
  return (
    <div
      id="landing"
      className="bg-black stretch-to-screen flex flex-col items-center py-7  text-white justify-between"
    >
      <div className="flex flex-col justify-center">
        <img
          src={require("../../assets/rec-logo.png")}
          className="h-15 w-40"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-5 items-center text-center">
        <img
          src={require("../../assets/recharge-logo.png")}
          className="h-40 md:h-64 w-auto"
          alt=""
        />
        <h2 className="font-semibold text-2xl">RECHARGE YOUR SPIRIT AND REIGNITE YOUR PASSION</h2>
        <h2 className="font-semibold text-2xl">23rd - 25th MARCH, 2023</h2>
        <button className="border px-4 py-2 rounded-md font-medium my-5">REGISTRATIONS SOON</button>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-2">
        <p>GET UPDATES ON</p>
        <img
          src={require("../../assets/icons8-instagram-90.png")}
          className=" h-6 cursor-pointer hover:scale-110 hover:duration-700"
          alt=""
        />
        </div>
    </div>
  );
};

export default Landing;
