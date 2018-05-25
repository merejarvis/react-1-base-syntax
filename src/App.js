import React, { Component } from 'react';
import logo from './logo.svg';
import {UserInput} from './UserInput/UserInput'
import {UserOutput} from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  paras = {
    para1: 'this is first para',
    para2: 'this is second para'
  }

  state = {
    name : [
      {first: 'hey'},
      {second: 'hello'}
    ]
  }

  nameHandler = (event) => {
    this.setState({
      name : [
        {first: 'hey hey'},
        {second: event.target.value}
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'blue',
      border: '10px',
      padding: '10px'
    }
    return (
      <div className="App">
        <h1>Hello World..</h1>
        <button style={style}>ss</button>
        <UserInput name= {this.state.name[1].second} change= {this.nameHandler} />
        <UserOutput style={style} content= {this.paras.para1} userName = {this.state.name[0].first}/>
        <UserOutput content= {this.paras.para2} userName = {this.state.name[1].second}/>
      </div>
    );
  }
}

export default App;
