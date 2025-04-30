import React, { useState } from "react"; // 훅을 사용할 떄는 중괄호 필수!!
import "../../style/ScrollBtn.scss";

//scroll 이벤트가 발생된 scroll된 돔객체를 매개변수로 하겠다

const ScrollBtn = ({ scrollToRef, ctop }) => {
  const sd = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const st = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="sb downs" onClick={sd}>
        scroll down
      </div>
      {ctop && (
        <div className="sb tops" onClick={st}>
          top
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
