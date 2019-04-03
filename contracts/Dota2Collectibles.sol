pragma solidity >=0.5.0 <0.6.0;

import 'multi-token-standard/contracts/tokens/ERC1155/ERC1155.sol';

// we can do multiple extend with a coma is ERC1155, ERC1155TokenReceiver
contract Dota2Collectibles is ERC1155 {
  address public owner;

  // TODO:
  // create item
  // create mint item to create multiple id of a same token?
  // getAllItems
  // getSingleItem by wallet address

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function createItem() public onlyOwner {

  }

  function mintItems() public {

  }

}