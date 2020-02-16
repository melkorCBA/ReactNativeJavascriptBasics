import React from "react";
import ReactDOM from "react-dom";
import "./index.css";




class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  // increaseCount(){
  //   //merge {count:0}, {count:this.state.count+1}, {count:0}, {count:this.state.count+1} 
  //   //merge in one go
  //   //react identfies setState is asynchronise function
  //   //so its batch them togather
  //   this.setState({count:this.state.count+1});
  //   console.log(this.state.count)
  //   this.setState({count:this.state.count+1});
  //   console.log(this.state.count)
  // }

//   render(){
//     return(
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing in {this.state.count}</h2>
//         <button onClick={this.increaseCount.bind(this)}>Increase</button>
//       </div>
//     )
//   }
// }

increaseCount(){
  //take the previous state and return a object count+1
  this.setState(prevState=>({count:prevState.count+1}));
  console.log(this.state.count)
  this.setState(prevState=>({count:prevState.count+1}));
  console.log(this.state.count)
}

//if we use callback it'll will automatically bind this
render(){
  return(
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing in {this.state.count}</h2>
      <button onClick={()=>this.increaseCount()}>Increase</button>
    </div>
  )
}
}

const rootElement = document.getElementById("root");
let count=0;
ReactDOM.render(<App count={++count} />, rootElement); 
 