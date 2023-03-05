const AboutPage = ()=>{
    return (
            <div id="about" className="flex flex-col lg:flex-row stretch-to-screen bg-black text-white items-center">
                <div id="left" className="basis-1/2">
                <div class="ml-10 mt-16 text-7xl lg:mt-16 lg:ml-24 main text-7xl">
                    <span class="webdev text-left">About</span>
                </div>
                    {/* <p className="ml-10 mt-16 text-7xl lg:mt-16 lg:ml-24 webdev">About</p>     */}
                    {/* <hr class="ml-10 lg:ml-24 border-0 h-1 w-20 mt-2 bg-[#b718f1] drop-shadow-lg"></hr>
                    <hr class="ml-24 lg:ml-36 w-20 h-1 border-0 mt-4 bg-[#b718f1]"></hr> */}
                    <p className="mx-10 my-10 lg:mx-24">
                        A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia
                    </p>
                    <button className="border border-[#b718f1] drop-shadow-lg ml-10 lg:ml-24 text-white px-4 py-2 rounded-md font-medium my-4 hover:bg-[#ff003c] hover:text-white hover:duration-1000 neon-btn">
                        Show More
                    </button>
                    {/* <button type="button" class="ml-10 lg:ml-24 lg:mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">                    Show More
                    </button> */}
                </div>

                <div id="right" className="basis-1/2 ">
                    <div class="ml-8 my-32 h-72 w-72 lg:h-96 lg:w-96 lg:mt-32 bg-white">
    
                    </div>
                </div>
        </div>
    )
}

export default AboutPage