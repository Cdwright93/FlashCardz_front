import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import StackDetail from './Components/StackDetail'
import StackList from './Components/StackList'

const api = axios.create({
  baseURL:'http://127.0.0.1:8000/flashcards/'
})
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stacks: [],
      currentStack: null,
      currentCard: null,
      cards: [],
    }
  }
componentDidMount(){
  this.getStacks()
}
getCards = async (stackId) => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/flashcards/stack/'+ stackId}).then(({ data }) => data)
  this.setState({ cards : data })
  console.log(this.state.cards)
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
      <div className='row'>
        <div className='col-md-6'>
          <StackDetail stack={this.state.currentStack} cards={this.state.cards}/>
        </div>
    </div>
    <div className='col-md-6'>
      <StackList handleStackSelect={this.handleStackSelect} stacks={this.state.stacks}/>
  </div>
  </div>
  )
}
}

export default App;
