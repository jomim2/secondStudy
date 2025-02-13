import "../view/sass/header.scss";
import {useEffect , useState} from "react";
function Header(){
    const handShake = (e) =>{
        e.target.classList.add("handShake");
    }
    return(
        <header>
            <article>
            {/* <div></div> */}
            <div><p className={"textBox"} >안녕하세요!</p></div>
            <div><p className={"textBox"} >새싹 개발자</p></div>
            <div><p className={"textBox"} >이정임 입니다.</p></div>
            <div><p className={"textBox"} >악수 한번 하시죠!</p></div>
            <aside><div onClick={handShake}></div></aside>
            <div><p className={"textBox"} >잘 부탁드립니다!</p></div>
            </article>
        </header>
    )
}
export default Header;