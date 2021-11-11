const Migrations = artifacts.require("Migrations");
const PriceConsumer = artifacts.require("PriceConsumer");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(PriceConsumer);
};
