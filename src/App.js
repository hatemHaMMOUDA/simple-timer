import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {
constructor(props) {
super(props)

this.state = {

count: 0
}
}
timer = () => {
this.myInterval = setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000)
}
stopTimer = () => {
clearInterval(this.myInterval)
}

resetTimer = () => {
this.setState({ count: this.state.count === 0 })
}

render() {
return (
<div className="App my-5">
<div className=" col-3 m-auto p-5 " style={{ height: 500, padding: 0 }}>

<div className="bg-warning pt-5 col-12  parent" style={{ height: 250 }}>
<div className="comp" >
<span>{this.state.count}</span>

</div>
</div>

<div className="col-12 unpad" style={{ padding: 0 }} ><button className="btn-success btnz" onClick={this.timer} >START</button></div>
<div className="col-12 unpad" style={{ padding: 0 }} ><button className="btn-primary btnz" onClick={this.stopTimer}>STOP</button></div>

 <div className="col-12 unpad" style={{ padding: 0 }} ><button className="btn-danger btnz" onClick={this.resetTimer}>RESET</button></div>
</div>

</div>


);
}
}

export default App
