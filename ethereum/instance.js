import web3 from './web3';

import Chat from './build/Chat.json';

const instance = new web3.eth.Contract(
  Chat.abi,
  '0xc9c32F14a8e9a052eD90fa625FD05de5f8e5C8E9'
);
export default instance;
