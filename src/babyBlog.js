import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Sidebar from './sidebar.js';
import Header from './header.js';
import { BABY_BLOG_ABI, BABY_BLOG_ADDRESS } from './config';

class BabyBlog extends Component {

  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    this.setState({web3});
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const babyBlog = new web3.eth.Contract(BABY_BLOG_ABI, BABY_BLOG_ADDRESS);
    this.setState({ babyBlog });
    const theBlogCount = await babyBlog.methods.blogCount().call();
    this.setState({ blogCount: theBlogCount });
    console.log("babyBlog:", babyBlog);
  }

  constructor(props){
    super(props);
    this.state = {
      account: '',
      blogCount: 0,
      Posts: [],
      bodyValue: '',
      titleValue: '',
      web3: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  returnHome(){
    let header = document.getElementById("headerBackground");
    let blog = document.getElementById("mainBlog");
    let babyblog = document.getElementById("form");

    babyblog.classList.add("hide");
    blog.classList.remove("hide");
    header.classList.remove("addMemory");
    
  }

  handleSubmit(event){
    event.preventDefault();
    this.state.babyBlog.methods.addPost(this.state.titleValue, this.state.bodyValue).send({from: this.state.account});
    this.returnHome();
  }

  handleChange(event){
    this.setState({bodyValue: event.target.value})
  }

  handleTitleChange(event){
    this.setState({titleValue: event.target.value})
  }


  render() {
    return (
    <div className="BabyBlog hide" id="form">
        <Sidebar />
        <div className='container'>
        <form autoComplete="false" onSubmit={this.handleSubmit} className="addPostForm">
          <label>
          <h1 className="mb-5">Leave a message for Ezra</h1>
            <input type="text" className="inputTitle mb-1" name="headContent" placeholder="Your Name" onChange={this.handleTitleChange} /> <br/>
            <textarea type="text" className="inputContent mt-1" name="postContent" placeholder="Your Message" onChange={this.handleChange} />
            <br/>
            <input type="submit" className="inputSubmit mt-2" value="Add To The Time Capsule" />
          </label>
        </form>
        </div>
        <div className="button" id="butt" onClick={this.returnHome}>
           <h2>Return Home</h2>
        </div>
    </div>
    );
  }
}

export default BabyBlog;