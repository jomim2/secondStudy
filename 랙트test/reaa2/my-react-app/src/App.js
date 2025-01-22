// import logo from './logo.svg';
import { use, useState } from 'react';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1><a href='/' onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  let li = [];
  props.title.forEach((v,i,a)=>{
    li.push(<li><a href="/" onClick={(e)=>{e.preventDefault()}}>{v.title}</a></li>);
  })
  return (
    <nav>
      <ol>
        {li}
      </ol>
    </nav>
  )
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}
function App() {
  const [mode , setMode] = useState("hi");
  const topics = [
    {id : 1 , title : "html" , body : "html is ..."},
    {id : 2 , title : "css" , body : "css is ..."},
    {id : 3 , title : "js" , body : "js is ..."},
  ];
  // const [content , setContent ] = useState(null);
  let content = null;
  if(mode === "WELCOME"){
    content = (<Article title="Welcome" body="❤️🐻❤️🦊❤️⭐❤️"></Article>)
  }
  return (
    <div>
      <Header title="Hello jomimi World!🐻" onChangeMode={()=>{
        setMode("WELCOME");
      }}></Header>
      <Nav title={topics}></Nav>
      {content}
    </div>
  );
}

export default App;
