import Web3 from '../initWeb3';

export const getGasInformation = async txRaw => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();
  const gasPrice = await web3.eth.getGasPrice();
  let gasLimit = 0;
  try {
    gasLimit = await web3.eth.estimateGas(txRaw);
  } catch (error) {
    gasLimit = 4000000;
    console.log(error, 'error gas');
  }

  return {
    gasPrice,
    gasLimit,
  };
};
