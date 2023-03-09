import { useEffect } from "react";
const BuyTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="buytickets" className="flex flex-col py-10 items-center stretch-to-screen ">
        <div class="text-7xl main text-center">
          <span class="webdev">Tickets</span>
        </div>
        <div className="flex flex-wrap mx-4">
          <div className="ticketcard border-2 max-w-md max-h-md border-[#BBC2CC] p-4 lg:m-12 backdrop-blur-sm m-4 rounded-md box !bg-[#BBC2CC40] hover:!bg-[#BBC2CC60] hover:!scale-105 duration-500 flex text-white justify-center flex-col">
            <p className="text-4xl m-3 text-white">Standard</p>
            <ul className="list-disc">
              <li className="m-3 ml-6">
                Gain exclusive entry to over 75 exciting events with our
                all-access pass, including highly anticipated proshows.
              </li>
              <li className="m-3 ml-6">
                Be a part of the concert action with standard tickets - entry is
                based on first come, first serve!
              </li>
              <li className="m-3 ml-6">
                Get your tickets now and enjoy the concert with your friends -
                each standard ticket admits one concertgoer!
              </li>
              <li className="m-3 ml-6">
                Don't miss out on the chance to see your favorite artists live -
                standard tickets are going fast!
              </li>
              <li className="m-3 ml-6">
                Experience the thrill of live music with standard tickets and be
                a part of the unforgettable concert atmosphere!
              </li>
            </ul>
          </div>
          <div className="border-2 max-w-md max-h-md border-[#FFD700] p-4 lg:m-12 m-4 rounded-md !bg-[#FFD70020] hover:!bg-[#FFD70040] hover:!scale-105 duration-500 hover:bg-blend-normal box flex text-white justify-center flex-col">
            <p className="text-4xl m-3 text-[#FFD700]">Premium</p>
            <ul className="list-disc">
              <li className="m-3 ml-6">
                Gain exclusive entry to over 75 exciting events with our
                all-access pass, including highly anticipated proshows.
              </li>
              <li className="m-3 ml-6">
                Elevate your concert experience with premium tickets and enjoy
                exclusive access to the fanpit only for premium ticket holders!
              </li>
              <li className="m-3 ml-6">
                Get up close and in the center of the action with your favorite
                artists! With premium standing tickets, it's first come, first
                serve - so don't wait!
              </li>
              <li className="m-3 ml-6">
                Treat yourself to the ultimate concert experience with premium fanpit
                tickets
              </li>
              <li className="m-3 ml-6">
                Each premium ticket admits one reveller to the concert - don't
                miss out on this incredible opportunity!
              </li>
            </ul>
          </div>
        </div>
      <button
        type="button"
        onClick={() => window.open("https://rechargefest.org/", "_self")}
        className="px-4 py-2 text-white hover:text-white  duration-200 rounded-md font-medium hover:duration-500 px neon-btn max-w-max "
      >
        <div class="main text-md">
          <span class="webdev text-left">BUY TICKETS</span>
        </div>
      </button>
    </div>
  );
};

export default BuyTickets;
