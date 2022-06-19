import React,{useState} from 'react'
import InputArea from './InputArea';
import OutputArea from './OutputArea';

function Editor() {
    const [input, setInput] = useState('');
  return (
    <div className = "wrapper">
        {console.log("Editor")}
        <InputArea set={setInput} value={input}/>
        <OutputArea value={input}/>
    </div>
  )
}

export default React.memo(Editor)