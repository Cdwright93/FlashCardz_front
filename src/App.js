import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import StackDetail from './Components/StackDetail'
import StackList from './Components/StackList'
import 'bootstrap/dist/css/bootstrap.min.css';

const api = axios.create({
  baseURL:'http://127.0.0.1:8000/stacks/'
})
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stacks: [],
      currentStack: null,
      currentCard: [],
      cards: [],
      cardNumber: 0
    }
  }
componentDidMount(){
  this.getStacks()
}
getCards = async (stackId) => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/flashcards/stack/'+ stackId}).then(({ data }) => data)
  this.setState({ cards : data })
  this.setState({ currentCard : data[0]})
  console.log(this.state.currentCard)
}
getFlashCards = async (stackId) => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/flashcards/stack/'+ stackId}).then(({ data }) => data)
  this.setState({ cards : data })
  this.setState({ currentCard : data[this.state.cardNumber]})
  console.log(this.state.currentCard)
}
createStack = async (event) => {
  event.preventDefault()
  let res = await api.post('/', {name: event.target.name.value,})
    console.log(res)
    this.getStacks();
}
nextCard(){
  let tempCardNumber = this.state.cardNumber;
  tempCardNumber++;
  if(tempCardNumber >= this.state.cards.length){;
    tempCardNumber = 0;
  };
  this.setState({
    cardNumber : tempCardNumber
  })
  this.getFlashCards(this.state.currentStack.id)
}
previousCard(){
  let tempCardNumber = this.state.cardNumber
  tempCardNumber--
  if(tempCardNumber < 0){
    tempCardNumber = this.state.cards.length -1
  }
  this.setState({
    cardNumber : tempCardNumber
  })
  this.getFlashCards(this.state.currentStack.id)
}

getStacks = async () => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/stacks/'}).then(({ data }) => data)
  this.setState({ stacks : data })
  console.log(this.state.stacks)
}
handleStackSelect = (stack) => {
  this.setState({currentStack: stack})
  let stackId= stack.id
  this.getCards(stackId)
}

render() {
  return (
    <div>
      <div className='stacklist'>
      <StackList handleStackSelect={this.handleStackSelect} stacks={this.state.stacks}/>
    </div>
        <div className='stackdetail'>
          <StackDetail stack={this.state.currentStack} cards={this.state.cards} currentCard={this.state.currentCard}/>
    </div>
    <div>
      {this.state.currentStack != null &&
            <div className='cardbuttons'>
            <button onClick={() => this.previousCard()}>Back</button> {this.state.cardNumber + 1}/{this.state.cards.length} <button onClick={() => this.nextCard()}>Next</button>
          </div>
      }
    </div>
  <form className='StackForm' onSubmit = {(event) => this.createStack(event)}>
          <h3>Add a Stack</h3>
        <label htmlfor="name">Title:</label>
        <input type = "text" id="name" name="name"/><br/>
          <button type="submit">Submit</button>
        </form>
  </div>
  )
}
}

export default App;
