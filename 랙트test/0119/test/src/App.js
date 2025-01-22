import './App.css';
import { use, useState } from "react";

function Header(props) {
  // console.log(props.title)
  return (
    <header>
      <h1><a href="/" onClick={(e) => {
        e.preventDefault();
        props.onChangeMode();
      }
      }>{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  const lis = [
  ];
  // console.log(props.topics)
  props.topics.forEach((v, i, a) => {
    lis.push(<li key={v.id} id={i}><a id={v.id} href={"/read/" + v.id} onClick={
      (e) => {
        e.preventDefault();
        props.onChangeMode(Number(v.id));
      }
    }>{v.title}</a></li>)
  })
  return (
    <nav>
      <ol>
        {lis}
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
function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onCreateMode(title, body);
    }}>
      <p><input type="text" name="title" placeholder='title'></input></p>
      <p><textarea name="body" placeholder='body'></textarea></p>
      <p><input type='submit' value="Create"></input></p>
    </form>
  </article>
}
function Update(props){
  const [title , setTitle] = useState(props.title);
  const [body , setBody] = useState(props.body);
  return <article>
  <h2>Update</h2>
  <form onSubmit={e => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    props.onUpdate(title, body);
  }}>
    <p><input type="text" name="title" placeholder='title' value={title} onChange={(e)=>{
      setTitle(e.target.value);
      }}></input></p>
    <p><textarea name="body" placeholder='body' value={body} onChange={(e)=>{
      setBody(e.target.value);
      }}></textarea></p>
    <p><input type='submit' value="Update"></input></p>
  </form>
</article>
}
function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  let contextControl = null;
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="hello, WEB"></Article>
  } else if (mode === "READ") {
    let title, body = null;
    topics.forEach((v, i) => {
      if (v.id == id) {
        title = v.title;
        body = v.body;
      }
    })
    content = <Article title={title} body={body}></Article>
    contextControl = <><li><a href={'/update/'+id} onClick={e=>{
      e.preventDefault();
      setMode("UPDATE");
    }}>Update</a></li>
    <li><input type='button' value="Delete" onClick={()=>{
      const newTopics = [];
      topics.forEach((v,i,a)=>{
        if(v.id != id){
          newTopics.push(v);
        }
      });
      setTopics(newTopics);
    }}></input></li>
    </>;
  } else if (mode === "CREATE") {
    content = <Create onCreateMode={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode("READ")
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if(mode === "UPDATE"){
    let title, body = null;
    topics.forEach((v, i) => {
      if (v.id == id) {
        title = v.title;
        body = v.body;
      }
    })
    content = <Update title={title} body={body} onUpdate={(_title,_body)=>{
      // console.log(_title , _body)
      const updatedTopic = {id: id , title:_title , body : _body};
      const newTopics = [...topics];
      for(let i=0; i<newTopics.length ; i++){
        if(newTopics[i].id == id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode("READ");
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={(e) => {
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode("READ");
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li>
          <a href='/create' onClick={e => {
            e.preventDefault();
            setMode("CREATE");
          }}>Create</a>
        </li>
          {contextControl}
      </ul>
    </div>
  );
}

export default App;
