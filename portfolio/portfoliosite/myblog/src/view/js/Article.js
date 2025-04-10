import { useState, useEffect } from "react";
import { faHtml5, faCss3Alt, faJs, faNode, faPython, faDocker, faSass, faReact } from "@fortawesome/free-brands-svg-icons";
import "../sass/Article.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faArrowUpRightFromSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Article = ({ day, changeDay }) => {
    const [activeNavs, setActiveNavs] = useState([true, true, true]);
    const [activeNavs2, setActiveNavs2] = useState([true, true, true]);

    const activateNav = (index) => {
        const updatedActiveNavs = [...activeNavs];
        updatedActiveNavs[index] = true;
        setActiveNavs(updatedActiveNavs);
    };
    const activateNav2 = (index) => {
        const updatedActiveNavs = [...activeNavs2];
        updatedActiveNavs[index] = true;
        setActiveNavs2(updatedActiveNavs);
    };
    /////엑스 버튼 누르면 다시 false 로 바꿔서 active 지우기
    const deactivateNav = (index) => {
        const updatedActiveNavs = [...activeNavs];
        updatedActiveNavs[index] = false;
        setActiveNavs(updatedActiveNavs);
    };
    const deactivateNav2 = (index) => {
        const updatedActiveNavs = [...activeNavs2];
        updatedActiveNavs[index] = false;
        setActiveNavs2(updatedActiveNavs);
    };
    // const portfolioList = ["Matrix_Calculator", "Calculator", "Music_Player", "Cinema_Kiosk", "냉장고를 야금야금"];
    // const portfolioObj = {
    //     "Matrix_Calculator" : {  name : "Matrix_Calculator" , madeBy : "alone" , link : "" },
    //     "Calculator" : {name : "Calculator" , madeBy : "alone" , link : "" },
    //     "Music_Player" : {name : "Music_Player" , madeBy : "alone" , link : "" },
    //     "Cinema_Kiosk" :  {name : "Cinema_Kiosk" , madeBy : "team" , link : "" },
    //     "냉장고를 야금야금" :  {name : "냉장고를 야금야금" , madeBy : "team" , link : "" },
    // }
    const skillData = {
        front: [
            { skill: "Html", color: "#E34F26", image: "/img/logo/html_logo.png", text: "의 시맨틱 태그를 활용하여 \n 웹의 구조화 작업을 할 수 있습니다." },
            { skill: "Css", color: "#1572B6", image: "/img/logo/css_logo.png", text: "를 사용하여 반응형 디자인과 애니메이션을 \n 구현할 수 있습니다." },
            { skill: "Sass", color: "#CC6699", image: "/img/logo/sass_logo.png", text: "를 활용하여 CSS를 더욱 효율적으로 관리하고,\n 유지보수하기 쉽게 설계할 수 있습니다." },
            { skill: "Javascript", color: "#C7A000", image: "/img/logo/javascript_logo.png", text: "를 사용하여 동적인 웹사이트를 개발하고,\n 이벤트 처리 및 비동기 통신을 구현할 수 있습니다." },
            { skill: "Typescript", color: "#3178C6", image: "/img/logo/typescript_logo.png", text: "를 사용하여 정적 타입을 적용하고,\n 안정적인 프론트엔드 개발을 할 수 있습니다." },
            { skill: "React", color: "#61DAFB", image: "/img/logo/react_logo.png", text: "를 활용하여 컴포넌트 기반의 인터페이스를  만들고,\n 상태 관리를 효율적으로 처리할 수 있습니다." }
        ],
        back: [
            { skill: "Python", color: "#3776AB", image: "/img/logo/python_logo.png", text: "을 활용하여 데이터 처리,\n 웹 개발 및 자동화 작업을 수행할 수 있습니다." },
            { skill: "Django", color: "#092E20", image: "/img/logo/django_logo.png", text: "를 사용하여 Python 기반 웹 애플리케이션을\n 빠르고 효율적으로 개발할 수 있습니다." },
            { skill: "Nodejs", color: "#339933", image: "/img/logo/node_logo.png", text: "를 활용하여 서버를 구축하고,\n RESTful API를 개발할 수 있습니다." },
            { skill: "Express", color: "#000000", image: "/img/logo/express_logo.png", text: "를 활용하여 가볍고 빠른\n 백엔드 서비스를 개발할 수 있습니다." },
            { skill: "SQL", color: "#4479A1", image: "/img/logo/mysql_logo.png", text: "을 사용하여 데이터베이스를 설계하고,\n 효율적인 쿼리문을 작성할 수 있습니다." },
            { skill: "Docker", color: "#2496ED", icon: faDocker, text: "를 사용하여 컨테이너 환경을 구성하고,\n 애플리케이션을 효율적으로 배포 및 관리할 수 있습니다." },
            { skill: "java", color: "#2496ED", image: "/img/logo/java_logo.png", text: "를 사용하여 컨테이너 환경을 구성하고,\n 애플리케이션을 효율적으로 배포 및 관리할 수 있습니다." },
            { skill: "Spring", color: "#2496ED", image: "/img/logo/spring_logo.png", text: "를 사용하여 컨테이너 환경을 구성하고,\n 애플리케이션을 효율적으로 배포 및 관리할 수 있습니다." }
        ]
    };

    // `usedSkill` 값을 skillData에서 찾기,,
    function getSkillObjects(usedSkill) {
        if (typeof usedSkill === "string") {
            usedSkill = usedSkill.split(",").map(skill => skill.trim());
        }
        return usedSkill.map(skill => {
            return (
                skillData.front.find(s => s.skill.toLowerCase() === skill.toLowerCase()) ||
                skillData.back.find(s => s.skill.toLowerCase() === skill.toLowerCase()) ||
                { skill, text: "정보 없음" }
            );
        });
    }

    const portfolioObjMadeByMe = {
        data: [
            {
                name: "Matrix_Calculator",
                madeBy: "alone",
                link: "http://kkms4001.iptime.org/~c20st17/portfolio/Matrix_Calculator/MatrixCalculator.html",
                video: "/video/Matrix.gif",
                text: <p>처음으로 진행한 프로젝트인 행렬 계산기입니다.<br />이를 통해 HTML의 시맨틱 태그 활용 방법,<br />CSS의 transform 사용법,<br />JavaScript의 기본 문법과 이벤트 작동 원리를 <br />이해하게 되었습니다.</p>,
                pdf: "/pdf/Matrix.pdf",
                date: "2024.07.18~2024.07.30",
                usedSkill: getSkillObjects(["Html", "Css", "Javascript"]),
            },
            {
                name: "Calculator",
                madeBy: "alone",
                link: "http://kkms4001.iptime.org/~c20st17/portfolio/Calculator/Calculator.html",
                video: "/video/Calculator.gif",
                text: <p>계산기와 그래프를 그리는 프로그램입니다.<br />처음으로 JavaScript의 클래스 문법을 사용하여<br />개발하였습니다.<br />이를 통해 클래스 문법의 개념과 활용법을 익혔습니다.</p>,
                pdf: "/pdf/CALCULATOR.pdf",
                date: "2024.08.21~2024.08.30",
                usedSkill: getSkillObjects(["Html", "Css", "Javascript"])
            },
            {
                name: "Music_Player",
                madeBy: "alone",
                link: "http://kkms4001.iptime.org:45170/",
                video: "/video/Music_player.gif",
                text: <p>음악을 재생할 수 있는 음악 플레이어<br /> 웹 애플리케이션입니다.<br />이를 통해 백엔드 개념을 익히고, MySQL을 활용한<br />데이터베이스 CRUD 작업을 학습하였습니다.<br />또한, 프론트엔드와 백엔드의 전체적인 흐름을 <br />더 깊이 이해할 수 있게 되었습니다.</p>,
                pdf: "/pdf/musicPlayer.pdf",
                date: "2024.12.01~2024.12.10",
                usedSkill: getSkillObjects(["Html", "Css", "Javascript", "Nodejs", "Express", "SQL"])
            },
        ]
    }

    const portfolioObjMadeByTeam = {
        data: [
            {
                name: "Cinema_Kiosk",
                madeBy: "team",
                link: "http://kkms4001.iptime.org:45120/",
                video: "/video/kiosk.gif",
                text: <p>영화관 키오스크 프로그램입니다.<br />프론트엔드 개발을 담당하였으며, 대형 프로젝트에서<br /> 기획 방향을 설정하는 방법과 사용자 <br />친화적인 UI/UX를 설계하는 방법을 배웠습니다.</p>,
                pdf: "/pdf/Cinema_Kiosk.pdf",
                date: "2024.10.01~2024.10.31",
                usedSkill: getSkillObjects(["Html", "Css", "Javascript", "Nodejs", "Express", "SQL"])
            },
            {
                name: "냉장고를 야금야금",
                madeBy: "team",
                link: "http://kkms4001.iptime.org:45210/",
                video: "/video/fridge.gif",
                text: <p>냉장고 속 재료를 활용하여 음식을 추천하는 <br />웹 애플리케이션입니다. <br />이 프로젝트를 통해 Django를 활용한<br /> 웹 구현 방법을 익히고, React의 Hooks 활용법을<br /> 숙지하였습니다. 또한, Django 서버와 React 서버를<br /> 연결하는 과정을 학습했습니다.</p>,
                pdf: "/pdf/fridge.pdf",
                date: "2024.11.04~2024.11.18",
                usedSkill: getSkillObjects(["React", "Css", "Nodejs", "Django", "SQL"])
            },
            {
                name: "안전신호등",
                madeBy: "team",
                link: "http://kkms4001.iptime.org:21052/",
                video: "/video/SafetyTrafficLights.gif",
                text: <p>서울, 경기, 인천 지역의 범죄, 사고, 날씨 현황을 확인할 수 있는 웹 애플리케이션입니다.<br />
                    이 프로젝트에서 범죄 페이지를 담당하여 공공 API에서 제공하는 JSON 데이터를 받아 그래프로 시각화하였습니다.<br />
                    이 과정에서 JSON 데이터 파싱과 D3.js를 활용한 시각화 기법을 숙지하였습니다.</p>,
                pdf: "/pdf/SafetyTrafficLights.pdf",
                date: "2025.02.13~2025.03.03",
                usedSkill: getSkillObjects(["Html", "Css", "Javascript", "Nodejs", "Express", "SQL", "React",])
            },
        ]
    }
    return (
        <article id="portfolioArea" className={`portfolioArea ${day ? "" : "night"}`}>
            <div className="madeByMyselfArea">
                <div className={`personalInfo`}>
                    Personal Portfolio
                </div>
                <div className="navArea" id="navArea">
                    {activeNavs.map((isActive, index) => (
                        <div
                            //  isActive 가 true 아니면 false 인데 true 면 active , 아니면 클래스네임 안넣기!
                            className={`navigation nav${index + 2} ${isActive ? 'active' : ''} ${day ? "" : "night"}`}
                            id={`navigation${index}`}
                            key={`nav${index}`}
                            onClick={() => activateNav(index)}
                        >
                            {isActive && (
                                <span className={`textInfo2 ${day ? "" : "night"}`}>
                                    {portfolioObjMadeByMe.data[index] ? portfolioObjMadeByMe.data[index].name : ""}
                                </span>
                            )}
                            {/* 엑티브 상태면 엑스버튼 활성화 하기! */}
                            {isActive && (
                                <span
                                    className="xbutton"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deactivateNav(index);
                                    }}
                                    style={{ transition: "0.5s" }}
                                >
                                    <FontAwesomeIcon icon={faSquareXmark} />
                                </span>
                            )}
                            {/* 프로젝트 사진 이미지 넣기 */}
                            {isActive && (
                                <div className="boxselectArea">
                                    <div
                                        className={`miniBox ${day ? "" : "night"}`}
                                        id={`miniBox${index}`}
                                        key={`miniBox${index}`}
                                    >
                                        <img
                                            className="videoBox"
                                            src={portfolioObjMadeByMe.data[index] ? portfolioObjMadeByMe.data[index].video : ""}
                                        ></img>
                                        <p className="resultTextAreaIcon">
                                            {portfolioObjMadeByMe.data[index].usedSkill?.map((skill, idx) => {
                                                return skill.icon ? (
                                                    <FontAwesomeIcon key={idx} icon={skill.icon} style={{ color: skill.color }} />
                                                ) : (
                                                    <img key={idx} src={skill.image} alt={skill.skill} className="iconImgSmall" />
                                                );
                                            })}
                                        </p>
                                    </div>
                                    {/* 프로젝트 내용 넣는 곳 */}
                                    <div
                                        className={`resultBox ${day ? "" : "night"}`}
                                        id={`resultBox${index}`}
                                        key={`resultBox${index}`}
                                    >
                                        {/* <p className="resultTextArea"> */}
                                        {/* {portfolioObjMadeByMe.data[index] ? portfolioObjMadeByMe.data[index].date : ""} */}
                                        {/* </p> */}
                                        <p className="resultTextArea">
                                            {portfolioObjMadeByMe.data[index] ? portfolioObjMadeByMe.data[index].text : ""}
                                        </p>

                                    </div>
                                    <div className="linkAndPdf">
                                        <a
                                            className={`${day ? "" : "night"} linkArea`}
                                            href={portfolioObjMadeByMe.data[index].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="siteIcon" />
                                            SITE

                                        </a>
                                        <a
                                            className={`${day ? "" : "night"} linkArea`}
                                            href={portfolioObjMadeByMe.data[index].pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faFilePdf} className="siteIcon" />
                                            PDF

                                        </a>
                                    </div>
                                </div>

                            )}
                            {/* 작을때 프로젝트 이름 나오게 하는 곳 */}
                            {!isActive && (
                                <span className={`textInfo ${day ? "" : "night"}`}>
                                    {portfolioObjMadeByMe.data[index] ? portfolioObjMadeByMe.data[index].name : ""}
                                </span>
                            )}
                        </div>

                    ))}

                </div>
            </div>
            <div className="madeByTeam">
                <div className={`teamInfo`}>
                    Team Portfolio
                </div>
                <div className="navArea" id="navArea">
                    {activeNavs2.map((isActive, index) => (
                        <div
                            //  isActive 가 true 아니면 false 인데 true 면 active , 아니면 클래스네임 안넣기!
                            className={`navigation nav${index + 2} ${isActive ? 'active' : ''} ${day ? "" : "night"}`}
                            id={`navigation2${index}`}
                            key={`nav2${index}`}
                            onClick={() => activateNav2(index)}
                        >
                            {isActive && (
                                <span className={`textInfo2 ${day ? "" : "night"}`}>
                                    {portfolioObjMadeByTeam.data[index] ? portfolioObjMadeByTeam.data[index].name : ""}
                                </span>
                            )}
                            {/* 엑티브 상태면 엑스버튼 활성화 하기! */}
                            {isActive && (
                                <span
                                    className="xbutton"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deactivateNav2(index);
                                    }}
                                    style={{ transition: "0.5s" }}
                                >
                                    <FontAwesomeIcon icon={faSquareXmark} />
                                </span>
                            )}
                            {/* 프로젝트 비디오 넣는 곳 */}
                            {isActive && (


                                <div className="boxselectArea">

                                    <div
                                        className={`miniBox ${day ? "" : "night"}`}
                                        id={`miniBox2${index}`}
                                        key={`miniBox${index}`}
                                    >
                                        <img
                                            className="videoBox"
                                            src={portfolioObjMadeByTeam.data[index] ? portfolioObjMadeByTeam.data[index].video : ""}
                                        ></img>
                                        <p className="resultTextAreaIcon">
                                            {portfolioObjMadeByTeam.data[index].usedSkill?.map((skill, idx) => {
                                                return skill.icon ? (
                                                    <FontAwesomeIcon key={idx} icon={skill.icon} style={{ color: skill.color }} />
                                                ) : (
                                                    <img key={idx} src={skill.image} alt={skill.skill} className="iconImgSmall" />
                                                );
                                            })}
                                        </p>
                                    </div>
                                    {/* 프로젝트 내용 넣는 곳 */}
                                    <div
                                        className={`resultBox ${day ? "" : "night"}`}
                                        id={`resultBox2${index}`}
                                        key={`resultBox2${index}`}
                                    >
                                        {/* <p className="resultTextArea">
                                        {portfolioObjMadeByTeam.data[index] ? portfolioObjMadeByTeam.data[index].date : ""}
                                    </p> */}
                                        <p className="resultTextArea">
                                            {portfolioObjMadeByTeam.data[index] ? portfolioObjMadeByTeam.data[index].text : ""}
                                        </p>
                                    </div>
                                    <div className="linkAndPdf">
                                        <a
                                            className={`${day ? "" : "night"} linkArea`}
                                            href={portfolioObjMadeByTeam.data[index].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="siteIcon" />
                                            SITE
                                        </a>
                                        <a
                                            className={`${day ? "" : "night"} linkArea`}
                                            href={portfolioObjMadeByTeam.data[index].pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faFilePdf} className="siteIcon" />
                                            PDF
                                        </a>
                                    </div>
                                </div>
                            )}
                            {!isActive && (
                                <span className={`textInfo ${day ? "" : "night"}`}>
                                    {portfolioObjMadeByTeam.data[index] ? portfolioObjMadeByTeam.data[index].name : ""}
                                </span>
                            )}
                        </div>

                    ))}
                </div>
            </div>
            <div className={`dayNight ${day ? "" : "night"}`} onClick={changeDay}>
                <span className={`dayIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faMoon} /></span>
                <span className={`nightIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faSun} /></span>
            </div>
        </article>
    );
}

export default Article;