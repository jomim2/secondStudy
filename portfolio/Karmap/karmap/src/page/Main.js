import { use, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
function Main() {
    ////초기값에는 false 를 넣고 클릭하면 true 로 바꿔서 active 클래스 추가하기
    const [activeNavs, setActiveNavs] = useState([false, false, false, false]);
    const activateNav = (index) => {
        const updatedActiveNavs = [...activeNavs];
        updatedActiveNavs[index] = true;
        setActiveNavs(updatedActiveNavs);
    };
    /////엑스 버튼 누르면 다시 false 로 바꿔서 active 지우기
    const deactivateNav = (index) => {
        const updatedActiveNavs = [...activeNavs];
        updatedActiveNavs[index] = false;
        setActiveNavs(updatedActiveNavs);
    };
    const pushContent = (row, column) => {
        let tempArray = [];
        for (let i = 0; i < row; i++) {
            tempArray.push([]);
            for (let j = 0; j < column; j++) {
                tempArray[i].push(0);
            }
        }
        return tempArray;
    }
    class KarMap {
        constructor(id) {
            this.id = id;
            this.karMapArr = null;
            this.resultBox = this.karMapArr;
        }
        display(karMapArr) {
            let resultString = '';
            karMapArr.forEach((v,i)=>{
                resultString += v;
                // console.log(v[i])
            })
            return resultString;
        }
    }
    // let karMap2 = null;
    let karMap2 = new KarMap("karMap2");
    let karMap3 = new KarMap("karMap3");
    let karMap4 = new KarMap("karMap4");
    let karMap5 = new KarMap("karMap5");

    const [result2 , setResult2] = useState(null);
    const [result3 , setResult3] = useState(null);
    const [result4 , setResult4] = useState(null);
    const [result5 , setResult5] = useState(null);


    const resultBox = [result2 , result3 , result4, result5];

    const updateContent = (row, column, changeId) => {
        let updateContentArray = [];
        let updateContentKarMap = [];
        switch (changeId) {
            case "biansu2": updateContentArray = [...pushContent2]; //  새로운 배열을 만들어 줘야지 됨..
                updateContentArray[row][column] = updateContentArray[row][column] === 0 ? 1 : 0;
                setPushContent2(updateContentArray);
                setResult2(karMap2.display(updateContentArray));
                break;
            case "biansu3": updateContentArray = [...pushContent3]; //  새로운 배열을 만들어 줘야지 됨..
                updateContentArray[row][column] = updateContentArray[row][column] === 0 ? 1 : 0;
                setPushContent3(updateContentArray);
                setResult3(karMap3.display(updateContentArray));
                break;
            case "biansu4": updateContentArray = [...pushContent4]; //  새로운 배열을 만들어 줘야지 됨..
                updateContentArray[row][column] = updateContentArray[row][column] === 0 ? 1 : 0;
                setPushContent4(updateContentArray);
                setResult4(karMap4.display(updateContentArray));
                break;
            case "biansu5": updateContentArray = [...pushContent5]; //  새로운 배열을 만들어 줘야지 됨..
                updateContentArray[row][column] = updateContentArray[row][column] === 0 ? 1 : 0;
                setPushContent5(updateContentArray);
                setResult5(karMap5.display(updateContentArray));
                break;
        }
    }

    // 여기에 배열을 담음. 후에 이 배열을 가지고 ,,, 힘든 여정을 ,,,
    const [pushContent2, setPushContent2] = useState(pushContent(2, 2));
    const [pushContent3, setPushContent3] = useState(pushContent(2, 4));
    const [pushContent4, setPushContent4] = useState(pushContent(4, 4));
    const [pushContent5, setPushContent5] = useState(pushContent(4, 4));
    // console.log(pushContent5)

    const miniSpan = (row, column, classID, num = 0, pushedBtn) => {
        let tempArr = [];
        // console.log(column);
        let content = null;
        // console.log(temp5)
        // setPushContent5([...temp5]);
        // setPushContent3(pushContent3);
        for (let i = 0; i < row; i++) {
            tempArr.push([]);
            for (let j = 0; j < column; j++) {
                if (i === 0 && j === 0) {
                    switch (classID) {
                        case "biansu2": content = ["a\\b"];
                            break;
                        case "biansu3": content = ["a\\bc"];
                            break;
                        case "biansu4": content = ["ab\\cd"];
                            break;
                        case "biansu5": content = ["bc\\de"];
                            break;
                    }
                    tempArr[i].push(
                        <div
                            key={`${i}-${j}`}
                            className={`biansuBoxInfo`}
                            style={{
                                width: `calc(100% / ${column})`,
                                height: `95%`,
                                lineHeight: "95%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                            }}
                        >
                            {content}
                        </div>
                    );
                } else if (i === 0 && j !== 0) {
                    switch (classID) {
                        case "biansu2": content = ["0", "1"];
                            break;
                        case "biansu3": content = ["00", "01", "11", "10"];
                            break;
                        case "biansu4": content = ["00", "01", "11", "10"];
                            break;
                        case "biansu5": content = ["00", "01", "11", "10"];
                            break;
                    }
                    tempArr[i].push(
                        <div
                            key={`${i}-${j}`}
                            className={`biansuBoxInfo`}
                            style={{
                                width: `calc(100% / ${column})`,
                                height: `95%`,
                                lineHeight: "95%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                            }}
                        >
                            {content?.[j - 1] || ""}
                        </div>
                    );
                } else if (i !== 0 && j === 0) {
                    switch (classID) {
                        case "biansu2": content = ["0", "1"];
                            break;
                        case "biansu3": content = ["0", "1"];
                            break;
                        case "biansu4": content = ["00", "01", "11", "10"];
                            break;
                        case "biansu5": content = ["00", "01", "11", "10"];
                            break;
                    }
                    tempArr[i].push(
                        <div
                            key={`${i}-${j}`}
                            className={`biansuBoxInfo`}
                            style={{
                                width: `calc(100% / ${column})`,
                                height: `95%`,
                                lineHeight: "95%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                            }}
                        >
                            {content?.[i - 1] || ""}
                        </div>
                    );
                }
                else {
                    switch (classID) {
                        case "biansu2": content = [...pushContent2];
                            break;
                        case "biansu3": content = [...pushContent3];
                            break;
                        case "biansu4": content = [...pushContent4];
                            break;
                        case "biansu5": content = [...pushContent5];
                            break;
                    }
                    tempArr[i].push(
                        <div
                            key={`${i}-${j}`}
                            id={`biansuBox${classID}-${i}-${j}`}
                            // 온클릭 함수의 의미: 클릭하면 배열안의 값 바꾸기임!!! 난 천재야 우히히히히 는 개뿔 오류있음 엑스버튼 누르고 나면 색깔 초기화됨;;;
                            onClick={(e) => {
                                updateContent(i - 1, j - 1, classID);
                            }}

                            className={`biansuBox ${classID} ${content[i - 1][j - 1] === 1 ? pushedBtn : ""}`}
                            style={{
                                width: `calc(100% / ${column})`,
                                height: `95%`,
                                lineHeight: "95%",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: "center",
                            }}
                        >
                            {content[i - 1][j - 1]}
                        </div>
                    );
                }

            }
        }
        return tempArr.map((column, index) => <div key={index} style={{ display: "flex", height: `calc(100% / ${row + num})`, boxSizing: "border-box" }}>{column}</div>);
    }

    // 변수 박스들 입니다.. 행과 열을 동적으로 생성했습니다.
    const biansu2 = [<div className=" biansuArea">{miniSpan(3, 3, "biansu2", 0, "clickedBtn2")}</div>];
    const biansu3 = [<div className=" biansuArea">{miniSpan(3, 5, "biansu3", 0, "clickedBtn3")}</div>];
    const biansu4 = [<div className=" biansuArea">{miniSpan(5, 5, "biansu4", 0, "clickedBtn4")}</div>];
    const biansu5 = [<div className=" biansuArea">{<div className='bainsu5Big'><div className='bainsu5Small1'>a = 0</div><div className='bainsu5Small2'>a = 1</div></div>}{miniSpan(5, 5, "biansu5", 1, "clickedBtn5")}</div>];
    const karmapInfo = [...biansu2, ...biansu3, ...biansu4, ...biansu5];

    // resultBox 들 입니다 class 로 제어해보자,,, 
    
    return (
        <main>
            <div className="navArea" id="navArea">
                {activeNavs.map((isActive, index) => (
                    <div
                        //  isActive 가 true 아니면 false 인데 true 면 active , 아니면 클래스네임 안넣기!
                        className={`navigation nav${index + 2} ${isActive ? 'active' : ''}`}
                        id={`navigation${index}`}
                        key={`nav${index}`}
                        onClick={() => activateNav(index)}
                    >
                        {isActive && (
                            <span
                                className="textInfo2"
                            >
                                {index + 2}변수
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
                        {/* 엑티브 상태면 미니박스 나오게 해서 변수 박스(biansu,biansuBox) 만들기 */}
                        {isActive && (
                            <div
                                className={'miniBox'}
                                id={`miniBox${index}`}
                                key={`miniBox${index}`}
                            >

                                {karmapInfo[index]}
                            </div>
                        )}
                        {/* 결과 나오는 창 만들기 (식 넣는 곳) */}
                        {isActive && (
                            <div
                                className={'resultBox'}
                                id={`resultBox${index}`}
                                key={`resultBox${index}`}
                            >

                                {resultBox[index]}
                            </div>
                        )}
                        {/* 결과나오는 창인데 논리회로 자리.. 근데 어케할지 모르겠... */}
                        {isActive && (
                            <div
                                className={'resultBoxPic'}
                                id={`resultBoxPic${index}`}
                                key={`resultBoxPic${index}`}
                            >

                                {/* {resultBoxPic[index]} */}
                            </div>
                        )}
                        {/* 엑티브 상태가 아니면 몇변수인지 나오게 하기 */}
                        {!isActive && (
                            <span
                                className="textInfo"
                            >
                                {index + 2}변수
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;