// @ts-ignore
import { ethers } from "hardhat";
import chai, { expect } from "chai";
import asPromised from "chai-as-promised";
import { RelayProxy } from '../typechain/RelayProxy';
import { RelayProxyFactory } from '../typechain/RelayProxyFactory';

chai.use(asPromised);

describe("Test Relay", () => {
  let relayProxy: RelayProxy;
  beforeEach(async () => {
    const [deployer, acc1] = await ethers.getSigners();
    relayProxy = await (await new RelayProxyFactory(deployer).deploy(acc1.address)).deployed();
  });

  it("#verifySignature", async () => {
    const data = "0x486046a800000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000519e9c406a7e5c6016efe687a011e67203419671000000000000000000000000519e9c406a7e5c6016efe687a011e67203419671000000000000000000000000519e9c406a7e5c6016efe687a011e67203419671000000000000000000000000519e9c406a7e5c6016efe687a011e6720341967100000000000000000000000000000000000000000000000000000000000000e0746573740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000207465737400000000000000000000000000000000000000000000000000000000";
    const signature = "0xd01fe0f3209380dc28a505b4b7e86c48b923d341f845e3f3d50b3faddaa8d95152d0fed28e356f63d84378a6f2cd0dda9945b258581ab3a76a93e03d25c8fcab1c";
    const signer = "0x519e9c406a7e5c6016efE687a011E67203419671";

    const check = await relayProxy.verifySignature(signer, data, signature);
    expect(check).to.eq(1);
  });
});