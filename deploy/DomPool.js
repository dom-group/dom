require('dotenv').config()
module.exports = async function ({ getNamedAccounts, deployments }) {

    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();

    const domAddress = (await deployments.get("Dom")).address;
    const priceLibraryAddress = (await deployments.get("PriceLibrary")).address;

    const usdt = process.env.USDT;
    const factory = process.env.FACTORY;
    const domsPerBlock = process.env.DOMSPERBLOCK;
    const startBlock = process.env.STARTBLOCK;
    const feeOwner = process.env.FEEOWNER;
  
    await deploy("DomPool", {
      from: deployer,
      args: [usdt,factory, domAddress,domsPerBlock,startBlock,feeOwner],
      log: true,
      libraries: {
        PriceLibrary: priceLibraryAddress
      }
    });
  };
  
  module.exports.tags = ["DomPool"];
  module.exports.dependencies = ["Dom","PriceLibrary"];
