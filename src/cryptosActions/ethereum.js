const Web3 = require("web3");

const web3 = new Web3(
  new Web3.providers.HttpProvider("https://ropsten.infura.io/")
);

export function createAccount() {
  return web3.eth.accounts.create(web3.utils.randomHex(32));
}

export function getBalance(publicKey) {
  return new Promise(function(resolve, reject) {
    web3.eth.getBalance(publicKey, function(error, wei) {
      if (!error) {
        var balance = web3.utils.fromWei(wei, "ether");

        resolve(balance);
      } else {
        reject(error);
      }
    });
  });
}
