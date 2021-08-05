"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayProxyFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class RelayProxyFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_router, overrides) {
        return super.deploy(_router, overrides || {});
    }
    getDeployTransaction(_router, overrides) {
        return super.getDeployTransaction(_router, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RelayProxyFactory = RelayProxyFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_router",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes",
            },
        ],
        name: "executeTransaction",
        outputs: [
            {
                internalType: "bytes",
                name: "_result",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verifySignature",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516107993803806107998339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610734806100656000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806324e359e71461003b5780637895a15214610141575b600080fd5b61013f6004803603606081101561005157600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561007b57600080fd5b82018360208201111561008d57600080fd5b803590602001918460018302840111600160201b831117156100ae57600080fd5b919390929091602081019035600160201b8111156100cb57600080fd5b8201836020820111156100dd57600080fd5b803590602001918460018302840111600160201b831117156100fe57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102ba945050505050565b005b6102456004803603606081101561015757600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561018157600080fd5b82018360208201111561019357600080fd5b803590602001918460018302840111600160201b831117156101b457600080fd5b919390929091602081019035600160201b8111156101d157600080fd5b8201836020820111156101e357600080fd5b803590602001918460018302840111600160201b8311171561020457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103ea945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027f578181015183820152602001610267565b50505050905090810190601f1680156102ac5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6001600160a01b03841661030e576040805162461bcd60e51b8152602060048201526016602482015275696e76616c696420746172676574206164647265737360501b604482015290519081900360640190fd5b6060838360405160200180806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505093505050506040516020818303038152906040529050600061037a83610374848051906020012061047a565b906104cb565b9050856001600160a01b0316816001600160a01b0316146103e2576040805162461bcd60e51b815260206004820152601b60248201527f5369676e61747572652076616c69646174696f6e206661696c65640000000000604482015290519081900360640190fd5b505050505050565b60606103f8858585856102ba565b60006060306001600160a01b031686866040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610457576040519150601f19603f3d011682016040523d82523d6000602084013e61045c565b606091505b509150915081610470573d6000803e3d6000fd5b9695505050505050565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114610523576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6104708682858560007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561059d5760405162461bcd60e51b81526004018080602001828103825260228152602001806106bb6022913960400191505060405180910390fd5b8360ff16601b14806105b257508360ff16601c145b6105ed5760405162461bcd60e51b81526004018080602001828103825260228152602001806106dd6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610649573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166106b1576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b9594505050505056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220f5ccad0ed4d9e57c82584600afdb8424c0ba3544f3d03c4f637eb8968402e5ab64736f6c634300060c0033";
//# sourceMappingURL=RelayProxyFactory.js.map