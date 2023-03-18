import EventCard from "../components/Events/EventCard";


import { motion, AnimatePresence } from "framer-motion";

const Upcoming = props => {
    const upcomings = [
        {
            //     name: "mithiii",
            //     class: "2nd"

            title: "DEFECTIVE DETECTIVE",

            category: "FUN AND ENTERTAINMENT ",

            // category_id: 7,
            min: "14 MIN",
            venue: "MAIN SEMINAR HALL",
            block: "1st FLOOR,B-BLOCK",
            name1: "SHAMITA",
            name2: "MITHILESH ",
            name3: "MANO",
            no1: "97496347",
            no2: "347634801",
            no3: "3422433233",

        },
        {

            title: "BATTEL OF FASHION",
            category: "FASHION ",
            min: "10 MIN",
            venue: "TIFAC",
            block: "1st FLOOR,ARCH-BLOCK",
            name1: "SUBHASH",
            name2: "SURIYA",
            name3: "KESHAV",
            no1: "09943874",
            no2: "098398",
            no3: "09280980",

        },


    ];






    return (
        <div className="text-white text-center  pt-6">
            <h1 className="text-4xl">  Upcoming View</h1>





            {upcomings.map((e) => {
                return (
                    <div>



                        <div className=" flex flex-col pt-5 ">

                            <div className="container flex mx-auto flex-row bg-zinc-900 rounded-t-xl ">

                                <div className="flex mx-auto flex-col -my-5">
                                    <h2 className="text-2xl flex">{e.title}
                                    </h2>
                                    <h4 className="flex">{e.category}</h4>
                                </div>
                                <div className="flex mx-auto flex-col">
                                    <h2 className="text-2xl text-green-600 ">{e.min}</h2>
                                </div>

                                <div className="flex mx-auto flex-col"> <h2 className="text-2xl ">{e.venue}</h2>
                                    <h4 className="flex justify-start">{e.block}</h4></div>

                            </div>



                            <div className=" container flex mx-auto  flex-row bg-zinc-800 p-4 rounded-b-xl " >

                                <div className="flex mx-auto flex-col ">
                                    <h2 className="text-2xl flex">{e.name1}</h2>
                                    <h4 className="flex">{e.no1}</h4>
                                </div>
                                <div className="flex mx-auto flex-col"> <h2 className="text-2xl flex">{e.name2}</h2>
                                    <h4 className="flex">{e.no2}</h4></div>

                                <div className="flex mx-auto  flex-col"> <h2 className="text-2xl flex">{e.name3}</h2>
                                    <h4 className="flex">{e.no3}</h4></div>

                            </div>

                        </div>

                    </div>



                );
            })}


        </div >


    )
}

export default Upcoming