const AboutPage = ()=>{
    return (
            <div>
            <div id="about" className="flex flex-col lg:flex-row stretch-to-screen bg-[#1A1330] text-white items-center">
            <div id="left" className="basis-1/2">
                <p className="ml-10 mt-16 text-7xl lg:mt-16 lg:ml-24">About</p>    
                <hr class="ml-10 lg:ml-24 h-px w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <hr class="ml-24 lg:ml-36  w-20 my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                <p className="mx-10 my-10 lg:mx-24 ">
                    A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia
                </p>
                <button type="button" class="ml-10 lg:ml-24 lg:mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">                    Show More
                </button>
            </div>

            <div id="right" className="basis-1/2 ">
                <div class="ml-8 my-32 h-72 w-72 lg:h-96 lg:w-96 lg:mt-32 bg-white">
  
                </div>
            </div>
        </div>
        </div>
        
        
    )
}

export default AboutPage