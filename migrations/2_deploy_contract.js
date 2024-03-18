const Company = artifacts.require('Company');

module.exports = function(deployer) {
    // Example address for the contract owner
    const ownerAddress = "0x8131f760b9f658b438206a0bb992b0435ac2e081"; // Replace with the actual address

    deployer.deploy(Company, ownerAddress); 
}
