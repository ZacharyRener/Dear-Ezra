import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Sidebar from './sidebar.js';
import Header from './header.js';
import BabyBlog from './babyBlog.js';
import { BABY_BLOG_ABI, BABY_BLOG_ADDRESS } from './config';
require('dotenv');

class Capsules extends Component {

  componentWillMount() {
    this.loadBlockchainData();
    
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const babyBlog = new web3.eth.Contract(BABY_BLOG_ABI, BABY_BLOG_ADDRESS);
    this.setState({ babyBlog });
    const theBlogCount = await babyBlog.methods.blogCount().call();
    this.setState({ blogCount: theBlogCount });
    console.log("babyBlog:", babyBlog);
    for(let i=1; i<=theBlogCount; i++){
      const author = await babyBlog.methods.getAuthorContent(i).call()
      this.setState({
        dataAndAuthors:[...this.state.dataAndAuthors, 
          {"src": "mail.svg", "author":author}
        ]
      })
    }
  }

  constructor(props){
    super(props);
    this.state = {
      account: '',
      blogCount: 0,
      Posts: [],
      bodyValue: '',
      titleValue: '',
      list: [],
      data: [],
      authors: [],
      dataAndAuthors: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    this.state.babyBlog.methods.addPost(this.state.titleValue, this.state.bodyValue).send({from: this.state.account})
    .once('receipt', receipt => {
      this.setState({
        Posts: [...this.state.Posts, {0: this.state.titleValue, 1: this.state.bodyValue, headContent: this.state.titleValue, bodyContent: this.state.bodyValue}]
      });
    });
  }

  handleChange(event){
    this.setState({bodyValue: event.target.value})
  }

  handleTitleChange(event){
    this.setState({titleValue: event.target.value})
  }

  handleMemoryButtonClick(event){
    event.preventDefault();
    let header = document.getElementById("headerBackground");
    header.classList.add("addMemory");
    let blog = document.getElementById("mainBlog");
    blog.classList.add("hide");
    let babyblog = document.getElementById("form");
    babyblog.classList.remove("hide");
  }

  loadCapsules(){
    
  }

  render() {
    this.loadCapsules();
    return (
        <div id="mainBody">
            <div className="BabyBlog" id="mainBlog">
                <Sidebar />
                <div className = "images">
                {this.state.dataAndAuthors.map((d,idx)=>{
                  return (
                    <figure key={idx}>
                      <img alt="x" className="capsule"  src={d.src} />
                      <figcaption >From: {d.author}</figcaption>
                    </figure>
                  )
                })}
                </div>
                <div className="button" id="butt" onClick={this.handleMemoryButtonClick}>
                    <h2>Leave A Message</h2>
                </div>
            </div>
            <BabyBlog />
        </div>
    );
  }
}

export default Capsules;