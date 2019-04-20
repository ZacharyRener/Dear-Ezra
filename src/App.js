import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Header from './header.js';
import BabyBlog from './babyBlog.js';
import Capsules from './capsules.js';
import { BABY_BLOG_ABI, BABY_BLOG_ADDRESS } from './config';

class App extends Component {

  componentWillMount() {
    
  }

  constructor(props){
    super(props);
    this.state = {
      
    }
    //this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  render() {
    return (
      <div className='dapp'>
        <Header />
        <Capsules />
      </div>
    );
  }
}

export default App;
