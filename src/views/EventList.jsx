import { MdOutlinePaid } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {

    
    const location = useLocation();
    const [eventList, setEventList] = useState([]);

    async function fetch_events(){
        fetch(`https://rechargefest.org/api/eventinfo?id=${location.state.id}`)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setEventList(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
      
    }

    const navigate = useNavigate();

    const eventdescPage = () => {
        navigate("/eventdescription")
    }
    useEffect(() => {
        fetch_events()
    })





    return (
        <div>
            <div className="flex flex-col text-white py-5 ">
                <div className="flex flex-col text-center">
                    <div className='main lg:my-10 my-3 lg:flex lg:justify-center'>
                        <span className="webdev md:text-5xl text-4xl font-black">title</span>
                    </div>

                    <div className="flex flex-col">

                    </div>
                </div>
            </div>
        </div>

    )
}
export default EventList