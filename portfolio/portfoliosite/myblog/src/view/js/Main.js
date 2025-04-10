import React, { useEffect, useState } from "react";
import "../sass/Main.scss";
import TypingEffect from './TypingEffect';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faArrowPointer } from "@fortawesome/free-solid-svg-icons";
// 안녕하세요!
// 제 이름은 이정임 입니다! 😊
// <br></br>
// 고향은 경기도 수원입니다. 현재는 안산에 거주하고 있어요.🏠
// <br></br>
// 저는 어렸을때 부터 이곳저곳으로 이사도 많이 하고
// 해외여행도 정말 많이 다녔어요. ✈️
// <br></br>
// 그래서 저는 어디를 가든지 적응을 참 잘한다는 큰 장점을 가지고 있어요. 👍
// <img src="/img/cut/cut1.png" className="cut"></img>
// <br></br>
// 현재 학원에서 개발자 과정을 듣고 있어요. 🖥️
// <br></br>
// 수업을 들으면서 문제에 부딪힐때 마다 그것을 해결하면서 느끼는 희열감을 느꼈어요. 😁
// <br></br>
// 그래서 저는 앞으로 제가 할 수 있는 최선을 다해서 문제를 풀어나갈 거예요. 🤗
// <br></br>
// 저의 꿈은 앞으로도 평생 문제에 부딪히고 해결해 가면서 성취감을 느끼는 개발자가 되는 것이에요! 🤔
// <br></br>
// 이제는 제 꿈을 이룰 시간인 것 같아요. ⭐
const Main = ({ day, changeDay }) => {
    const introduceMySelf = <div className="cutArea">
        <img src="/img/cut/cut1.png" className="cut"></img>
        <img src="/img/cut/cut2.png" className="cut"></img>
        <img src="/img/cut/cut3.png" className="cut"></img>
        <img src="/img/cut/cut4.png" className="cut"></img>
    </div>
        ;
    const [disPalyP, setDisplayP] = useState(false)
    const [move, setMove] = useState(true)
    const [mobile, setMobile] = useState(false)

    const displayPTag = () => {
        setDisplayP(!disPalyP);
        setMove(!move);
        setMobile(!mobile);
    }

    return (
        <main id="homeArea" className={`banner ${day ? "" : "night"}`}>
            <div className="content">
                <div className={`textInfoBox`}>
                    <div className={`textBox`}>
                        {/* <h3 className={`${day ? "" : "night"}`}>hello,</h3> */}
                        <h2 className={`${day ? "" : "night"}`}>I am <span id="text"><TypingEffect /></span></h2>
                        <FontAwesomeIcon icon={faArrowPointer} className={`mouseClick ${day ? "" : "night"}`} />
                        <div className="btnArea">
                            <button className={`${day ? "" : "night"} ${move ? "" : "stopMove"} `} onClick={() => { displayPTag() }}>제 소개를 간단하게 해도 될까요?</button>
                        </div>
                        <p className={`${disPalyP ? "displayP" : ""} ${day ? "" : "night"} `}>
                            {introduceMySelf}
                        </p>
                    </div>
                </div>
                <div className={`dayNight ${day ? "" : "night"}`} onClick={changeDay}>
                    <span className={`dayIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faMoon} /></span>
                    <span className={`nightIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faSun} /></span>
                </div>
                <div className={`imgArea ${mobile ? "mobile" : ""}`}>
                    <img src={"/img/cloud.png"} onDragStart={(e) => e.preventDefault()}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            pointerEvents: "none",
                            cursor: "default"
                        }} className="colors" alt="cloud" />
                    <img src={"/img/cloud2.png"} onDragStart={(e) => e.preventDefault()}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            pointerEvents: "none",
                            cursor: "default"
                        }} className="colors2" alt="cloud2" />
                    <img src={"/img/me.png"} onDragStart={(e) => e.preventDefault()}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            pointerEvents: "none",
                            cursor: "default"
                        }}
                        className="myPic" alt="me" />
                </div>
            </div>
        </main>
    );
}

export default Main;