const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledChat = require('./build/Chat.json');

const provider = new HDWalletProvider(
  'venue embark ahead alert illegal object citizen bottom split dust caught style',
  'https://sepolia.infura.io/v3/0f6a34a23b974fa3a05a4e8f70472aba'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledChat.abi)
    .deploy({ data: compiledChat.evm.bytecode.object })
    .send({ gas: '1400000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
