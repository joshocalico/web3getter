const DashboardMinter = artifacts.require("DashboardMinter");


module.exports = function(deployer) {
  deployer.deploy(DashboardMinter);
};