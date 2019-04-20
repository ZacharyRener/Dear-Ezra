export const BABY_BLOG_ADDRESS = '0x0139ec1Fc1a987624AB8F4cddb42bD1c408d5d4D';
export const BABY_BLOG_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "unlockDate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x69ac5721"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "blogCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe8824299"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getBodyContent",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x43811fe0"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getAuthorContent",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd5ff26af"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "authorContent",
        "type": "string"
      },
      {
        "name": "postContent",
        "type": "string"
      }
    ],
    "name": "addPost",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xb02c6516"
  }
]