// import Web3 from 'web3';

// let web3;

// if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
//   window.ethereum.request({ method: 'eth_requestAccounts' });
//   web3 = new Web3(window.ethereum);
// } else {
//   const provider = new Web3.providers.HttpProvider(
//     'https://sepolia.infura.io/v3/0f6a34a23b974fa3a05a4e8f70472aba'
//   );
//   web3 = new Web3(provider);
// }

// export default web3;

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/d72e7f41fa53480c9b5076a9d7b898e1'
  );
  web3 = new Web3(provider);
}
console.log(web3.eth.accounts);
export default web3;
