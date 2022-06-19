import React,{useState, useRef} from 'react'
import './Css/InputArea.css'

function InputArea(prop) {
    const [input, setInput] = useState(prop.value);
    const text = useRef(null)
    function formSubmit()
    {
        if(input === "") return;
        prop.set(input);
    }

    function update(event)
    {
        setInput(event.target.value);
        text.current.value = event.target.value;
    }
  return (
      <React.Fragment>
          {console.log("Input")}
        <div className="row justify-content-around title">
            <div className="col-1 title-name">Name</div>
            <div className="col-11">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <select className="btn" onChange={update}>
                            <option value="" >Edit</option>
                            <option value="SELECT * FROM Customer;">Example 1</option>
                            <option value="SELECT * FROM Customers WHERE Country='Germany' AND City='Berlin';">Example 2</option>
                            <option value="UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;">Example 3</option>
                        </select>
                    </li>
                    <li className="nav-item">
                        <button className="btn" onClick={update}>Clear</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn" onClick={formSubmit}>Run</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="inputArea">
            <textarea ref={text} placeholder = "Write your query here.." onChange={update} defaultValue={input}></textarea>
        </div>
      </React.Fragment>
  )
}

export default React.memo(InputArea);