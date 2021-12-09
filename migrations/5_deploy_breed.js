const MasterBreeder = artifacts.require('MasterBreeder');
const GovernanceToken = artifacts.require('../build/GovernanceToken');

module.exports = async function (deployer) {
   await deployer.deploy(MasterBreeder, 
        GovernanceToken,
        '0xA63e31007B5054EAbD66135cC1659645FC08DD68',
        '0xBA53F66587ebfc41A8Aac64047Eeb6BC070E26a4',
        '0x99dB7F7fbd889d4f53aCB1ED9c52e3de93ae27Ce',
        '0x8074ec922b8c4a0475C273De929133AdB31d5728',
    );
}