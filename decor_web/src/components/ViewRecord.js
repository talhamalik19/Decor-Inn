import React, { useState } from 'react'

export default function ViewRecord() {
    const [record, setRecord] = useState([])
    
    setRecord(JSON.parse(localStorage.getItem('ViewRecord')))
    console.log(record)
  return (
    <>
     <div className="container-fluid">
        <center>
          <h1 className="titleText">CHINA MART</h1>
        </center>
        <div id="styleDiv">
          {record.map((value) => (
            <div>
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}
