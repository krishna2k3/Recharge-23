const EventDescription = () => {
  return (
    <div>
      <div className="flex flex-col  text-white py-5 ">
        <div className="flex flex-col lg:flex-row mx-16 my-10 lg:gap-x-8">
          <img
            className="rounded-xl"
            src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/07/ar-11.jpg?ssl=1"
            alt="img"
          />

          <div id="mini-head " className="flex flex-col gap-y-5">
            <div className="main text-4xl  lg:text-5xl  lg:flex lg:justify-center">
              <span class="webdev">FutsalCup mukkiyam bigilae</span>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Event Day:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">Day 1</p>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Event Type:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">Individual</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Time:</span>
              </div>
              <div className="ml-2 mt-1">
                <p className=" text-xl leading-9">10:00 A.M</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Venue:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">Indoor Auditorium</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Cost:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">Free </p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="main mt-1">
                <span className="socod text-xl ">Contacts:</span>
              </div>
              <div className="ml-2">
                <p className=" text-xl leading-9">Tobey:- 123456789 </p>
                <p className=" text-xl leading-9">Andrew:- 123456789 </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => window.open("/aboutpage", "_self")}
              className="px-4 py-2 text-white hover:text-white hover:bg-[#ff003c] duration-200 rounded-md font-medium hover:duration-500 px neon-btn max-w-max"
            >
              <div class="main text-md">
                <span class="webdev text-left tracking-wider">REGISTER NOW</span>
              </div>
            </button>
          </div>
        </div>

        <div id="description" className="mx-16 my-8">
          <div className="main">
            <span className="socod text-3xl">Description</span>
          </div>
          <div className="">
            <p className=" text-xl leading-9">
              A paragraph is a self-contained unit of discourse in writing
              dealing with a particular point or idea. Though not required by
              the orthographic conventions of any language with a writing
              system, paragraphs are a conventional means of organizing extended
              segments of prose. Wikipedia
            </p>
          </div>
        </div>
        <div id="rules" className="mx-16 my-8">
          <div className="main">
            <span className="socod text-3xl">Rules</span>
          </div>
          <div className="">
            <p className=" text-xl leading-9">
              A paragraph is a self-contained unit of discourse in writing
              dealing with a particular point or idea. Though not required by
              the orthographic conventions of any language with a writing
              system, paragraphs are a conventional means of organizing extended
              segments of prose. Wikipedia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
