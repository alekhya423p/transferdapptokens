import React, { useState } from 'react';
import './App.css';
import { ExportToCsv } from 'export-to-csv';
import { TextField } from '@material-ui/core';

const Web3 = require('web3')
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/v3/e1c1766ff1094be687df3b73baefaf27"));
//web3.eth.getAccounts(console.log);

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_initialSupply",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "standard",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }

]

const contractAddress = '0xC4a4DC3F83A69038eeFDC2336BfAF4742F0BD9C5' // Paste the smart contract address here after you have deployed it
var myContractInstance = new web3.eth.Contract(abi, contractAddress);

let account = "0xf9A1024Dc5F0808b181D22b9160423AeAC8960Fa"

let privatekey = "2eed0f988d30161b216da2836bdfa19dc0d9f6b22ef92767e54f6bc2dd58e94a";
const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Private Keys Generator',
  useBom: true,
  useKeysAsHeaders: true,
  headers: ["Index", "From", "To", "TokenAmount", "Privatekey"]
}
const csvExporter = new ExportToCsv(options);

function App() {
  const [walletAddress, setGetData] = useState([]);
  const [textData, setTextdata] = useState('');
  const [tokenData, setTokenData] = useState('');
  const [receiptData, setReceiptData] = useState([]);


  const generateHandler = () => {
    const ethWallet = require('ethereumjs-wallet');
    let addressDatas = [];
    for (let index = 0; index < Number(textData); index++) {
      let addressData = ethWallet['default'].generate();
      addressDatas.push({ id: index + 1, privateKey: addressData.getPrivateKeyString(), address: addressData.getAddressString() })
    }
    setGetData(addressDatas);
  }

  const exportCSV = () => {
    let values = [];
    receiptData?.forEach((row, key) => {
      values.push({ Index: row.index, From: row.from, address: row.address, TokenAmount: row.token, Privatekey: row.privatekey });
    });
    csvExporter.generateCsv(values);
  };

  console.log({ walletAddress });

  async function transferHandler() {
    let toAddress = walletAddress.map((item) => item?.address);
    let receiptsData = [];
    console.log({ toAddress })
    for (let index = 0; index < walletAddress.length; index++) {
      console.log("token value", tokenData);
      console.log({ index });

      console.log("to address--------->", toAddress[index]);
      let min = 1;
      let max = tokenData;
      let tokenamount = parseFloat(min + (Math.random() * (max - min))).toFixed();
      console.log("token amount ", tokenamount);
      const networkId = await web3.eth.net.getId();
      const mint = await myContractInstance.methods.transfer(walletAddress[index].address, tokenamount)
      const gas = await mint.estimateGas({ from: account })
      console.log("gas price------------->", gas);
      const data = mint.encodeABI();
      const nonce = await web3.eth.getTransactionCount(account)
      const signedTx = await web3.eth.accounts.signTransaction({
        to: myContractInstance.options.address,
        data,
        gas,
        nonce: nonce,
        chainId: networkId
      }, privatekey)
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      receiptsData.push({ ...receipt, token: tokenamount, index: index, address:walletAddress[index].address, privatekey: walletAddress[index].privateKey });
      console.log("reciept-------------->", receipt);
      console.log("reciptData = ", receiptData);
    }
    setReceiptData(receiptsData);
  }

  return (
    <div className="App">
      <div className="buttonFirst">
        <TextField
          className="textclass"
          label="enter the value"
          id="textValue"
          variant="outlined"
          type="number"
          value={textData}
          onChange={(e) => setTextdata(e.target.value)}
        />

        <button
          className="generateButton"
          onClick={generateHandler}
        >generte address
        </button>

        <TextField
          className="textclass"
          label="enter the token value"
          id="textValue"
          variant="outlined"
          type="number"
          value={tokenData}
          onChange={(e) => setTokenData(e.target.value)}
        />

        <button
          className="generateButton"
          disabled={tokenData ? false : true}
          onClick={transferHandler}
        >Transfer
        </button>


        <button
          variant="outlined"
          className="generateButton"
          onClick={() => exportCSV()}
          disabled={receiptData?.length > 0 ? false : true}
        >
          Export to CSV
        </button>
      </div>
    </div>
  );
}

export default App;