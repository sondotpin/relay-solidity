// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.11;

import "@openzeppelin/contracts/cryptography/ECDSA.sol";
import "./interfaces/IRelayProxy.sol";
import "./interfaces/IERC20OrderRouter.sol";

contract RelayProxy is IRelayProxy {
    using ECDSA for bytes32;
    IERC20OrderRouter router;

    constructor(address _router) public {
        router = IERC20OrderRouter(_router);
    }
  
    // verify the data and execute the data at the target address
    function executeTransaction(address _signer, bytes calldata _data, bytes memory _signature) override external returns (bytes memory _result) {
        verifySignature(_signer, _data, _signature);
    
        (bool success, bytes memory result) = address(this).delegatecall(_data);
        if (!success) {
            // solhint-disable-next-line no-inline-assembly
            assembly {
                returndatacopy(0, 0, returndatasize())
                revert(0, returndatasize())
            }
        }
        return result;
    }
    
    // Recover signer public key and verify that it's a whitelisted signer.
    function verifySignature(address _signer, bytes calldata _data, bytes memory signature) override public view {
        require(_signer != address(0), "invalid target address");
        
        bytes memory payload = abi.encode(_data);
        address signerAddress = keccak256(payload).toEthSignedMessageHash().recover(signature);
        require(signerAddress == _signer, "Signature validation failed");
    }
}