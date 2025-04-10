import "../sass/Nav.scss"
const Nav = () => {
    // 상단 메뉴 선택시 display
    const displayHome = () => {
        document.getElementById("homeArea").style.display = "block";
        document.getElementById("portfolioArea").style.display = "none";
        document.getElementById("contactArea").style.display = "none";
    }
    const displayPortfolio = () => {
        document.getElementById("portfolioArea").style.display = "block";
        document.getElementById("homeArea").style.display = "none";
        document.getElementById("contactArea").style.display = "none";
    }
    const displayContact = () => {
        document.getElementById("contactArea").style.display = "block";
        document.getElementById("homeArea").style.display = "none";
        document.getElementById("portfolioArea").style.display = "none";
    }
    return (
        <nav>
            <h1 onClick={displayHome}><span className="nameSpan">JungIm's </span><span id="siteSpan" className="siteSpan">Portfolio Site</span></h1>
            <ul id="menubar">
                <li><a href="#" onClick={displayHome}>Home</a></li>
                <li><a href="#" onClick={displayContact}>About Me</a></li>
                <li><a href="#" onClick={displayPortfolio}>Portfolio</a></li>
            </ul>
        </nav>
    )
}

export default Nav;