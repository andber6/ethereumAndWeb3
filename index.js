var Web3 = require('web3')
var EthereumTx = require("ethereumjs-tx").Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// var url = 'HTTP://127.0.0.1:7545' // Port 8545 if using ganache-cli
var sendingAddress = '0x867099C52d21A7655b752661C08f183b6f89ba92'
var receivingAddress = '0x4A2D8D30a9E733c4f5f1edEa5095b1fd3E3383aC'

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// var web3 = new Web3(url)
var rawTransaction = { 
    nonce: 0, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x" 
}
// web3.eth.getAccounts().then(accounts => console.log(accounts));
// web3.eth.getAccounts().then(accounts => console.log(accounts[0]));
var privateKeySender = 'daf245f217c34506a5f3a0d19f7fb5fb9b755049ff372c4859579cf41434aa12'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTx(rawTransaction)
transaction.sign(privateKeySenderHex)

web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);