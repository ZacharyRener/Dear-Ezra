import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Header from './header.js';
import BabyBlog from './babyBlog.js';
import { BABY_BLOG_ABI, BABY_BLOG_ADDRESS } from './config';

class Sidebar extends Component {

  componentWillMount() {
    this.loadBlockchainData();
  }

  constructor(props){
    super(props);
    this.state = {
        account: '',
        blogCount: 0
    }
    //this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const babyBlog = new web3.eth.Contract(BABY_BLOG_ABI, BABY_BLOG_ADDRESS);
    const blogCount = await babyBlog.methods.blogCount().call();
    this.setState({ blogCount });
  }

  render() {
    return (
        <div className="sidebar container">
            <div className="box">
                <h2>Messages:</h2>
                <p id="capsuleCount">{this.state.blogCount}</p>
            </div>
        </div>
    );
  }
}

export default Sidebar;
