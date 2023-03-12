
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const EventDescription = () => {
  const location = useLocation()
  
useEffect(()=>{
  console.log(location.state.event);
})

const rulesList = location.state.event.rules.split("\n");
console.log(rulesList)

  return (
    <div>
      <div className="flex flex-col  text-white py-2 ">
        <div className="flex flex-col lg:flex-row mx-16 my-5 lg:gap-x-8 text-center md:text-left">  
          <div id="mini-head " className="flex flex-col gap-y-5 items-center md:items-start my-6">
            <div className="main text-4xl  lg:text-5xl  lg:flex lg:justify-center">
              <span className="webdev socod">{location.state.event.name}</span>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Event Day:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">{location.state.event.day}</p>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Event Type:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">{location.state.event.team_event ? "Team" : "Individual"}</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Time:</span>
              </div>
              <div className="ml-2 mt-1">
                <p className=" text-xl leading-9">{location.state.event.time_of_event}</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Venue:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">{location.state.event.venue}</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Cost:</span>
              </div>
              <div className="ml-2">
                <p className="text-xl leading-9">{location.state.event.pay} </p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => window.open("/aboutpage", "_self")}
              className="px-4 py-2 text-white hover:text-white socod neon-btn-socod hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500   max-w-max"
              disabled
            >
              <div class="main text-md">
                <span class="socod text-left tracking-wider">REGISTRATIONS OPEN SOON</span>
              </div>
            </button>
          </div>
        </div>

        <div id="description" className="mx-16 my-3">
          <div className="main">
            <span className="socod text-3xl">Description</span>
          </div>
          <div className="">
            <p className=" text-xl leading-9">
            {location.state.event.description}
            </p>
          </div>
        </div>
        <div id="rules" className="mx-16 my-8">
          <div className="main">
            <span className="socod text-3xl">Rules</span>
          </div>
          <div className="">
            <p className=" text-xl leading-9">
            {rulesList.map((ele, idx) => {
              return(
                <p key = {idx}>{idx+1}. {ele}</p>
              )
            })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
