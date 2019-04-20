import React, { Component } from 'react';
import Web3 from 'web3';

class Header extends Component {

    componentWillMount(){

    }

    constructor(props){
        super(props);
        this.state = {

        };
        //this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return(
            <div className="header">
                
                <div className="headerDiv" id="headerBackground" >
                    <div className="headText">
                        <h1 className="headH1">Dear
                        <span className="cursiveH1"> Ezra,</span><br/>
                            <span className="lowerText">A Time Capsule</span>
                        </h1>
                    </div>
                </div>

            </div>
        );
    }

}

export default Header;