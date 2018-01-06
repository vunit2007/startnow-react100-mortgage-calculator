import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      balance: 0, 
      rate: 0, 
      term: 15, 
      result: 0 
    };
    this.handleBalance = this.handleBalance.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.calcMortgagePayment = this.calcMortgagePayment.bind(this);
  }
  handleBalance(event) {
    console.log('Hello World');
    this.setState({
      balance: parseFloat(event.target.value)
    });
  }
  handleRate(event) {
    console.log('Hello World');
    this.setState({
      rate: parseFloat(event.target.value)
    });
  }
  handleTerm(event) {
    console.log('Hello World');
    this.setState({
      term: parseFloat(event.target.value)
    });
  }
calcMortgagePayment(event) {
event.preventDefault();
const {balance, rate, term} = this.state
let B = balance;
let I = rate / 100 / 12;
let N = term * 12;
let calc = B * I * (Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1);
console.log({B,I,N,calc}); 
this.setState({result: calc.toFixed(2)})

};  

  render() {

    return (
      <div className="container">
         <div className="title"><h3>Mortgage Calculator</h3></div>
        <div className="box"> 
    
        <form onSubmit={this.calcMortgagePayment}>
        
  <div className="1">
    <label htmlFor="balanceLabel">What is your loan balance?</label>
    <div className="10">
      <input type="number" value={this.state.balance} onChange={this.handleBalance} name="balance" placeholder="0" />
    </div>
  </div>
<br/>
  <div className="2">
    <label htmlFor="rateLabel">What is your interest rate (%)?</label>
    <div className="20">
      <input type="number" value={this.state.rate} onChange={this.handleRate} name="rate" placeholder="0" />
    </div>
  </div>
<br/>
  <div className="3">
  <label htmlFor="termLabel">How long is your loan term (years)?</label>
    <div className="30">
    <select name="term" value={this.state.term} onChange={this.handleTerm}>
    <option value="15">15</option>
    <option value="30">30</option>
  </select>
      </div>
    </div>
<br/>
  <div className="4">
    <div className="calculateClass">
      <button type="calculate" name="submit">Calculate</button>
    </div>
  </div>
<br/>
  <div className="5">
    <label htmlFor="outputLabel" className="outputClass">Your monthly payments (not including insurance or HOA) is...</label>
    <div className="50">
      <p id="output" placeholder="0.00" name="result">$ {this.state.result}</p>
    </div>
  </div>
</form>
</div>

      </div>
    );
  }
}

