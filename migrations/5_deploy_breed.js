const MasterBreeder = artifacts.require('MasterBreeder');
const GovernanceToken = artifacts.require('../build/GovernanceToken');

module.exports = async function (deployer) {
   await deployer.deploy(MasterBreeder, 
    GovernanceToken,
    '0xA63e31007B5054EAbD66135cC1659645FC08DD68',
    
    );
}