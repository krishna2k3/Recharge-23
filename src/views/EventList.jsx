import { MdOutlinePaid } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

const EventList = () =>{

    const eventList = {
        dance:[
            {
                list: [
                    {
                        eventName: "katakalli", 
                        paid: "yes", 
                        type: "team", 
                        mon: "mar", 
                        date: "23"
                    }, 
                    {
                        eventName: "western",
                        paid: "no",
                        type: "single", 
                        mon: "mar", 
                        date: "24"
                    }, 
                    {
                        eventName: "western",
                        paid: "no",
                        type: "single", 
                        mon: "mar", 
                        date: "24"
                    }
                ]
            }
        ],
        onlinegames:[
            {
                list: [
                    {
                        eventName: "valorant", 
                        paid: "yes", 
                        type: "team", 
                        mon: "mar", 
                        date: "23"
                    }, 
                    {
                        eventName: "fifa", 
                        paid: "yes", 
                        type: "single", 
                        mon: "mar", 
                        date: "24"
                    }
                ]
            }
        ],
        entertainment:[
            {
                list: [
                    {
                        eventName: "valorant", 
                        paid: "yes", 
                        type: "team", 
                        mon: "mar", 
                        date: "23"
                    }, 
                    {
                        eventName: "fifa", 
                        paid: "yes", 
                        type: "single", 
                        mon: "mar", 
                        date: "24"
                    }
                ]
            }
        ],
        photography:[
            {
                list: [
                    {
                        eventName: "valorant", 
                        paid: "yes", 
                        type: "team", 
                        mon: "mar", 
                        date: "23"
                    }, 
                    {
                        eventName: "fifa", 
                        paid: "yes", 
                        type: "single", 
                        mon: "mar", 
                        date: "24"
                    }
                ]
            }
        ]
    }

    const navigate = useNavigate();

    const eventdescPage = () => {
        navigate("/eventdescription")
    }

    const {state} = useLocation();
    let { title } = state;
    title = title.replace(/\W+/g, "");
    console.log(title);
    var newitem = eventList[title.toLowerCase()];
    console.log(newitem[0].list.length);

    var indents = [];
    for(let i=0; i<newitem[0].list.length; i++) {
        indents.push(
            <div className="w-9/12 cursor-pointer grid grid-cols-12 relative max-w-7xl mx-auto my-2 px-5 py-10 backdrop-blur-sm rounded-3xl shadow-inner md:scale-75 shadow-[#ff003c] transition ease-in-out delay-200 hover:scale-90 hover:-translate-y-1 hover:duration-300 " onClick={eventdescPage}>
                <div className="flex flex-auto">
                    <h1 className='text-white md:text-2xl tracking-widest font-black text-lg'>{newitem[0].list[i].eventName.toUpperCase()}</h1>
                </div>
                <div className=" grid-cols-2 col-start-1 col-span-3 gap-2 md:col-span-0 md:gap-0 flex flex-auto">
                    {(newitem[0].list[i].paid === "yes") ? <MdOutlinePaid size={25} className="block" /> : <MdMoneyOff size={25} className="hidden" />} 
                    {(newitem[0].list[i].type === "team") ? <AiOutlineTeam size={25} className="block" /> : <BsFillPersonFill size={25} className="hidden"/>}
                    {(newitem[0].list[i].paid === "no") ? <MdMoneyOff size={25} className="block" /> : <MdOutlinePaid size={25} className="hidden" />}
                    {(newitem[0].list[i].type === "single") ? <BsFillPersonFill size={25} className="block" /> : <AiOutlineTeam size={25} className="hidden" />}
                </div>
                <div className="float-right items-center absolute inset-y-10 md:inset-y-9 md:right-10 col-start-10 col-span-12">
                    <h1 className='text-white md:text-2xl font-black text-center text-lg'>{newitem[0].list[i].mon.toUpperCase()}<br />{newitem[0].list[i].date}</h1>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div className="flex flex-col text-white py-5 ">
                <div className="flex flex-col text-center">
                    <div className='main lg:my-10 my-3 lg:flex lg:justify-center'>
                        <span className="webdev md:text-5xl text-4xl font-black">{title}</span>
                    </div>

                    <div className="flex flex-col">
                        {indents}
                    </div>  
                </div>
            </div> 
        </div>
        
    )
}
export default EventList