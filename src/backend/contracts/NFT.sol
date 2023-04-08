// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//ERC721URIStorage contract is being inherited using is keyword
contract NFT is ERC721URIStorage {
    uint256 public tokenCount; //keeps track of number of tokens minted

    constructor() ERC721("DApp NFT", "DAPP") {} //initializing constructor of inherited contract

    //function to store the TOKEN_URI of ipfs(i.e metadata of nft) and returns the current token count of the nft
    function mint(string memory _tokenURI) external returns (uint256) {
        tokenCount++;
        _safeMint(msg.sender, tokenCount); //the sender is assigned the nft tokenCount
        _setTokenURI(tokenCount, _tokenURI); //the tokenCount/tokenId is mapped to its token_uri
        return (tokenCount);
    }
}
