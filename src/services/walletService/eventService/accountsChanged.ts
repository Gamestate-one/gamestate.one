import { store } from 'index';
import { walletAction } from 'store/globalReducer';
import { getBalance } from '../supportService/getBalance';

declare global {
  interface Window {
    ethereum: any;
  }
}

//change account function
const Moralis = require('moralis');
export const accountsChanged = Moralis.onAccountsChanged(async function () {
  const storage = store.getState();
  const curAddress: any = storage.globalState.loggedInUser;

  const accounts = window.ethereum.selectedAddress;
  if (!curAddress?.email) {
    getBalance(accounts);
  } else {
    store.dispatch(walletAction(null));
    localStorage.removeItem('StoreWallet');
    localStorage.removeItem('extensionName');
    localStorage.removeItem('lastToken');
  }
  return accounts;
  // bỏ console.log lưu vào store
});
