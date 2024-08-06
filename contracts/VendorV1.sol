// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract VendorV1 is Initializable {

  uint public numSodas;
  address public owner;

  function initialize(uint _numSodas) public initializer {
    numSodas = _numSodas;
    owner = msg.sender;
  } 

  function purchaseSoda() public payable {
    require(msg.value >= 1000 wei, "You must pay 1000 wei for a soda!");
    numSodas--;
  }

  function checkVersion() external view returns(string memory){
    require(msg.sender == owner, "onlyOwnerCallable");
    return "v1";
  }

  function getOwner() external view returns(address){
    return owner;
  }

  function getMyAddress()external view returns(address){
    return msg.sender;
  }
}
