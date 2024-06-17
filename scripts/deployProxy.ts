
import { ethers, upgrades } from "hardhat"

async function main() {
  const VendorV1 = await ethers.getContractFactory("VendorV1");
  const proxy = await upgrades.deployProxy(VendorV1, [69])

  await proxy.waitForDeployment();

  const proxyAddress = await proxy.getAddress()
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress)

  console.log("proxy contract address :" + proxyAddress)
  console.log("implementation contract address :" + implementationAddress)
}

main()
