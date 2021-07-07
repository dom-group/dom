require('dotenv').config()
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { execute } = deployments
  
    const { deployer } = await getNamedAccounts()

    const domAddress = (await deployments.get("Dom")).address;
    const invitationAddress = (await deployments.get("DomInvitation")).address;

    const usdt = process.env.USDT;
    const btc = "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c";
    const eth = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
  
    await execute('DomPool', {from: deployer}, 'setInviter', invitationAddress);
    await execute('DomPool', {from: deployer}, 'add',  domAddress,domAddress,200,[100,100,100],[100,100,100]);
    await execute('DomPool', {from: deployer}, 'add',  usdt,domAddress,120,[100,120,150],[70,60,50]);
    await execute('DomPool', {from: deployer}, 'add',  btc,domAddress,120,[100,120,150],[70,60,50]);
    await execute('DomPool', {from: deployer}, 'add',  eth,domAddress,120,[100,120,150],[70,60,50]);
  }

  module.exports.dependencies = ["Dom", "DomInvitation","DomPool"];
  module.exports.runAtTheEnd = true;