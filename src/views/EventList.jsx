import { BiRupee } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EventList = () => {
  const location = useLocation();
  const [eventList, setEventList] = useState([]);
  const [isFetched, setFetched] = useState(false);
  async function fetch_events() {
    fetch(`https://rechargefest.org/api/eventinfo?id=${location.state.id}`)
      .then((response) => response.json())
      .then((data) => {
        setFetched(true);
        setEventList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const { state } = useLocation();
  let { title } = state;

  useEffect(() => {
    fetch_events();
  });

  return (
    <div className="pb-40">
      <div className="stretch-to-screen flex flex-col justify-center items-center text-white py-5 ">
        {isFetched === false ? (
          <div className=" flex flex-row justify-center items-center">
            <p className="animate-pulse text-5xl">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col text-center">
            <div className="main lg:my-10 my-3 lg:flex lg:justify-center">
              <span className="socod md:text-5xl text-4xl font-black">
                {title}
              </span>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-10 ">
              {eventList.map((eventList) => {
                return (
                  <div className="container max-w-fit">
                    <div class="parent ">
                      <div className="card " style={{ height: "30em"  }}>
                        <div class="content-box flex flex-col justify-between">
                          <div>
                            <h1 className="card-title">{eventList.name}</h1>
                            <div className=" grid-cols-2 col-start-1 col-span-3 gap-2 md:col-span-0 md:gap-0 items-center justify-center flex flex-auto">
                              {eventList.pay > 0 ? (
                                <BiRupee size={25} className="block" />
                              ) : (
                                <MdMoneyOff size={25} className="hidden" />
                              )}
                              {eventList.team_event === "true" ? (
                                <AiOutlineTeam size={25} className="block" />
                              ) : (
                                <BsFillPersonFill
                                  size={25}
                                  className="hidden"
                                />
                              )}
                              {eventList.pay === 0 ? (
                                <MdMoneyOff size={25} className="block" />
                              ) : (
                                <BiRupee size={25} className="hidden" />
                              )}
                              {eventList.team_event === "false" ? (
                                <BsFillPersonFill size={25} className="block" />
                              ) : (
                                <AiOutlineTeam size={25} className="hidden" />
                              )}
                            </div>
                            <p class="card-content">
                              {eventList.short_description.length > 250
                                ? eventList.short_description.slice(0, 250) +
                                  "..."
                                : eventList.short_description}
                            </p>
                          </div>
                          <Link
                            to="/eventdescription"
                            className="see-more cursor-pointer"
                            state={{ event: eventList }}
                          >
                            See More
                          </Link>
                        </div>
                        <div class="date-box">
                          <span class="month">DAY</span>
                          <span class="date">{eventList.day}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default EventList;
