import { MdOutlinePaid } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

const EventList = () =>{
    const eventList = {
        dance:[
            {title: "Katakalli"}
        ],
        onlinegames:[
            {title:"xxy"}
        ]
    }
    return(
        <div>
            <div className="flex flex-col lg:flex-col bg-black stretch-to-screen text-white">
                <div className='main text-5xl lg:my-10 lg:text-6xl ml-10 my-5 lg:flex lg:justify-center'>
                    <span className="socod">DANCE</span>
                </div>

                <div>
                    <div id="eventlist" className="w-9/12 grid grid-cols-12 relative bg-transparent bg-opacity-10 max-w-7xl mx-auto my-10 px-5 py-10 rounded-3xl backdrop-blur-lg drop-shadow-lg shadow-inner shadow-blue-600 transition ease-in-out delay-200 hover:scale-125 hover:-translate-y-1 hover:duration-300 ">
                        <div>
                            <h1 className='text-white text-4xl font-black leading-9'>{eventList.dance[0].title}</h1>
                        </div>
                        <div className="col-start-3">
                            <MdOutlinePaid size={30}/><AiOutlineTeam size={30}/>
                        </div>
                        <div className="float-right items-center absolute inset-y-6 right-10">
                            <h1 className='text-white text-4xl font-black leading-9 text-center'>MAR<br />23</h1>
                        </div>
                    </div>
                    
                    <div className="w-9/12 bg-transparent bg-opacity-10 max-w-7xl mx-auto my-10 px-5 py-10 rounded-3xl backdrop-blur-lg drop-shadow-lg shadow-inner shadow-blue-600 transition ease-in-out delay-200 hover:scale-125 hover:-translate-y-1 hover:duration-300 ">
                        <h1 className='text-white'>Adaludan</h1>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}
export default EventList