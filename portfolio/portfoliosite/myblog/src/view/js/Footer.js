import "../sass/Footer.scss"
import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faPhone, faEnvelope, faLaptopCode, faA, faLanguage } from "@fortawesome/free-solid-svg-icons";
// import { faHtml5, faCss3Alt, faJs, faNode, faPython, faDocker, faSass, faReact ,faJava } from "@fortawesome/free-brands-svg-icons";

// import { SiTypescript } from "react-icons/si";
function Footer({ day, changeDay }) {
    // 상단에 있는 깃발 요소 넣는 data
    const myLife = {
        data: [
            {
                title: "china",
                text: "중국에서 취업 경험",
                date: "2021.09 ~ 2023.01",
                img: "/img/china.png",
                myPicLink: "/img/inchina.png",
                detail: "<br>전공인 중국어과를 살려 상하이에 있는 무역 회사에서 근무한 경험이 있습니다.<br> 중국어 회화 및 문서 작성 등에 문제가 없이 소통 가능합니다!"
            },
            {
                title: "germany",
                text: "독일에서 워킹홀리데이",
                date: "2023.07 ~ 2024.03",
                img: "/img/germany.png",
                myPicLink: "/img/ingermany.png",
                detail: "<br>더 넓은 세상을 보고 새로운 언어를 배우고 싶은 마음에 독일로 워킹홀리데이를 다녀왔습니다.<br> 독일어는 간단한 일상 대화가 가능한 수준이며, 주로 영어를 사용했기 때문에 영어 회화 실력이 많이 늘었던 좋은 경험이었습니다!"
            },
            {
                title: "study1",
                text: "Python 과정 공부",
                date: "2024.05 ~ 2024.12",
                img: "/img/python.png",
                myPicLink: "/img/study.png",
                detail: "<br>AI 기반 챗봇(GPT)을 활용한 웹 개발(Python) 전문가 양성 과정에 참여하였습니다.<br> Python을 이용한 웹 개발과 Front-end 및 Back-end 간 데이터 송수신에 대한 이해와 능력을 갖추고 있습니다!"
            },
            {
                title: "study2",
                text: "Node.js 과정 진행 중",
                date: "2024.12 ~ ",
                img: "/img/node.png",
                myPicLink: null,
                detail: "<br>현재 Node.js 기반 Open API를 활용한 응용 소프트웨어 개발자 양성 과정을 수강하고 있습니다.<br> Node.js를 활용한 웹 서비스 구현 능력을 갖추고 있습니다!"
            }
        ]
    };
    // const [myPic, setMyPic] = useState(true);
    const [picOk, setPicOk] = useState(true);
    // 소개 글 넣는 박스 데이터 
    const introduceInfo = {
        data: [
            { title: "Skills" },
            { title: "Certifications" },
            { title: "Contact" },
        ]
    }

    const [detailOfFlag, setDetailOfFlag] = useState(myLife.data[0].date + myLife.data[0].detail);
    const [isSkill, setIsSkill] = useState(false);
    // 깃발 모션 넣는 클래스 토글
    const flagIn = (Id, index) => {
        setPicOk(true)
        setSkillBox([]);
        if (!isSkill) {
            document.getElementById(Id).classList.toggle("show");
        }
        let addData = [myLife.data[index].date + myLife.data[index].detail];
        setDetailOfFlag(...addData);
        console.log(picOk)
        setIsSkill(false);
    }
    const [backgroundImg, setBackgroundImg] = useState(false)
    const showPics = (Id) => {
        setPicOk(true)
        setSkillBox([]);
        if (picOk && Id !== `myPics3` && !isSkill) {
            document.getElementById(Id).classList.toggle("show");
        }
        if (Id === `myPics3` && !isSkill) {
            setBackgroundImg(!backgroundImg);
        }
        setIsSkill(false);
    }

    const [skillBox, setSkillBox] = useState([]);
    const showSkills = (key) => {
        // setMyPic(null);
        setPicOk(false);
        setIsSkill(true);
        switch (key) {
            case "Skills":
                setSkillBox([]);
                const skillData = {
                    language: [
                        {
                            skill: "Javascript",
                            image: "/img/logo/javascript_logo.png",
                            text: "의 ES6+ 문법을 활용하여 HTML 요소를 동적으로\n 조작하고, 비동기 통신과 이벤트 처리를 구현할 수 있습니다."
                        },
                        {
                            skill: "Typescript",
                            image: "/img/logo/typescript_logo.png",
                            text: "를 활용하여 타입 안정성이 보장되는 \n 컴포넌트를 개발할 수 있습니다."
                        },
                        {
                            skill: "Python",
                            image: "/img/logo/python_logo.png",
                            text: "을 활용하여 다양한 백엔드"
                        },
                        {
                            skill: "java",
                            image: "/img/logo/java_logo.png",
                            text: "을 활용하여 다양한 백엔드"
                        },
                    ],
                    front: [
                        {
                            skill: "Html",
                            image: "/img/logo/html_logo.png",
                            text: "의 시맨틱 태그를 이해하고 활용하여\n 웹 접근성이 준수된 마크업을 구현할 수 있습니다."
                        },
                        {
                            skill: "Css",
                            image: "/img/logo/css_logo.png",
                            text: "를 사용하여 미디어쿼리를 활용한\n 반응형 웹과 Keyframe 기반 애니메이션을 구현할 수 있습니다."
                        },
                        {
                            skill: "Sass",
                            image: "/img/logo/sass_logo.png",
                            text: "의 믹스인과 변수를 활용하여 중복 코드를 줄이고,\n 빠른 스타일 작업을 할 수 있습니다."
                        },
                        {
                            skill: "pug",
                            image: "/img/logo/pug.png",
                            text: "을 활용하여 html을 더 간결하고 빠르게 \n 작성하는 능력을 가지고 있습니다."
                        },
                        {
                            skill: "React",
                            image: "/img/logo/react_logo.png",
                            text: "의 Hook을 활용하여\n 상태관리와 최적화된 SPA를 개발할 수 있습니다."
                        },
                    ],
                    back: [
                        {
                            skill: "Django",
                            image: "/img/logo/django_logo.png",
                            text: "를 활용하여 데이터베이스 쿼리문을 작성하고, 데이터를 조회 및 관리할 수 있으며, RESTful API 기반의 백엔드 시스템을 구축할 수 있습니다."
                        },
                        {
                            skill: "Nodejs",
                            image: "/img/logo/node_logo.png",
                            text: "를 활용하여 파일 시스템, HTTP 요청 처리, 데이터베이스와의 연결을 할 수 있습니다."
                        },
                        {
                            skill: "Express",
                            image: "/img/logo/express_logo.png",
                            text: "의 라우팅 기능을 활용하여 다양한 요청을 처리하고, Database와 연동하여 데이터 조회 및 저장 기능을 구현할 수 있습니다."
                        },
                        {
                            skill: "SQL",
                            image: "/img/logo/mysql_logo.png",
                            text: "의 조인과 서브쿼리를 활용하여 정규화된 데이터베이스를 설계하고,\n 인덱스 최적화된 쿼리를 작성할 수 있습니다."
                        },
                        {
                            skill: "Spring",
                            image: "/img/logo/spring_logo.png",
                            text: "의 멀티 스테이지 빌드와 Docker Compose를 활용하여\n 마이크로서비스 아키텍처를 구축하고 배포할 수 있습니다."
                        }
                    ],
                    dev_tools: [
                        {
                            skill: "gitHub",
                            image: "/img/logo/github_logo.png",
                            text: "의 멀티 스테이지 빌드와 Docker Compose를 활용하여\n 마이크로서비스 아키텍처를 구축하고 배포할 수 있습니다."
                        },
                        {
                            skill: "Docker",
                            image: "/img/logo/docker_logo.png",
                            text: "의 멀티 스테이지 빌드와 Docker Compose를 활용하여\n 마이크로서비스 아키텍처를 구축하고 배포할 수 있습니다."
                        },
                        {
                            skill: "vim",
                            image: "/img/logo/vim_logo.png",
                            text: "의 멀티 스테이지 빌드와 Docker Compose를 활용하여\n 마이크로서비스 아키텍처를 구축하고 배포할 수 있습니다."
                        },
                    ]
                };
                setTimeout(() => {
                    setSkillBox([
                        <div className="showSkillsBox showLanguage">
                            <p className="FAndB">Language</p>
                            {skillData.language.map((v, i) => (
                                <div key={`skillsBox${i}`} className={`skillsInfoBox ${day ? "" : "night"}`}>
                                    <div className="iconArea">
                                        <span className={`icon ${day ? "" : "night"}`} style={{ color: v.color }}>
                                            <img src={v.image} alt={v.skill} className="iconImgSkill"
                                                style={{
                                                    userDrag: "none",
                                                    WebkitUserDrag: "none",
                                                    pointerEvents: "none",
                                                    cursor: "default"
                                                }} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>,
                        <div className="showSkillsBox showFront">
                            <p className="FAndB">Front-End</p>
                            {skillData.front.map((v, i) => (
                                <div key={`skillsBox${i}`} className={`skillsInfoBox ${day ? "" : "night"}`}>
                                    <div className="iconArea">
                                        <span className={`icon ${day ? "" : "night"}`} style={{ color: v.color }}>
                                            <img src={v.image} alt={v.skill} className="iconImgSkill"
                                                style={{
                                                    userDrag: "none",
                                                    WebkitUserDrag: "none",
                                                    pointerEvents: "none",
                                                    cursor: "default"
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>,
                        <div className="showSkillsBox showBack">
                            <p className="FAndB">Back-End</p>
                            {skillData.back.map((v, i) => {
                                return (
                                    <div key={`skillsBox${i}`} className={`skillsInfoBox ${day ? "" : "night"}`}>
                                        <div className="iconArea">
                                            <span className={`icon ${day ? "" : "night"}`} style={{ color: v.color }}>
                                                <img src={v.image} alt={v.skill} className="iconImgSkill"
                                                    style={{
                                                        userDrag: "none",
                                                        WebkitUserDrag: "none",
                                                        pointerEvents: "none",
                                                        cursor: "default"
                                                    }}
                                                />
                                            </span>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>,
                        <div className="showSkillsBox showDevTools">
                            <p className="FAndB">Dev-Tools</p>
                            {skillData.dev_tools.map((v, i) => {
                                return (
                                    <div key={`skillsBox${i}`} className={`skillsInfoBox ${day ? "" : "night"}`}>
                                        <div className="iconArea">
                                            <span className={`icon ${day ? "" : "night"}`} style={{ color: v.color }}>
                                                <img src={v.image} alt={v.skill} className="iconImgSkill"
                                                    style={{
                                                        userDrag: "none",
                                                        WebkitUserDrag: "none",
                                                        pointerEvents: "none",
                                                        cursor: "default"
                                                    }}
                                                />
                                            </span>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    ]);
                }, 0)

                break;
            case "Certifications":
                setSkillBox([]);
                const Certifications = {
                    data: [
                        { certificate: "정보처리", icon: "/img/logo/hrdk_logo.png", detail: "IT", level: "산업기사", date: "준비중..." },
                        { certificate: "OPIc", detail: "영어", icon: "/img/logo/opic_logo.png", level: "IM2(Intermediate Mid)", date: "2024.03.27" },
                        { certificate: "HSK", detail: "중국어", icon: "/img/logo/hsk_logo.png", level: "6급", date: "2023.02.11" },
                    ]
                }
                // console.log(Certifications.data[0])
                // console.log(day)
                let certificateArr = Certifications.data.map((v, i) => {
                    return (<div className="certificationsBox" key={v + i}>
                        <div className="certifiIcon"><img className="certifiLogo" src={v.icon} style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            pointerEvents: "none",
                            cursor: "default"
                        }}></img></div>
                        <div className={`cerIcon ${day ? "" : "night"}`}>{v.certificate}</div>
                        <div>{v.detail}</div>
                        <div>{v.level}</div>
                        <div>{v.date}</div>
                    </div>)
                });
                // console.log(certificateArr)
                setTimeout(() => {
                    setSkillBox(
                        <div className="certificationsArea">
                            {certificateArr}
                        </div>
                    );
                }, 0);

                break;
            case "Contact":
                setSkillBox([]);
                const contact = {
                    data: [
                        { icon: faPhone, contact: <a href="tel:+821046368403">Tel</a>, info: <a className="alink" href="tel:+821046368403">010-4636-8403</a> },
                        { icon: faEnvelope, contact: <a href="mailto:wjddla7374@naver.com">Mail</a>, info: <a className="alink" href="mailto:wjddla7374@naver.com">wjddla7374@naver.com</a> },
                        { icon: null, image: "/img/logo/kakao.png", contact: <a href="https://open.kakao.com/o/snoCRGfh" target="_blank">Kakao Talk</a>, info: <a className="alink" href="https://open.kakao.com/o/snoCRGfh" target="_blank">wjddla7374</a> },
                    ]
                }
                let contactArr = contact.data.map((v, i) => (
                    <div key={"contact" + v} className={`contactBox ${day ? "" : "night"}`}>
                        <div className={`contactIcon`} style={{ color: v.color }}>
                            {v.icon ? (
                                <FontAwesomeIcon icon={v.icon} />
                            ) : (
                                <img src={v.image} alt={v.contact}
                                    style={{
                                        userDrag: "none",
                                        WebkitUserDrag: "none",
                                        pointerEvents: "none",
                                        cursor: "default"
                                    }}
                                    className={`iconImg ${day ? "" : "night"}`} />
                            )}
                        </div>
                        <div className={`contactText ${day ? "" : "night"}`}>
                            {v.info}
                        </div>
                    </div>
                ))
                setTimeout(() => {
                    setSkillBox(
                        <div className={`contactBoxArea`}>
                            {contactArr}
                        </div>
                    );
                }, 0)
                break;
            default:
                setSkillBox([]);
                break;
        }
    };
    // useEffect(() => {
    //     showSkills("Skills");
    // }, []);
    useEffect(() => {

    }, [])
    return (
        <footer key={`contactArea`} id="contactArea" className="contactArea">
            {/* 깃발 선 */}
            <span key={`roadLine`} className={`roadLine ${day ? "" : "night"}`}></span>
            {/* 깃발 */}
            <div key={`flagArea`} className="flagArea">
                {myLife.data.map((value, index) => {
                    return <div key={`flagBox${index}`} id={`flagBox${index}`} className={`flagBox ${index === 0 ? "show" : ""}`}><img
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            pointerEvents: "none",
                            cursor: "default"
                        }}
                        className="flag" src={value.img} alt={value.img}></img></div>
                })}
            </div>
            {/* 원을 누르면 깃발이 나오게 하는 것 추가 */}
            <div key={`circleArea`} className="circleArea">
                {myLife.data.map((value, index) => {
                    return <span key={value.title + index} onClick={() => { flagIn(`flagBox${index}`, index); showPics(`myPics${index}`) }} className={`circle circle${index + 1}${day ? "" : "night"}`}></span>;
                })}
            </div>
            {/* 하나의 원에 대한 인포 */}
            <div key={`lifeTextInfo`} className={`lifeTextInfo ${day ? "" : "night"}`}>
                {myLife.data.map((value) => {
                    return <span key={value.title} className={`lifeInfoTextArea ${day ? "" : "night"}`}>{value.text}</span>;
                })}
            </div>
            {/* 해당하는 원을 누르면 그 해당하는 것에 대한 디테일 보이기 */}
            <div key={`infoTextDetail`} className={`infoTextDetail ${day ? "" : "night"}`} dangerouslySetInnerHTML={{ __html: detailOfFlag }}>
            </div>
            {/* 보유 스킬, 자격증 , 연락방법에 대한 상세 정보 넣는 Area */}
            <section key={`introduceArea`} className={`introduceArea ${day ? "" : "night"}`}>
                <div key={`introduceBox`} className="introduceBox">
                    {introduceInfo.data.map((value, index) => {
                        return <div key={value.title} onClick={() => showSkills(value.title)} className={`introduceBtn ${day ? "" : "night"}`}>{value.title}</div>;
                    })}
                </div>
                {/* 스킬 나오는 박스!!! */}
                <div key={`introduceBoxDetail`} className={`introduceBoxDetail ${day ? "" : "night"}`}>
                    {skillBox}
                    <div key={`picsArea`} className={`picsArea ${picOk ? "" : "displayNone"} ${backgroundImg ? "backgroundImg" : ""}`}>
                        {myLife.data.map((value, index) => {
                            if (index !== 3) {
                                return <div key={`myPics${index}`} id={`myPics${index}`} className={`myPics myPics${index + 1} ${index === 0 ? "show" : ""}`} ><img className={`pictureOfMe pictureOfMe${index}`} src={value.myPicLink} alt={value.myPicLink}
                                    style={{
                                        userDrag: "none",
                                        WebkitUserDrag: "none",
                                        pointerEvents: "none",
                                        cursor: "default"
                                    }}
                                ></img></div>
                            }
                        })}
                    </div>
                </div>
            </section>
            <div key={`dayNight`} className={`dayNight ${day ? "" : "night"}`} onClick={changeDay}>
                <span className={`dayIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faMoon} /></span>
                <span className={`nightIcon ${day ? "" : "night"}`}><FontAwesomeIcon icon={faSun} /></span>
            </div>
        </footer>
    )
}

export default Footer;