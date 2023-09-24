
import React, { } from 'react'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: [],
    }
  }


  append = (value) => {
    this.setState(prev => {
      return {
        ...prev,
        expression: [...prev.expression, value]
      }
    })
  }


  compute = () => {
    if (this.state.expression.length < 3) {
      return;
    }

    let result = 0
    
    switch (this.state.expression[1]) {
      case "+":
       result= this.state.expression[0] + this.state.expression[2]
       break;
      case "-":
        result= this.state.expression[0] - this.state.expression[2]
        break;
      case "*":
        result=  this.state.expression[0] * this.state.expression[2]
        break;
      case "/":
        result= this.state.expression[0] / this.state.expression[2]
        break;

        default:
            console.log(`Sorry, not any value here`);
    }

    this.setState(() => {
      return { expression: [result]}
    })
  }


  clear = () => {
    this.setState(prev => {
      return { 
        expression: [],
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div id="display">
          <div>{this.state.expression.toString()}</div>
          <div class="ele">
            <button onClick={() => this.append(1)}>1</button>
            <button onClick={() => this.append(2)}>2</button>
            <button onClick={() => this.append(3)}>3</button>
            <button onClick={() => this.append('+')}>+</button> <br></br>
            <button onClick={() => this.append(4)}>4</button>
            <button onClick={() => this.append(5)}>5</button>
            <button onClick={() => this.append(6)} >6</button>
            <button onClick={() => this.append('-')}>-</button><br></br>
            <button onClick={() => this.append(7)}>7</button>
            <button onClick={() => this.append(8)}>8</button>
            <button onClick={() => this.append(9)}>9</button>
            <button onClick={() => this.append('*')}>*</button> <br></br>
            <button onClick={() => this.append(0)}>0</button>
            <button onClick={() => this.append('/')}>/</button>
            <button onClick={() => this.clear()}>c</button>
            <button onClick={() => this.compute(this.state.sign)}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;