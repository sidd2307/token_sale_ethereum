// want our smart contract to be bug free.
var DappToken = artifacts.require("./DappToken.sol")

//give us all accounts that are available; provided by Ganache
contract('DappToken', function (accounts) {
    it('sets the total supply upon deloyment', function () {
        return DappToken.deployed().then(function (instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function (totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000')
        })
    });
})