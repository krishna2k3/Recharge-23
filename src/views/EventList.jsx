import { BiRupee } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EventList = () => {


    const location = useLocation();
    const [eventList, setEventList] = useState([]);
    console.log(location.state.id);
    const [isFetched, setFetched] = useState(false)
    async function fetch_events() {
        fetch(`https://rechargefest.org/api/eventinfo?id=${location.state.id}`)
            .then((response) => response.json())
            .then((data) => {
                setFetched(true)
                setEventList(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    const { state } = useLocation();
    let { title } = state;

    const navigate = useNavigate();

    function eventdescPage(id){
        navigate("/eventdescription", { state: { id: id } })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch_events()
    },[])

    var indents = [];
    for (let i = 0; i < eventList.length; i++) {
        indents.push(
            <div className="container">
                <div class="parent ">
                    <div className="card" style={{height:"470px"}}>
                        <div class="content-box ">
                            <h1 className="card-title">{eventList[i].name.toUpperCase()}</h1>
                            <div className=" grid-cols-2 col-start-1 col-span-3 gap-2 md:col-span-0 md:gap-0 items-center justify-center flex flex-auto">
                                {(eventList[i].pay > 0) ? <BiRupee size={25} className="block" /> : <MdMoneyOff size={25} className="hidden" />}
                                {(eventList[i].team_event === "true") ? <AiOutlineTeam size={25} className="block" /> : <BsFillPersonFill size={25} className="hidden" />}
                                {(eventList[i].pay === 0) ? <MdMoneyOff size={25} className="block" /> : <BiRupee size={25} className="hidden" />}
                                {(eventList[i].team_event === "false") ? <BsFillPersonFill size={25} className="block" /> : <AiOutlineTeam size={25} className="hidden" />}
                            </div>
                            <p class="card-content">
                                {eventList[i].short_description}
                            </p>
                            {/* <Link to='/eventdescription' className="see-more cursor-pointer" 
                            state={{id:eventList[i].id}}>See More</Link> */}
                        </div>
                        <div class="date-box">
                            <span class="month">DAY</span>
                            <span class="date">{eventList[i].day}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="pb-40">
            <div className="stretch-to-screen flex flex-col justify-center items-center text-white py-5 ">
               { isFetched === false ? <div className=" flex flex-row justify-center items-center"><p className="animate-pulse text-5xl">Loading...</p></div>:<div className="flex flex-col text-center">
                    <div className='main lg:my-10 my-3 lg:flex lg:justify-center'>
                        <span className="socod md:text-5xl text-4xl font-black">{title}</span>
                    </div>

                    <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
                        {indents}
                    </div>

                </div>}
            </div>
        </div>

    )
}
export default EventList