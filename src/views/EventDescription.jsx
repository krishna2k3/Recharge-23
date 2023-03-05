const EventDescription = () =>{
    return(
        <div>
            <div className="flex flex-col lg:flex-col bg-black stretch-to-screen text-white">
            
                <div className="main text-4xl lg:my-10 lg:text-5xl ml-10 my-5 lg:flex lg:justify-center">
                    <span class="webdev">FutsalCup mukkiyam bigilae</span>
                </div>
            
                <div className="lg:flex lg:flex-row flex flex-col ">
                    <div id="event-image basis-1/2">
                        <img 
                        className="scale-75 lg:scale-100 lg:ml-52 mb-10 rounded-xl"
                        src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-11.jpg?ssl=1" alt="img" />
                    </div>
                
                <div id="mini-head " className="lg:ml-44 lg:mt-12 basis-1/2 flex flex-col">
                    <div className="flex flex-row mb-4">
                       <div className="main mt-1">
                            <span className="socod text-xl ml-10">Event Day:</span>
                        </div>
                        <div className="ml-2">
                            <p className=" text-xl leading-9">Day 1</p>     
                        </div>
                    </div>
                   
                    <div className="flex flex-row mb-4">
                        <div className="main mt-1">
                                <span className="socod text-xl ml-10">Event Type:</span>
                            </div>
                            <div className="ml-2">
                                <p className=" text-xl leading-9">Individual</p>    
                            </div>
                        </div>    
                        <div className="flex flex-row mb-4">
                           <div className="main mt-1">
                                <span className="socod text-xl ml-10">Time:</span>
                            </div>
                            <div className="ml-2 mt-1">
                                <p className=" text-xl leading-9">10:00 A.M</p>    
                            </div>
                        </div>
                        <div className="flex flex-row mb-4">
                           <div className="main mt-1">
                                <span className="socod text-xl ml-10">Venue:</span>
                            </div>
                            <div className="ml-2">
                                <p className=" text-xl leading-9">Indoor Auditorium</p>    
                            </div>
                        </div>
                        <div className="flex flex-row mb-4">
                           <div className="main mt-1">
                                <span className="socod text-xl ml-10">Cost:</span>
                            </div>
                            <div className="ml-2">
                                <p className=" text-xl leading-9">Free </p>    
                            </div>
                        </div>
                        <div className="flex flex-row mb-4">
                           <div className="main mt-1">
                                <span className="socod text-xl ml-10">Contacts:</span>
                            </div>
                            <div className="ml-2">
                                <p className=" text-xl leading-9">Tobey:- 123456789 </p>    
                                <p className=" text-xl leading-9">Andrew:- 123456789 </p>
                            </div>
                        </div>
                        <div className="flex flex-row mb-4">
                            <button className="ml-10 mt-6 px-4 py-2 rounded-md text-xl w-52 hover:duration-500 px neon-btn">Register Now</button>                      
                        </div>
                    
                    </div>

                </div>
            
                <div id="description" className="my-6">
                    <div className="main">
                        <span className="socod text-3xl ml-5 lg:ml-52">Description</span>
                    </div>
                    <div className="lg:ml-60 mt-4 ml-5 lg:mr-60">
                        <p className=" text-xl leading-9">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia</p>    
                    </div>
                </div>
                <div id="rules" className="mb-6">
                    <div className="main">
                        <span className="socod text-3xl ml-5 lg:ml-52">Rules</span>
                    </div>
                    <div className="lg:ml-60 mt-4 ml-5 lg:mr-60">
                        <p className=" text-xl leading-9">1.Winners is announced Based on their Performance</p>
                        <p className=" text-xl leading-9">2. Jury's decision is the final</p>
                        <p className=" text-xl leading-9">3.Teams must present their ideas using the presentation template on the day of the event </p>
                        <p className=" text-xl leading-9">4. If the work is discovered to be plagiarised, any team will be liable to disqualification</p>
                        <p className=" text-xl leading-9">5. Each team will be given a timeframe of around 10-12 minutes for their overall presentation followed by the questionnaire session by the panel</p>    
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default EventDescription;