import { useEffect } from "react";

const Aboutrechargepage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-col stretch-to-screen text-white items-center "
    >
      
      <div class="mt-16 text-7xl lg:mt-16 main text-center">
        <span class="webdev">About Recharge</span>
      </div> 
      <p className="mx-10 my-10 lg:my-16 lg:mx-52 text-lg text-white justify-between max-w-4xl text-center lg:text-left">
      Rajalakshmi Institutions is proud to present its most prominent and
          signature Cultural fest - RECHARGE'23, which promotes liberty, energy,
          and enthusiasm among both participants and spectators while also
          providing students an opportunity to explore and rediscover
          themselves.<br></br>
      <br></br>Recharge is Rajalakshmi Engineering College’s inter-collegiate annual cultural fest. The previous editions of Recharge and other cultural fests at REC featured celebrities from showbiz like Karthi Sivakumar, Santhosh Narayanan, Andrea Jeremiah, and DJ Gowtham. REC has also had the privilege of hosting eminent sports personalities like Kris Srikkanth, T. Natarajan, and Dwayne Bravo at our sport-driven events.
        <br></br>
        <br></br>With over 75+ events ranging from music and dance to sports and other exciting ones, Recharge ‘23 provides students from across the country a platform to express themselves and showcase their talents. The pro-shows of Recharge ‘23 will feature an exciting lineup that includes performances from music superstars and international DJs, as well as appearances from sports legends.
        <br></br>
        <br></br>So, what are you waiting for? Buy your passes now! Come feel reignited, rejuvenated, and revivified at Recharge ‘23. We’ll see you there!
      </p>
    </div>
  );
};

export default Aboutrechargepage;
