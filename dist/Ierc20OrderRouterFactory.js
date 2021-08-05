"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ierc20OrderRouterFactory = void 0;
const ethers_1 = require("ethers");
class Ierc20OrderRouterFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Ierc20OrderRouterFactory = Ierc20OrderRouterFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_module",
                type: "address",
            },
            {
                internalType: "address",
                name: "_inputToken",
                type: "address",
            },
            {
                internalType: "address payable",
                name: "_owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "_witness",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "_secret",
                type: "bytes32",
            },
        ],
        name: "depositToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=Ierc20OrderRouterFactory.js.map