import '../../Common/neonfont.css';
import './Proshow.css';

const ProShows = () => {
    return (
        <div id="proshows" className="stretch-to-screen  text-white items-center px-10 lg:px-40 py-20">
            <div class="main text-6xl md:7xl mb-10">
                <span class="webdev text-left">PROSHOWS</span>
            </div>
            <div class="proshow-cards">
                <div class="proshow-card relative">
                    <img src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png" alt="Random Image" />
                    <div className="proshow-card-content absolute">
                        <p>Anonymous</p>
                    </div>
                </div>
                <div class="proshow-card relative">
                    <img src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png" alt="Random Image" />
                    <div className="proshow-card-content absolute">
                        <p>Anonymous</p>
                    </div>
                </div>
                <div class="proshow-card relative">
                    <img src="http://content.wcsh6.com/photo/2017/09/26/unknown%20suspect_1506420048586_11238702_ver1.0.png" alt="Random Image" />
                    <div className="proshow-card-content absolute">
                        <p>Anonymous</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProShows