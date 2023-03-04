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
      className="stretch-to-screen bg-black text-white items-center px-10 lg:px-40 py-10"
    >
      <p className="text-7xl font-extrabold shadow-inner">Gallery</p>
      <hr className=" border-2 w-20 my-4 ml-2 border-red-500"></hr>
      <hr className="w-20 my-4 border-2 ml-8 border-red-500 "></hr>
      <div class="flex flex-col lg:flex-row pb-6 my-6">
        <div class="flex flex-col mb-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-lg rounded mb-4 hover:opacity-75 duration-700"
            alt="Boat on Calm Water"
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
            className="w-100 shadow-lg  rounded mb-4 hover:opacity-75 duration-700"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="flex flex-col lg:mx-3 mb-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
            className="w-100 shadow-lg rounded mb-4 hover:opacity-75 duration-700"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-lg rounded mb-4 hover:opacity-75 duration-700"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="flex flex-col mb-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            className="w-100 shadow-lg rounded mb-4 hover:opacity-75 duration-700"
            alt="Waves at Sea"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            className="w-100 shadow-lg rounded mb-4 hover:opacity-75 duration-700"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
