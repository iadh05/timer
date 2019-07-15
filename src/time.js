import React from 'react'

let ConvertTimer= (timems)=>{
    
    let CtimeS=Math.floor(timems/1000)
    let timeH=Math.floor(CtimeS/3600)
    let RtimeH=CtimeS%3600
    let timeM=Math.floor(RtimeH/60)
    let RtimeM=RtimeH%60
    
    return (
     timeH.toString().padStart(2, '0')+':'+timeM.toString().padStart(2, '0')+':'+RtimeM.toString().padStart(2, '0')
    )
    
    }
    let Time =({ timems})=>(
 
    <div> 
    <div className="time-num">{ConvertTimer( timems)}</div>
    <div className="time">
      <div className="hms">hours</div>
      <div className="hms"> minute</div>
      <div>Second</div>
    </div>
    
    </div>

)
    export default Time