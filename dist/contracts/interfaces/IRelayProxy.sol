// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.6.12;

interface IRelayProxy {
    function executeTransaction(address _signer, bytes calldata _data, bytes memory _signature) external returns (bytes memory _result);
    function verifySignature(address _signer, bytes calldata _data, bytes memory signature) external view;
}