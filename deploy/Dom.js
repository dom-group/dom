module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments
  
    const { deployer } = await getNamedAccounts()
    console.log(deployer,"000000000000000000000")
  
    await deploy("Dom", {
      from: deployer,
      log: true,
    })
  }
  
  module.exports.tags = ["Dom"]