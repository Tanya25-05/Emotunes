import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoRecorder = () => {
  const webcamRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    // Start recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Stop recording logic here
  };

  return (
    <div className="w-full h-full">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        height="100%"
      />
      <div className="absolute top-0 right-0 p-4">
        {isRecording ? (
          <button onClick={stopRecording} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Stop Recording
          </button>
        ) : (
          <button onClick={startRecording} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
