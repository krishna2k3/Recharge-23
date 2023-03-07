// import Img1 from './Images/23.jpg';
// import Img2 from './Images/2.jpg';
// import Img3 from './Images/3.jpg';
// import Img4 from './Images/4.jpg';
// import Img5 from './Images/5.jpg';
// import Img6 from './Images/6.jpg';
// import './gallery.css';
// const Gallery = ()=>{
//     let data =[
//         {
//             id: 1,
//             imgSrc: Img1,
//         },
//         {
//             id: 2,
//             imgSrc: Img2,
//         },
//         {
//             id: 3,
//             imgSrc: Img3,
//         },
//         {
//             id: 4,
//             imgSrc: Img4,
//         },
//         {
//             id: 5,
//             imgSrc: Img5,
//         },
//         {
//             id: 6,
//             imgSrc: Img6,
//         }

//     ]

//     return (
//         <div id="about" className="stretch-to-screen bg-[#06111f] text-white items-center">
//                 <p className='my-6 text-7xl'>Gallery</p>
//             <div className="gallery mb-6">
//                 {data.map((item, index)=>{
//                     return(
//                         <div className="pics mb-6" key={index}>
//                             <img src={item.imgSrc} alt="" style={{width: '100%'}} />
//                         </div>
//                     )
//                 })}
//             </div>

//          </div>
//     )
// }

// export default Gallery

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col text-white items-center px-5 py-10 "
      >
      <div class="main text-7xl mb-5">
        <span class="webdev text-left">GALLERY</span>
      </div>

      <div class="flex flex-col lg:flex-row pb-6 my-6">
        <div class="flex flex-col mb-0 basis-1/3">
        <img
            src={require("../../assets/gallery-imgs/andrea1.png")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Andrea Jeremiah"
          />
          
          
          <img
            src={require("../../assets/gallery-imgs/santhosh.jpg")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700 object-cover"
            alt="Santhosh Narayanan"
          />
        </div>

        <div className="flex flex-col lg:mx-3 mb-0 basis-1/3">
          <img
            src={require("../../assets/gallery-imgs/karthi.jpg")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700 object-cover"
            alt="Karthi"
          /> 

<img
            src={require("../../assets/gallery-imgs/dj.png")}
            className="w-100 shadow-lg  rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="DJ Goutham"
          />
          

        </div>

        <div className="flex flex-col mb-0 basis-1/3">
        <img
            src={require("../../assets/gallery-imgs/jagan.png")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Jagan"
          />

          <img
            src={require("../../assets/gallery-imgs/andrea3.png")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Andrea Jeremiah"
          />
          
        </div>
      </div>
    </div>
  );
};
export default Gallery;
