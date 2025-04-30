import React, { useState } from "react";
import "../../style/Section2.scss";

const Section2 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const moveFile = ["car1.mp4", "car2.mp4", "car3.mp4"];

  return (
    <div className="s2">
      <div className="text-area">
        <h2>Explore the collection</h2>
        <p>
          Hover over the videos to focus on on. Let your curiosity guide you.
        </p>
      </div>
      <div className="video-area">
        {moveFile.map((item, index) => (
          <div
            className={`vbox ${hoverIndex === index ? "active" : "noActive"}`}
            key={index}
            onMouseEnter={() => setHoverIndex(index)} // 마우스 들어오면~
            onMouseLeave={() => setHoverIndex(null)} // 마우스 빠져 나가면~
          >
            <video
              src={`/movefile/${item}`}
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
