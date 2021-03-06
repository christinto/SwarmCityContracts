// var HDWalletProvider = require("truffle-hdwallet-provider");

// var mnemonic = "";
// var provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 18545,
      network_id: "*"
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "1"   // Match any network id
    },
    // ropsten: {
    //       provider: provider,
    //       network_id: 3 // official id of the ropsten network
    // }
  }
};
