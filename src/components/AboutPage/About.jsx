import { useEffect } from "react";
const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-col stretch-to-screen text-white items-center "
    >
      <div class="mt-16 text-7xl lg:mt-16 main text-center">
        <span class="webdev">About REC</span>
      </div>
      <p className="mx-10 my-10 lg:my-16 lg:mx-52 text-lg text-white flex justify-center max-w-4xl text-center lg:text-left">
      Established in 1997, Rajalakshmi Engineering College (REC) is an autonomous institution affiliated with Anna University, Chennai, that produces top-notch professionals. REC has a student-centric approach, offering various student-run societies and clubs that organize hackathons, symposiums, seminars, workshops and provide a diverse range of programs to its 8000+ students. REC's students are true champions, earning accolades in a myriad of fields. Our intra-collegiate events offer students a break from engineering, creating unforgettable experiences. Mark your calendars for Recharge ’23, our electrifying national cultural fest. It showcases the incredible talents of students from all over the country, with jaw-dropping performances and show-stopping appearances that will leave you wanting more! These events not only provide students with a refreshing break from their academic routines, but also offer them an opportunity to interact with professionals from various fields, inspiring and motivating them to pursue their passions.
      </p>
    </div>
  );
};

export default About;
