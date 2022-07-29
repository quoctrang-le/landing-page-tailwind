import React from "react";

const VideoModal = () => {
  return (
    <div className="fixed w-screen h-screen bg-black opacity-70 top-0 left-0 flex justify-center items-center z-10">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yzycUfVwXi0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
