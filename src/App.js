import React, { Component } from 'react';
import Header from './header/Header';


import './App.css';
import Heroes from './heroes/Heroes';

class App extends Component {

  constructor(props){
    super(props)

    this.daleDonDale = this.daleDonDale.bind(this);
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <Heroes/>
      </div>
    );
  }

  daleDonDale(event){
    console.log(event);
  }
}

export default App;
