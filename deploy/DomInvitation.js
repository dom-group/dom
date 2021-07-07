require('dotenv').config()
module.exports = async function ({ getNamedAccounts, deployments }) {

    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();

    const domAddress = (await deployments.get("Dom")).address;
    const domPool = await deployments.get("DomPool");
    const priceLibraryAddress = (await deployments.get("PriceLibrary")).address;

    const usdt = process.env.USDT;
    const btc = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
    const eth = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
    const factory = process.env.FACTORY;
    const root = process.env.ROOT;
  
    await deploy("DomInvitation", {
      from: deployer,
      args: [domPool.address,domAddress,root],
      log: true,
      libraries: {
        PriceLibrary: priceLibraryAddress
      },
      execute: {
        methodName: 'setFactory',
        args: [factory, usdt],
      }
    })
  };
  
  module.exports.tags = ["DomInvitation"];
  module.exports.dependencies = ["Dom","DomPool","PriceLibrary"];