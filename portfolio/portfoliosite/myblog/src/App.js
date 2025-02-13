import logo from './logo.svg';
import Nav from './view/js/Nav';
import Main from './view/js/Main';
import Article from './view/js/Article';
import Footer from './view/js/Footer';
import { useState } from 'react';
function App() {
  const [day, setDay] = useState(true);

  const changeDay = () => {
    document.getElementById("bodyArea").classList.toggle("night");
    document.getElementById("menubar").classList.toggle("night");
    document.getElementById("siteSpan").classList.toggle("night");
    setDay(!day);
  };
  return (
    <div id="bodyArea" className='bodyArea'>
      <Nav></Nav>
      <Main day={day} changeDay={changeDay}></Main>
      <Article day={day} changeDay={changeDay}></Article>
      <Footer day={day} changeDay={changeDay} ></Footer>
    </div>
  );
}

export default App;
