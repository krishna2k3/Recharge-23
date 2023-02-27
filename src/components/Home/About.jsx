const About = ()=>{
    return (
        
        
        <div id="about" className="flex flex-col lg:flex-row stretch-to-screen bg-[#1A1330] text-white items-center">
            <div id="left" className="basis-1/2 relative left-32 z-50">
                <p className="text-7xl mt-16 ml-16">About</p>    
                <hr className="ml-16 h-px w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <hr className="ml-28  w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <p className="mx-16">
                    A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia
                </p>
                <button type="button" onClick={()=>window.open("/aboutpage","_self")} class="ml-16 mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Show More
                </button>
            </div>

            <div id="right">
                <img className="relative right-32 z-0" src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                {/* <div className="absolute ml-16 my-32 h-72 w-72 lg:h-96 lg:w-96 lg:mt-32 bg-white z-">
                    <img src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg" alt="" />
                </div> */}
            </div>
        </div>
        
    )
}

export default About