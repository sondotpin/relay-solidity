import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { RelayProxy } from "./RelayProxy";
export declare class RelayProxyFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_router: string, overrides?: Overrides): Promise<RelayProxy>;
    getDeployTransaction(_router: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): RelayProxy;
    connect(signer: Signer): RelayProxyFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayProxy;
}
