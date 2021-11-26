import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { authService } from 'services/authService';
import Web3 from '../initWeb3';
import { store } from 'index';
// import { signInActions as actions } from 'app/components/DfyAuth/DfyLogin/slice';
// import { headerStateActions } from 'app/components/DfyHeader/slice';
import { walletAction } from 'store/globalReducer';

export const loginSignature = async (walletAddress: string) => {
  if (_isEmpty(localStorage.getItem('lastToken'))) {
    const data = await authService.getNonce({ walletAddress });

    const signature = await signNonce(walletAddress, _get(data, 'data.data'));
    const loginParams = {
      walletAddress,
      signature,
    };

    // store.dispatch(actions.signInSignatureRequest(loginParams));
  }
};

export const signNonce = async (address, nonce) => {
  const instanceValue = Web3.getInstance;
  const web3: any = instanceValue.getWeb3();

  let signature = '';
  try {
    signature = await web3.eth.personal.sign(String(nonce), address);
  } catch (error) {
    // store.dispatch(headerStateActions.logOutReq());
    store.dispatch(walletAction(null));

    localStorage.removeItem('StoreWallet');
    localStorage.removeItem('extensionName');
    // todo: notify => You must sign wallet signature to use the service
  }

  return signature;
};
