// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DashboardMinter is ERC721URIStorage, Ownable {
    // Map user address to array of subaccount addresses
    mapping(address => address[]) private subaccounts;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("my room key", "ROOM") {}

    function mint(string memory tokenURI) external {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
    }

    // TODO: Delete subaccounts on burn or transfer 

    // Verify signature of subaccount and add to subaccounts array
    function addSubaccount(address subaccount, uint64 deadline, bytes memory signature) external {
        bytes32 message = keccak256(abi.encodePacked(subaccount, deadline));
        bytes32 messageHash = ECDSA.toEthSignedMessageHash(message);
        address signer = ECDSA.recover(messageHash, signature);
        require(signer == subaccount, "Invalid signature");
        require(deadline >= block.timestamp, "Signature expired");
        subaccounts[msg.sender].push(subaccount);
    }

    function getSubaccounts() external view returns (address[] memory) {
        return subaccounts[msg.sender];
    }
}