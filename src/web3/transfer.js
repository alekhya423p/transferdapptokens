// import React, { useState } from 'react';
// import './App.css';
// //import DappToken from '../contracts/DappToken.sol';
// //import "react-table-v6/react-table.css";
// import { ExportToCsv } from 'export-to-csv';
// import { TextField } from '@material-ui/core';

// const Web3 = require('web3')
// const web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/v3/e1c1766ff1094be687df3b73baefaf27"));
// //web3.eth.getAccounts(console.log);

// const abi = [
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "_initialSupply",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_owner",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_spender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Approval",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_from",
//         "type": "address"
//       },
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "Transfer",
//     "type": "event"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "allowance",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "balanceOf",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "name",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "standard",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "symbol",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "totalSupply",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transfer",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "success",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_spender",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "approve",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "success",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_from",
//         "type": "address"
//       },
//       {
//         "internalType": "address",
//         "name": "_to",
//         "type": "address"
//       },
//       {
//         "internalType": "uint256",
//         "name": "_value",
//         "type": "uint256"
//       }
//     ],
//     "name": "transferFrom",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "success",
//         "type": "bool"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }

// ]


// const contractAddress = '0xDc6E75de4b3355EFcF45741f106Fdf1eCAdF9fF7' // Paste the smart contract address here after you have deployed it
// var myContractInstance = new web3.eth.Contract(abi, contractAddress);

// const csvExporter = new ExportToCsv();

// function App() {
//   const [walletAddress, setGetData] = useState([]);
//   const [textData, setTextdata] = useState('');
//   const [receiptData, setReceiptData] = useState('');
//   const [random, setRandom] = useState(0);


//   const generateHandler = () => {
//     const ethWallet = require('ethereumjs-wallet');
//     let addressDatas = [];
//     for (let index = 0; index < Number(textData); index++) {
//       let addressData = ethWallet['default'].generate();
//       addressDatas.push({ id: index + 1, privateKey: addressData.getPrivateKeyString(), address: addressData.getAddressString() })
//     }
//     setGetData(addressDatas);
//   }

//   const exportCSV = () => {
//     let values = [];

//     walletAddress && receiptData.forEach((row, key) => {
//       values.push(row);
//     });
//     csvExporter.generateCsv(values);
//   };

//   console.log({ walletAddress });


//   async function transferHandler() {
//     let toAddress = walletAddress.map((item) => item?.address);
//     console.log({ toAddress })

//     // let minValue = 1
//     // let maxValue = 100
//     // let value = minValue + minValue.random() * (minValue - maxValue);
//     // setRandom(value);

//     console.log("contract details=>>>>>>>>>>>>>>>>>>>>>>", myContractInstance);
//     console.log("contract to value=>>>>>>>>>", toAddress , );
//     for (let index = 0; index < toAddress.length; index++) {
//       console.log({index});
//      await myContractInstance.methods.transfer(toAddress[index], index + 1)
//         .send({
//           from: '0xf9A1024Dc5F0808b181D22b9160423AeAC8960Fa',
//           gas: 5000,
//           gasPrice: 2
//         }).then(receipt => { console.log(receipt) });
//     }

//     // const mint = await myContractInstance.methods.transfer(toAddress, value);
//     // console.log({ mint });
//     // const gas = await mint.estimateGas({ from: '0xf9A1024Dc5F0808b181D22b9160423AeAC8960Fa' })
//     // console.log("gas price------------->", gas);
//     // const data = mint.encodeABI();
//     // const nonce = await web3.eth.getTransactionCount('0xf9A1024Dc5F0808b181D22b9160423AeAC8960Fa')
//     // const signedTx = await web3.eth.accounts.signTransaction({
//     //   toAddress: '0x123C4064621A720c745C43Ee44C4d21E52894b0D',
//     //   data,
//     //   gas,
//     //   nonce: nonce,
//     //   chainId: 3
//     // }, '2eed0f988d30161b216da2836bdfa19dc0d9f6b22ef92767e54f6bc2dd58e94a')
//     // var receipt = []
//     // receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
//     // console.log({ receipt });
//     // receipt.push({from: contractAddress, to:toAddress, token: value.Number})//
//     // setReceiptData(receipt);
//   }
//   //console.log("reciptData = ", receiptData);

//   return (
//     <div className="App">
//       <div className="buttonFirst">
//         <TextField
//           className="textclass"
//           label="enter the value"
//           id="textValue"
//           variant="outlined"
//           type="number"
//           value={textData}
//           onChange={(e) => setTextdata(e.target.value)}

//         />
//         <button
//           className="generateButton"
//           onClick={generateHandler}
//         >generte address
//         </button>

//         <button
//           className="generateButton"
//           onClick={transferHandler}
//         >Transfer
//         </button>


