// src/components/Homepage.js
import React, { useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import VideoRecorder from "./VideoRecord";

const Home = () => {
  // const webcamRef = React.useRef(null);
  // const [imageSrc, setImageSrc] = useState(null);
  // const [musicRecommendations, setMusicRecommendations] = useState([]);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImageSrc(imageSrc);
  //   fetchMusicRecommendations(imageSrc);
  // }, [webcamRef]);

  const fetchMusicRecommendations = async (imageSrc) => {
    // Call your music recommendation API here
    try {
      const response = await axios.post("http://localhost:3000/home", {
        imageSrc,
      });
      setMusicRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching music recommendations:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white mt-5 ">
        <h1 className="text-4xl font-bold mb-8">
          Camera Music Recommendations
        </h1>
        <div className="border border-gray-300 rounded p-4">
            <VideoRecorder/>
        </div>
        <button
          onClick={capture}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Capture Image
        </button>
        {imageSrc && (
          <div className="mt-8">
            <img src={imageSrc} alt="Captured" className="rounded-lg" />
          </div>
        )}
        {musicRecommendations.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Music Recommendations:</h2>
            <ul>
              {musicRecommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// import "./home.scss";
// // import Navbar from "../../navbar/Navbar";
// // import Feature from "../../components/Featured/Featured";
// // import List from "../../components/list/List";
// import React from "react";
// // import axios from "axios";
// import {  useState } from "react";

// const Home = ({ type }) => {
//   const [lists, setList] = useState([]);
//   const [genre, setgenre] = useState(null);

// //   useEffect(() => {
// //     const RandomList = async () => {
// //       try {
// //         const res = await axios.get(
// //           `lists${type ? "?type=" + type : ""}${
// //             genre ? "&genre=" + genre : ""
// //           }`,
// //           {
// //             headers: {
// //               token:
// //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTUwODNhNGY5YmZmMjlmZDQ1OTYzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjAyNzMxOSwiZXhwIjoxNjY2NDU5MzE5fQ.KpA3oztbVS928Q-xSELgcLtyPNKgUQ6i2xY0gVa90UE",
// //             },
// //           }
// //         );
// //         // console.log(res);
// //         setList(res.data);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     RandomList();
// //   }, [type, genre]);

//   return (
//     <>
//       <div className="home">
//         {/* <Navbar /> */}
//         <h1>This is our home page</h1>
//         {/* <Feature type={type} />
//         {lists.map((list, index) => (
//           <List key={index.toString()} list={list} />
//         ))}
//         <footer>All the rights are reserved ©️</footer> */}
//       </div>
//     </>
//   );
// };

// export default Home;
