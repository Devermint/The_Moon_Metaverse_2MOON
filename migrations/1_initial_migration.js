const ERC = artifacts.require("ERC20Mock.sol");

module.exports = async function (deployer) {
  await deployer.deploy(
    ERC,
    'The Moon Metaverse',
    '2MOON',
    18,
    "100000000000000000000000000000"
  );
  const token = await ERC.deployed();
};
