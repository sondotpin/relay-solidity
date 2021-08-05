import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRelayProxy } from "./IRelayProxy";
export declare class IRelayProxyFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRelayProxy;
}
