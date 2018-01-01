const KasajeiToken = artifacts.require('./KasajeiToken.sol')

module.exports = (deployer) => {
  let initialSupply = 50000e18
  deployer.deploy(KasajeiToken, initialSupply)
}