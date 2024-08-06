
require("dotenv").config()
import { ethers } from "hardhat"
import vendorContractMetadata from "../artifacts/contracts/VendorV1.sol/VendorV1.json";
const contractAbi = vendorContractMetadata.abi
const proxyAddress = process.env.PROXY_ADDRESS;

async function checkVersion() {

  console.log("proxyAddress: " + proxyAddress)
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545")
  const signer = await provider.getSigner()
  const vendorContract = new ethers.Contract(proxyAddress as string, contractAbi, signer)

  const owner = await vendorContract.getOwner()
  const myAddress = await vendorContract.getMyAddress()

}
checkVersion()
