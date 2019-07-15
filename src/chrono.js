import React,{Component} from 'react'
import Time from './time.js'

class Chrono extends Component{
constructor(props){
super(props) 
this.state={
time:0,
btn:'start',
intervale:0
}

}
 start=()=> {
     if(this.state.btn==='start'){
     if(this.state.intervale){
         return
     }
    const x=setInterval(()=>{
        this.setState({time:this.state.time+1000})
        
        },
        1000
        )
        this.setState({intervale:x,
        btn:'pause'
        })
        console.log(this.state.btn)    
    }
    
     else {
    if(!this.state.intervale){
        return
    }
    else clearInterval(this.state.intervale)
    this.setState({intervale:0,
    btn:'start'
     })
     console.log(this.state.btn)
 }
}
reset=()=>{
    
    clearInterval(this.state.intervale);
    this.setState({
      time: 0,
      intervale: 0,
      btn:'start'
    });
    console.log(this.state.btn)
  
    
}
render(){
return( 
<div>
< Time   timems={this.state.time}/>
    <input type="button" value={this.state.btn} onClick={this.start} />
    <input type="button" value="reset" onClick={this.reset} />
    </div>
    )
}
}

export default Chrono