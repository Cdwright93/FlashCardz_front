import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
  baseURL:'http://127.0.0.1:8000/flashcards/'
})
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stacks: [],
      currentStack: null,
      currentCards: [],
      cards: [],
    }
  }
componentDidMount(){
  this.getCards()
  this.getStacks()
}
getCards = async () => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/flashcards/'}).then(({ data }) => data)
  this.setState({ cards : data })
  console.log(this.state.cards)
}
getStacks = async () => {
  let data = await axios.get('/',{baseURL:'http://127.0.0.1:8000/stacks/'}).then(({ data }) => data)
  this.setState({ stacks : data })
  console.log(this.state.stacks)
}
render() {
  return (
    <div>
    <h1>Hello World</h1>
    <table id ="stackTable">
    {this.state.stacks.map(stack => <tr key={stack.id}><td>{stack.name}</td><button>Delete</button>
    <button>Edit</button></tr>)}
  </table>
  </div>
  )
}
}

export default App;
