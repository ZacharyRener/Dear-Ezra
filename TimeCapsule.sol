pragma solidity ^0.5.0;

contract Blog {

    struct Post {
        string authorContent;
        string bodyContent;
    }

    uint256 public unlockDate;
    uint public blogCount;
    address hollyAndJosh;
    mapping(uint => Post) private Posts;
    
    constructor() public {
        blogCount = 1;
        Posts[1] = Post("Uncle Zach","Hi Ezra!! Today is 4/6/2019, and you're in my sister's belly! We're even having your babyshower tomorrow. Now you're about to turn 10, so happy early birthday little man. I'll leave the rest of the talking to your parents :)");
        unlockDate = 1872291600;
        hollyAndJosh = 0xAc1B4B96bBaF6F9E9b1785195898d151E3FF50F9;
    }

    function getBodyContent(uint index) public view returns (string memory) {
        require(msg.sender==hollyAndJosh);
        return (block.timestamp >= unlockDate)
            ? Posts[index].bodyContent
            : "LOCKED";
    }

    function getAuthorContent(uint index) public view returns (string memory) {
        return Posts[index].authorContent;
    }

    function addPost( string memory authorContent, string memory postContent ) public {
        require(msg.sender==hollyAndJosh);
        Posts[++blogCount] = Post(authorContent, postContent);
    }

}