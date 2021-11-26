import { accountsChanged } from './eventService/accountsChanged';
import { isEmpty } from 'lodash';
import { getBalance } from './supportService/getBalance';
import { changeNetWork } from './eventService/autoDetecNetWork';
import { loginSignature } from './supportService/loginSignature';

/**
 *
 */
export default class Web3 {
  private static _instance: Web3;
  private _init: any = {};

  private constructor() {
    if (Web3._instance) throw new Error('Use Web3.instance instead of new.');
  }

  public static get getInstance(): Web3 {
    if (!Web3._instance) {
      Web3._instance = new Web3();
    }

    return Web3._instance;
  }

  public setWeb3 = async (
    extensionName = localStorage.getItem('extensionName'),
  ) => {
    const Moralis = require('moralis');
    if (extensionName === 'WalletConnect') {
      try {
        await Moralis.enableWeb3({
          provider: 'walletconnect',
          chainId: 56, //hard code
        });
      } catch (e) {
        console.error(e, 9999);
      }
    } else {
      this._init = await Moralis.enableWeb3();
    }

    const accounts = await this._init.eth?.getAccounts();

    if (!isEmpty(accounts)) {
      await loginSignature(accounts[0]);
      await getBalance(accounts[0]);
      // lam tiep luu trong store cua React (Au lam)
      await accountsChanged();
      await changeNetWork();
    }
  };

  public getWeb3(): object {
    return this._init;
  }
}
