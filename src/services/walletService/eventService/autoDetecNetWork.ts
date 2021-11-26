const Moralis = require('moralis');

export const changeNetWork = async function () {
  if (localStorage.hasOwnProperty('extensionName')) {
    const chainId = await Moralis.getChainId();
    let id, idNetWork, chainName;
    if (process.env.REACT_APP_BLOCKCHAIN_NETWORK === 'MAINNET') {
      id = '0x38';
      idNetWork = 56;
      chainName = 'Smart Chain';
      autoSwitchNetWork(id, idNetWork, chainName);
    } else if (process.env.REACT_APP_BLOCKCHAIN_NETWORK === 'TESTNET') {
      id = '0x61';
      idNetWork = 97;
      chainName = 'Smart Chain - Testnet';
      autoSwitchNetWork(id, idNetWork, chainName);
    }
  } else {
    window.alert('you need connect wallet, if you want use network!');
  }
};

// switch Network
const autoSwitchNetWork = async (id, idNetWork, chainName) => {
  try {
    await Moralis.switchNetwork(id);
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        autoAddNetWork(idNetWork, chainName);
      } catch (addError) {
        console.log('Error', addError);
      }
    }
  }
};

//add Network
const autoAddNetWork = async (idNetWork, chainName) => {
  const currencyName = 'BNB';
  const currencySymbol = 'BNB';

  await Moralis.addNetwork(
    idNetWork,
    chainName,
    currencyName,
    currencySymbol,
    process.env.REACT_APP_RPC_NETWORK,
    process.env.REACT_APP_BLOCK_EXPLORER_URL,
  );
};
