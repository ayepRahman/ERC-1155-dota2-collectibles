# ERC-1155-dota2-collectibles

This is a work-in-progress implementation of ERC-1155 based on the discussions in the [EIP-1155 issue thread.](https://github.com/ethereum/EIPs/issues/1155)

## Motivation

I'am an avid gamer who love playing dota2 and buying their items on marketplace. The issues i find, it a challenge to invest and liquidify my digital asset.
DApp like cryptokitties inspire me to create this simple project. Here i want to create a simple project that lets ANY users (for now) to create a non-fungible-token
using the new ERC1155. User will need to install metamask to use this project for signing a transaction. User will be able to see the list of newly create NFT items.
They will also able to buy item on the platform.

## ERC-1155 Metadata URI JSON Schema

This JSON schema is loosely based on the "ERC721 Metadata JSON Schema", but includes optional formatting to allow for ID substitution by clients.
If the string {id} exists in any JSON value, it MUST be replaced with the actual token ID, by all client software that follows this standard.

The string format of the substituted hexadecimal ID MUST be lowercase alphanumeric: [0-9a-f] with no 0x prefix.

```
{
    "title": "Token Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this token represents",
        },
        "decimals": {
            "type": "integer",
            "description": "The number of decimal places that the token amount should display - e.g. 18, means to divide the token amount by 1000000000000000000 to get its user representation.",
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this token represents",
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
        },
        "properties": {
            "type": "object",
            "description": "Arbitrary properties. Values may be strings, numbers, object or arrays.",
        },
    }
}
```

## Checklists

### Client

- Connect with Metamask using web3-react
- Get the instance of web3.js
- Get the instance of smart contract
- Handle web3.js absence in the window
- Create from includes name, decimals, description, image and properties fields
- Display all the items in a listing page
- In the item display page, add a button to open up a modal to buy/trade/transfer item

### Smart Contract

- Create A non-fungible-token includes name, decimals, description, image and properties
- View newly created non-fungible-token.
- User able to buy/trade/transfer non-fungible-token.

## Note

This project is not affiliated with Steam and/or Lootmarket.
