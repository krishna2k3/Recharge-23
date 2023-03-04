import Footer from "../components/Common/Footer";
import '../components/Common/neonfont.css';
const EventDescription = () =>{
    return(
        <div>
      
            <div className="flex flex-col lg:flex-col bg-black stretch-to-screen text-white">
            <div class="main text-5xl lg:my-10 lg:text-6xl ml-5 my-5 lg:flex lg:justify-center">
                <span class="webdev">FutsalCup mukkiyam bigilae</span>
            </div>
            <div id="description">
                <div className="main">
                    <span className="socod text-4xl ml-10">Description</span>
                </div>
                <div className="lg:ml-24 mt-4 lg:mr-96">
                    <p className=" text-2xl leading-9">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia</p>    
                </div>
            </div>
            <div id="rules">
                <div className="main">
                    <span className="socod text-4xl ml-10">Description</span>
                </div>
                <div className="lg:ml-24 mt-4 lg:mr-96">
                    <p className=" text-2xl leading-9">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose. Wikipedia</p>    
                </div>
            </div>
            
            
            
                  <p className="text-white">text</p>
            </div>
            <Footer/>
        </div>
        
    )
}

export default EventDescription;