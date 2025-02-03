import './css/App.css';
import Main from './page/Main';
import { useState } from 'react';
function Header() {
  return (
    <h1>Karnaugh Map</h1>
  )
}
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main> 
    </div>
  );
}

export default App;