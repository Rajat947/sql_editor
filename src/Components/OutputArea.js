import React,{useState, useEffect} from 'react'
import Table from './Table';
import "./Css/OutputArea.css"
import axios from 'axios';

function OutputArea(prop) {
  const [query, setQuery] = useState(prop.value);
  const [state, setState] = useState({res:[], error:''});
  
  const getQuery = ()=>{
    if(query === "SELECT * FROM Customer;") return("https://jsonplaceholder.typicode.com/comments");
    if(query === "SELECT * FROM Customers WHERE Country='Germany' AND City='Berlin';") return("https://jsonplaceholder.typicode.com/posts");
    if(query === "UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;") return("https://jsonplaceholder.typicode.com/posts1");
    let num = Math.floor((Math.random()*10) + 1)%3;
    switch(num)
    {
      case 0: return("https://jsonplaceholder.typicode.com/comments");
      case 1: return("https://jsonplaceholder.typicode.com/posts");
      default: return("https://jsonplaceholder.typicode.com/posts1");
    }
  }

  useEffect(()=>{
    
    if(query !== "")
    {
      console.log("Output will call API");
      axios.get(getQuery())
      .then(response => {
        setState({
          res: response.data,
          error: ''
        })
      })
      .catch(err =>
        {
          setState({
            res: [],
            error: err.message
          })
        })
    }
  }, [query]);
  
  return (
    <div className="outputArea">
      <div className="col-1 output">Output</div>
      {console.log('Output')}
      {
        query !== prop.value?setQuery(prop.value):''
      }
      {
        state.res.length>0?(<Table list={state.res}></Table>):''
      }
      {
        state.error.length>0?<div className="showError">{state.error}</div>:''
      }
    </div>
  )
}

export default React.memo(OutputArea);