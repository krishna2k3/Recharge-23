const AboutRecharge = () => {
  return (
    <div
      id="about-recharge"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center bg-[#1A1330] gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
    >
      
      <div id="left" className="basis-1/2 order-last lg:order-first">
        
      <p className="text-7xl font-extrabold shadow-inner">
          About Recharge
        </p>
        <hr className=" border-2 w-20 my-4 ml-2 border-red-500"></hr>
        <hr className="w-20 my-4 border-2 ml-8 border-red-500 "></hr>
        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Institutions is proud to present its most prominent and
          signature cultural fest RECHARGE'23 which promotes liberty, energy,
          and enthusiasm among both participants and viewers while also
          providing students with the opportunity to explore and rediscover
          themselves.
        </p>
        <button
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          class=" mt-6 px-4 py-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 hover:duration-500 px "
        >
          Show More
        </button>
      </div>

      <div id="right" className="basis-1/2"> 
      <img
          className="shadow-2xl rounded-md my-8"
          id="about-img"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutRecharge;