const Web3 = require("web3");
const web3 = new Web3(
  "https://rinkeby.infura.io/v3/e307bafa6fb549feacfa3bc898cb924e"
);

const Private_key =
  "b0dbbc4da82c375c51f8e7e5a139e0202380df58e13639a919de0f5b6abde56b";

const from_address = "0xBdcC79911ff52561485E7a66F312Cb6EEcdd9aa9";

const to_address = "0x09dcd7083BA7f920b3DA01948614bCA58e74Cf80";

async function eth_transaction() {
  var value = web3.utils.toWei("0.1", "ether");
  var SignedTransaction = await web3.eth.accounts.signTransaction(
    {
      to: to_address,
      value: value,
      gas: 2000000,
    },
    Private_key
  );

  web3.eth
    .sendSignedTransaction(SignedTransaction.rawTransaction)
    .then((receipt) => {
      console.log(receipt);
    });
}

eth_transaction();
