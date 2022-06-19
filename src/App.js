import './App.css';
import Editor from './Components/Editor';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className = "Header">
        <h1>SQL Editor</h1>
      </div>
      <Editor/>
    </div>
  );
}

export default React.memo(App);
