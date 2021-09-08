// artifacts allows us to create a contract extraction to run in a js frontend
var DappToken = artifacts.require("./DappToken.sol");

module.exports = function (deployer) {
    deployer.deploy(DappToken);
};

