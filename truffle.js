var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = process.env.ROPSTEN_MNEMONIC;
var infura_apikey = process.env.INFURA_ACCESS_TOKEN;


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      gas: 2000000
    }
  }
};