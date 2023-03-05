import "./Proshow.css";

const ProShows = () => {
  return (
    <div id="proshows" className="flex flex-col  text-white items-center px-5 stretch-to-screen">
      <div class="main text-6xl md:7xl mb-5 ">
        <span class="webdev text-left">PROSHOWS</span>
      </div>
      <div class="proshow-cards">
        <div class="proshow-card relative">
          <img
            src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png"
            alt="Jonita"
          />
          <div className="proshow-card-content absolute">
            <p>Anonymous</p>
          </div>
        </div>
        <div class="proshow-card relative">
          <img
            src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png"
            alt="Mystery 1"
          />
          <div className="proshow-card-content absolute">
            <p>Anonymous</p>
          </div>
        </div>
        <div class="proshow-card relative">
          <img
            src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png"
            alt="Mystery 2"
          />
          <div className="proshow-card-content absolute">
            <p>Anonymous</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProShows;
