import Web3 from '../initWeb3';

interface txInterface {
  gasLimit?: number;
  gasPrice?: string;
  data: string;
  from: string;
  nonce: string;
  to: string;
  value: string;
}

export const signAndSendTx = async data => {
  const tx: txInterface = data.tx;
  tx.gasLimit = data.gasLimit;
  tx.gasPrice = data.gasPrice;

  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();

  const receipt = await web3.eth.sendTransaction(tx);
  return receipt;
};
