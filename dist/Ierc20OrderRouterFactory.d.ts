import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Ierc20OrderRouter } from "./Ierc20OrderRouter";
export declare class Ierc20OrderRouterFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc20OrderRouter;
}
