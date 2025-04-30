import React, { useRef } from "react";
import "../../style/Section1.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 자동으로 넘어가는 모듈
import "swiper/css";

const Section1 = () => {
  const moveFile = ["car2.mp4", "car3.mp4", "car5.mp4"];
  const subTitle = useRef(null);
  const clickSubTitle = () => {
    if (subTitle.current.style.display === "none") {
      subTitle.current.style.display = "block";
      subTitle.current.scrollIntoView({ behavior: "smooth" }); // scrollIntiView 스크롤 해서 보이도록 하는 것
    } else {
      subTitle.current.style.display = "none";
    }
  };
  return (
    <div className="s1">
      <Swiper
        className="videoS"
        modules={[Autoplay]}
        loop
        Autoplay={{ delay: 4000 }}
      >
        {/* 왔다갔다 하는 스와이퍼 기본 형식에서 조금 추가해서 만들기 */}
        {moveFile.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="videodiv">
              <video
                src={`/movefile/${item}`}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-area">
        <h1 onClick={clickSubTitle}>welcome to Our Site</h1>
        <h3 ref={subTitle} style={{ display: "none" }}>
          have a nice day
        </h3>
      </div>
    </div>
  );
};

export default Section1;
