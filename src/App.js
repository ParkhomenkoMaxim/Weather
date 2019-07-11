import React, { Component } from "react";
import "./App.css";
import Places from './Components/Places';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class App extends Component {
  
  render() {
    return (
      <div>
      <Header/>
      <Places/>
      <Footer/>
      </div>
    );
  }
}



export default App;