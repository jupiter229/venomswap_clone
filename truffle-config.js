const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
const mnemonic = "head soldier frog mom medal gap drill leisure pottery thought unique sauce"

module.exports = {
    networks: {
        development: {
            networkCheckTimeout: 10000,  // NB: this option does nothing
            provider: () => new HDWalletProvider(
            mnemonic,
            // 'https://api.s0.b.hmny.io/',
            'http://127.0.0.1:7545'
            ),
            network_id: 5777,
            skipDryRun: true
      }
    },
  
    // Set default mocha options here, use special reporters etc.
    mocha: {
      // timeout: 100000
    },
  
    // Configure your compilers
    compilers: {
      solc: {
        version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        settings: {          // See the solidity docs for advice about optimization and evmVersion
         optimizer: {
           enabled: false,
           runs: 200
         },
        //  evmVersion: "byzantium"
        }
      }
    },
  };
  