//         <button
//           variant="outlined"
//           //disabled={selectedRows.length > 0 ? false : true}
//           className="generateButton"
//           onClick={() => exportCSV()}
//         >
//           Export to CSV
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;








// // import React, { useState } from 'react';
// // import './App.css';
// // import "react-table-v6/react-table.css";
// // import { ExportToCsv } from 'export-to-csv';
// // import { TextField } from '@material-ui/core';

// // //var DappToken = artifacts.require("./DappToken.sol");

// // const Web3 = require("web3");
// // const web3 = new Web3();
// // web3.setProvider(new
// //   web3.providers.HttpProvider("https://ropsten.infura.io/v3/e1c1766ff1094be687df3b73baefaf27"));

// // const abi = [[
// //   {
// //     "inputs": [
// //       {
// //         "internalType": "uint256",
// //         "name": "_initialSupply",
// //         "type": "uint256"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "nonpayable",
// //     "type": "constructor"
// //   },
// //   {
// //     "anonymous": false,
// //     "inputs": [
// //       {
// //         "indexed": true,
// //         "internalType": "address",
// //         "name": "_owner",
// //         "type": "address"
// //       },
// //       {
// //         "indexed": true,
// //         "internalType": "address",
// //         "name": "_spender",
// //         "type": "address"
// //       },
// //       {
// //         "indexed": false,
// //         "internalType": "uint256",
// //         "name": "_value",
// //         "type": "uint256"
// //       }
// //     ],
// //     "name": "Approval",
// //     "type": "event"
// //   },
// //   {
// //     "anonymous": false,
// //     "inputs": [
// //       {
// //         "indexed": true,
// //         "internalType": "address",
// //         "name": "_from",
// //         "type": "address"
// //       },
// //       {
// //         "indexed": true,
// //         "internalType": "address",
// //         "name": "_to",
// //         "type": "address"
// //       },
// //       {
// //         "indexed": false,
// //         "internalType": "uint256",
// //         "name": "_value",
// //         "type": "uint256"
// //       }
// //     ],
// //     "name": "Transfer",
// //     "type": "event"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [
// //       {
// //         "internalType": "address",
// //         "name": "",
// //         "type": "address"
// //       },
// //       {
// //         "internalType": "address",
// //         "name": "",
// //         "type": "address"
// //       }
// //     ],
// //     "name": "allowance",
// //     "outputs": [
// //       {
// //         "internalType": "uint256",
// //         "name": "",
// //         "type": "uint256"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [
// //       {
// //         "internalType": "address",
// //         "name": "",
// //         "type": "address"
// //       }
// //     ],
// //     "name": "balanceOf",
// //     "outputs": [
// //       {
// //         "internalType": "uint256",
// //         "name": "",
// //         "type": "uint256"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [],
// //     "name": "name",
// //     "outputs": [
// //       {
// //         "internalType": "string",
// //         "name": "",
// //         "type": "string"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [],
// //     "name": "standard",
// //     "outputs": [
// //       {
// //         "internalType": "string",
// //         "name": "",
// //         "type": "string"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [],
// //     "name": "symbol",
// //     "outputs": [
// //       {
// //         "internalType": "string",
// //         "name": "",
// //         "type": "string"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": true,
// //     "inputs": [],
// //     "name": "totalSupply",
// //     "outputs": [
// //       {
// //         "internalType": "uint256",
// //         "name": "",
// //         "type": "uint256"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "view",
// //     "type": "function"
// //   },
// //   {
// //     "constant": false,
// //     "inputs": [
// //       {
// //         "internalType": "address",
// //         "name": "_to",
// //         "type": "address"
// //       },
// //       {
// //         "internalType": "uint256",
// //         "name": "_value",
// //         "type": "uint256"
// //       }
// //     ],
// //     "name": "transfer",
// //     "outputs": [
// //       {
// //         "internalType": "bool",
// //         "name": "success",
// //         "type": "bool"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "nonpayable",
// //     "type": "function"
// //   },
// //   {
// //     "constant": false,
// //     "inputs": [
// //       {
// //         "internalType": "address",
// //         "name": "_spender",
// //         "type": "address"
// //       },
// //       {
// //         "internalType": "uint256",
// //         "name": "_value",
// //         "type": "uint256"
// //       }
// //     ],
// //     "name": "approve",
// //     "outputs": [
// //       {
// //         "internalType": "bool",
// //         "name": "success",
// //         "type": "bool"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "nonpayable",
// //     "type": "function"
// //   },
// //   {
// //     "constant": false,
// //     "inputs": [
// //       {
// //         "internalType": "address",
// //         "name": "_from",
// //         "type": "address"
// //       },
// //       {
// //         "internalType": "address",
// //         "name": "_to",
// //         "type": "address"
// //       },
// //       {
// //         "internalType": "uint256",
// //         "name": "_value",
// //         "type": "uint256"
// //       }
// //     ],
// //     "name": "transferFrom",
// //     "outputs": [
// //       {
// //         "internalType": "bool",
// //         "name": "success",
// //         "type": "bool"
// //       }
// //     ],
// //     "payable": false,
// //     "stateMutability": "nonpayable",
// //     "type": "function"
// //   }
// // ],
// // ]

