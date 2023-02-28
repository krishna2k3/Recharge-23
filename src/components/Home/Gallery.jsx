import Img1 from './Images/23.jpg';
import Img2 from './Images/2.jpg';
import Img3 from './Images/3.jpg';
import Img4 from './Images/4.jpg';
import Img5 from './Images/5.jpg';
import Img6 from './Images/6.jpg';
import './gallery.css';
const Gallery = ()=>{
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        }

    ]
    
    return (
        <div id="about" className="stretch-to-screen bg-[#06111f] text-white items-center">
                <p className='my-6 text-7xl'>Gallery</p>
            <div className="gallery mb-6">
                {data.map((item, index)=>{
                    return(
                        <div className="pics mb-6" key={index}>
                            <img src={item.imgSrc} alt="" style={{width: '100%'}} />
                        </div>
                    )
                })}
            </div>

         </div>
    )
}

export default Gallery