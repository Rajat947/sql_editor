import React from 'react'
import './Css/Table.css'

function Table(prop) {
    const res = prop.list;
  return (
    <div className="Table">
        {console.log("Table")}
        <table>
            <tbody>
                <tr>
                {
                    Object.keys(res[0]).map((cur)=><th key={cur} className="table-cell">{cur}</th>)
                }
                </tr>
                {res.map(val => {
                    return(
                        <tr key={val.id}>{
                            Object.entries(val).map(cur=>{
                                return(
                                    <td key={cur[0]}><div className="table-cell">{cur[1]}</div></td>
                                )
                            })
                        }</tr>
                    )
                })}
            </tbody>
      </table>
    </div>
  )
}

export default React.memo(Table)