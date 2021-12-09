const GovernanceToken = artifacts.require('GovernanceToken');
module.exports = async function (deployer) {
   await deployer.deploy(GovernanceToken, 
     "testoken", 
     "TST",
     "1000000000000000000000000",
     "1000000000000000000000000",
     "0",
     "500"
    );
}