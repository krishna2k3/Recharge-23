const AboutREC = () => {
  return (
    <div
      id="about-rec"
      className="flex flex-col lg:flex-row items-center lg:items-center bg-[#1A1330] gap-y-5 stretch-to-screen text-white p-10 lg:gap-x-8"
    >
      <div id="left" className="basis-1/2 order-first lg:order-first">
        <img
          className="shadow-2xl rounded-md my-8"
          id="about-img"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>

      <div id="right" className="basis-1/2">
        <p className="text-7xl font-extrabold shadow-inner">About REC</p>
        <hr className=" border-2 w-20 my-4 ml-2 border-red-500"></hr>
        <hr className="w-20 my-4 border-2 ml-8 border-red-500 "></hr>
        <p className=" text-lg  shadow-inner leading-loose">
          Rajalakshmi Engineering College, an autonomous institution affiliated
          with Anna University, Chennai, was established in 1997 and has been
          churning out high-quality professionals ever since. REC has aided
          thousands of students in landing their dream careers and becoming
          professionals in their fields.
        </p>
        <button
          type="button"
          onClick={() => window.open("/aboutpage", "_self")}
          class=" mt-6 px-4 py-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 hover:duration-500 px "
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default AboutREC;
