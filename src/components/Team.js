// import React,{useState, useEffect} from "react";
// import image1 from "../assets/image1.svg";
// import image2 from "../assets/image2.svg";
// import image3 from "../assets/image3.svg";
// import Hero from "./Hero";

// const Team = () => {
//   const [offsetY, setOffsetY] = useState(0);
  
//   // eslint-disable-next-line
//   const handleScroll = () => setOffsetY(window.pageYOffset);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <div className="relative w-full h-screen flex justify-center items-center pt-[400px]">
//         <img src={image1} className="absolute top-[50%] left-[35%] z-30"  style={{ transform: `translateY(-${offsetY * 0.2}px)` }}/>
//         <img src={image2} className="absolute z-20  left-[52%] top-[57%]" style={{ transform: `translateY(-${offsetY * 0.17}px)` }}/>
//         <img src={image3} className="absolute z-0  top-[40%]" />
//       </div>
//     </>
//   );
// };

// export default Team;
