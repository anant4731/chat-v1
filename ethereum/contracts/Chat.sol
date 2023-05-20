pragma solidity ^0.8.9;

contract Chat {
    mapping(bytes32 => string[]) allMessages;
    address public manager;
    function generateHash(address pubkey1, address pubkey2) internal pure returns(bytes32) {
        if(pubkey1 < pubkey2)
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        else
            return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    constructor() public {
      manager = msg.sender;   
   }

    function send(address p_key, string memory message) public{
        address sender = msg.sender;
        address reciever = p_key;

        bytes32 uniqueHash = generateHash(sender, reciever);

        allMessages[uniqueHash].push(message);

    }

    function read(address p_key) public view returns(string[] memory){
        address sender = msg.sender;
        address reciever = p_key;

        bytes32 uniqueHash = generateHash(sender, reciever);

        return allMessages[uniqueHash];
    }

}