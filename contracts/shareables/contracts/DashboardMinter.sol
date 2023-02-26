// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract DashboardMinter {
    address public minter;

    constructor() {
        minter = msg.sender;
    }
}
