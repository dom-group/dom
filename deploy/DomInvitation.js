require('dotenv').config()
module.exports = async function ({ getNamedAccounts, deployments }) {

    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();

    const domAddress = (await deployments.get("Dom")).address;
    const domPool = await deployments.get("DomPool");
    const priceLibraryAddress = (await deployments.get("PriceLibrary")).address;

    const usdt = process.env.USDT;
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
    }).then((res)=>{
        domPool.execute({
            methodName: 'setInviter',
            args: [res.address],
        });
    })
  };
  
  module.exports.tags = ["DomInvitation"];
  module.exports.dependencies = ["Dom","DomPool","PriceLibrary"];