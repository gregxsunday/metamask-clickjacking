const currentUrl = new URL(window.location.href)
const forwarderOrigin = currentUrl.hostname === 'localhost'
  ? 'http://localhost:8889'
  : undefined

var new_window;

function openWindowConnect(){
  new_window = window.open('/connect-account.html', '_blank', 'location=yes,height=1080,width=1920,scrollbars=yes,status=yes')
}

function openWindowTransact(){
  new_window = window.open('/transact.html', '_blank', 'location=yes,height=1080,width=1920,scrollbars=yes,status=yes')
}

const initialize = async () => {
  const { ethereum } = window

  const transactionParameters = {
    gasPrice: '20000000000', // customizable by user during MetaMask confirmation.
    gas: '21000', // customizable by user during MetaMask confirmation.
    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970', // Required except during contract publications.
    from: '0x89B8b196D1a9abdb0FE8CDB4b57eE13b0C6755d3', // must match user's active address.
    value: '0x00', // Only required to send ether to the recipient from the initiating external account.
    data:
      '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
    chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };

  ethereum.request({method: 'eth_requestAccounts'}).then(() => {
    new_window.close();
    ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    setTimeout(openWindowTransact, 500)
  })
  setTimeout(openWindowConnect, 500)
}

window.addEventListener('DOMContentLoaded', initialize)