// // // const address = '0xDc6E75de4b3355EFcF45741f106Fdf1eCAdF9fF7' // Paste the smart contract address here after you have deployed it
// // // const contract = new web3.eth.Contract(abi, address)
// // var contractAddress = "0x2ae9c19D5529c6abEf4ec308b2A899635e54A042";
// // // creation of contract object
// // var MyContract = web3.eth.contract(abi, "0x2ae9c19D5529c6abEf4ec308b2A899635e54A042");
// // var myContractInstance = MyContract.at(contractAddress);
// // myContractInstance.myStateChangingMethod('someParam1', { value: 10, gas: 10000 });

// // // var abiArray = abi
// // // var contractAddress = "0x2ae9c19D5529c6abEf4ec308b2A899635e54A042";
// // // var contract = web3.eth.contract(abiArray).at(contractAddress);

// // // var data = contract.transfer.getData("0x2ae9c19D5529c6abEf4ec308b2A899635e54A042", 10000, { from: "0xb2eed30c8b9db631e5222fb47826e4dec6c90c80" });
// // // var gasPrice = web3.eth.gasPrice;
// // // var gasLimit = 90000;

// // // var rawTransaction = {
// // //   "from": "0xb2eed30c8b9db631e5222fb47826e4dec6c90c80",
// // //   "nonce": web3.toHex(count),
// // //   "gasPrice": web3.toHex(gasPrice),
// // //   "gasLimit": web3.toHex(gasLimit),
// // //   "to": "0x2ae9c19D5529c6abEf4ec308b2A899635e54A042",
// // //   "value": "0x1",
// // //   "data": data,
// // //   "chainId": 0x03
// // // };

// // const csvExporter = new ExportToCsv();
// // function App() {
// //   const [walletAddress, setGetData] = useState([]);
// //   const [textData, setTextdata] = useState('');


// //   const generateHandler = () => {
// //     const ethWallet = require('ethereumjs-wallet');
// //     let addressDatas = [];
// //     for (let index = 0; index < Number(textData); index++) {
// //       let addressData = ethWallet['default'].generate();
// //       addressDatas.push({ accounts: index + 0, privateKey: addressData.getPrivateKeyString(), address: addressData.getAddressString() })
// //     }
// //     setGetData(addressDatas);
// //   }

// //   const exportCSV = () => {
// //     let values = [];
// //     walletAddress?.forEach((row, key) => {
// //       values.push(row);
// //     });
// //     csvExporter.generateCsv(values);
// //   };

// //   const transferHandler = () => {
// //     var myContractInstance = new web3.eth.Contract(abi,'0x2ae9c19D5529c6abEf4ec308b2A899635e54A042');
// //     myContractInstance.transfer(walletAddress)
// //       .send({
// //         from: 0xf9A1024Dc5F0808b181D22b9160423AeAC8960Fa,
// //         gas: 0x00,
// //         gasPrice: 0x00
// //       }).then(receipt => { console.log(receipt) });


// //     // console.log("this is transfer screen");
// //     // let accounts = walletAddress;
// //     // let amount = web3.utils.toWei('50')
// //     // let result = contract.methods.transfer(accounts[1], amount).send({ from: accounts[0] })
// //     // console.log(accounts[0]);
// //     // console.log(`Transferred ${web3.utils.fromWei(amount, 'ether')} tokens from account #1 to account #2`)
// //     // console.log('result', result);
// //   }
// //   console.log({ walletAddress });
// //   return (
// //     <div className="App">

// //       <div className="buttonFirst">
// //         <TextField
// //           className="textclass"
// //           label="enter the value"
// //           id="textValue"
// //           variant="outlined"
// //           type="number"
// //           value={textData}
// //           onChange={(e) => setTextdata(e.target.value)}

// //         />
// //         <button
// //           className="generateButton"
// //           onClick={generateHandler}
// //         >generte address
// //         </button>

// //         <button
// //           className="generateButton"
// //           onClick={() => transferHandler()}
// //         >Transfer
// //         </button>


// //         <button
// //           variant="outlined"
// //           //disabled={selectedRows.length > 0 ? false : true}
// //           className="generateButton"
// //           onClick={() => exportCSV()}
// //         >
// //           Export to CSV
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;