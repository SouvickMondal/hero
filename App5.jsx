import React from 'react';
import ReactDOM from 'react-dom';

class App5 extends React.Component{
    constructor(props){
        super(props);
        this.funcVariable = this.incrementVal.bind(this);
    }
    incrementVal(){
        ReactDOM.findDOMNode(this.refs.Inc).value++;
    }
    render(){
        return(<div>
            <input type="text" ref="Inc" value="0" ></input>
            <button onClick={this.funcVariable}>Increment</button>
        </div>);
    }
}
export default App5;