import React, { Component } from 'react';
import './App.css';
import BlogSection from "./BlogSection";
import Header from './header';
import Latestpost from "./latestpost"

export class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Latestpost />
       <BlogSection/> 
        
      </>
    )
  }
}
export default App