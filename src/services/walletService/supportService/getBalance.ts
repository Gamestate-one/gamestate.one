import BigNumber from 'bignumber.js';
import Web3 from 'web3';
import { store } from '../../../';
import { walletAction } from 'store/globalReducer';
const rpcURL: any = process.env.REACT_APP_RPC_NETWORK; // responesive code
const web3 = new Web3(rpcURL);

interface token {
  id: number;
  isWhitelistCollateral: boolean;
  isWhitelistSupply: boolean;
  usdExchange: number;
  isAcceptedAsCollateral: null;
  isAcceptedAsLoan: null;
  isAcceptedRepayment: null;
  symbol: string;
  address: string;
}

export const getBalance = async (walletAddress: string) => {
  const StoreCryptoCurrency = JSON.parse(
    localStorage.getItem('StoreCryptoCurrency') || '{}',
  );

  if (
    StoreCryptoCurrency &&
    Object.keys(StoreCryptoCurrency).length === 0 &&
    Object.getPrototypeOf(StoreCryptoCurrency) === Object.prototype
  ) {
    console.log('No StoreCryptoCurrency');
  } else {
    const supportSymbol: token[] = StoreCryptoCurrency;
    let money = await Promise.all(
      Object.values(supportSymbol).map(async e => {
        let symbol = e.symbol;
        if (symbol === 'BNB') {
          let userBalance: any = 0;
          try {
            userBalance = await web3.eth.getBalance(walletAddress);
            return {
              symbol: symbol,
              balance: Number(
                new BigNumber(userBalance).dividedBy(10 ** 18).toFixed(),
              ),
            };
          } catch (err) {
            userBalance = 0;
            console.log(err);
          }
        } else {
          const tokenAddress = e.address;
          const erc20Abi = require('../config/erc20.abi.json');
          const tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
          let userBalance = 0;
          try {
            userBalance = await tokenContract.methods
              .balanceOf(walletAddress)
              .call();
          } catch (error) {
            console.log(error);
          }
          return {
            symbol: symbol,
            balance: Number(
              new BigNumber(userBalance).dividedBy(10 ** 18).toFixed(),
            ),
          };
        }
      }),
    );
    const storeWallet = {
      currentAddress: walletAddress,
      money: money,
    };

    if (walletAddress) {
      localStorage.setItem('StoreWallet', JSON.stringify(storeWallet));
      store.dispatch(walletAction(storeWallet));
    } else {
      localStorage.setItem('StoreWallet', '');
      store.dispatch(walletAction(null));
    }
  }
};
