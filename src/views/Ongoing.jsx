const Ongoing = () => {
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
            <h1 className="text-4xl">  Ongoing Events</h1>
            {upcomings.map((e) => {
                return (
                    <div>
                        <div className=" max-h-auto flex flex-col mx-3 lg:mx-10 mt-5">
                            <div className="flex flex-row text-md lg:text-2xl bg-zinc-900 max-h-32 rounded-t-xl ">
                                <div className="flex flex-col mx-1 my-6 basis-2/5 lg:basis-1/3">
                                    <h2 className="">{e.title}</h2>
                                    <h4 className="">{e.category}</h4>
                                </div>
                                <div className="flex flex-col mt-10 basis-1/5 lg:basis-1/3">
                                    <h2 className="text-green-600 mx-3">Live</h2>
                                </div>

                                <div className="flex mx-1 flex-col my-6 basis-2/5 lg:basis-1/3"> 
                                    <h2 className="">{e.venue}</h2>
                                    <h4 className="">{e.block}</h4>
                                </div>
                            </div>

                            <div className="flex max-h-auto text-md lg:text-2xl flex-row bg-zinc-800 rounded-b-xl " >
                                <div className="flex flex-col my-6 basis-1/3">
                                    <h2 className="">{e.name1}</h2>
                                    <h4 className="">{e.no1}</h4>
                                </div>
                                <div className="flex flex-col my-6 basis-1/3"> 
                                    <h2 className="">{e.name2}</h2>
                                    <h4 className="">{e.no2}</h4>
                                </div>
                                <div className="flex flex-col my-6 basis-1/3"> <h2 className="">{e.name3}</h2>
                                    <h4 className="">{e.no3}</h4>
                                </div>

                            </div>

                        </div>

                    </div>



                );
            })}


        </div >
    )
}
export default Ongoing