import instance from '../ethereum/instance';
import Web3 from 'web3';
export default function Home(props) {
  let web3;
  const walletConnectHandler = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      // We are in the browser and metamask is running.
      window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
    } else {
      // We are on the server *OR* the user is not running metamask
      // const provider = new Web3.providers.HttpProvider(
      //   'https://sepolia.infura.io/v3/d72e7f41fa53480c9b5076a9d7b898e1'
      // );
      // web3 = new Web3(provider);
    }
  };
  return (
    <div>
      <button onClick={walletConnectHandler}>Connect wallet</button>
      {/* <h1>{props.test} sdfdsf</h1>{' '} */}
    </div>
  );
}

// export async function getServerSideProps() {
//   console.log(await instance.methods.manager().call());
//   console.log('web3 - ', web3.version);
//   const accounts = await web3.eth.getAccounts();
//   console.log(accounts);
//   const test = await instance.methods
//     .read('0x89F44e8248890e3E6B1C010e77b427dE53EDFf77')
//     .call();
//   console.log('test - ', test);
//   return { props: { test } };
// }
