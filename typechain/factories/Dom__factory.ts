/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Dom } from "../Dom";

export class Dom__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Dom> {
    return super.deploy(overrides || {}) as Promise<Dom>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Dom {
    return super.attach(address) as Dom;
  }
  connect(signer: Signer): Dom__factory {
    return super.connect(signer) as Dom__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dom {
    return new Contract(address, _abi, signerOrProvider) as Dom;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addMinter",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_delMinter",
        type: "address",
      },
    ],
    name: "delMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getMinter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinterLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060098152602001682237b6902a37b5b2b760b91b81525060405180604001604052806003815260200162446f6d60e81b815250816003908051906020019062000068929190620005f1565b5080516200007e906004906020840190620005f1565b50506005805460ff191660121790555060006200009a62000105565b600a80546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000ff336a07d995ee4bd116c740000062000109565b62000768565b3390565b6200012082826200014b60201b62000e8c1760201c565b6001600160a01b038083166000908152600660205260408120546200014792168362000237565b5050565b6001600160a01b0382166200017d5760405162461bcd60e51b815260040162000174906200071a565b60405180910390fd5b6200018b60008383620003a4565b620001a781600254620003a960201b62000f4c1790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001da91839062000f4c620003a9821b17901c565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200022b90859062000751565b60405180910390a35050565b816001600160a01b0316836001600160a01b0316141580156200025a5750600081115b15620003a4576001600160a01b0383161562000302576001600160a01b03831660009081526008602052604081205463ffffffff1690816200029e576000620002d0565b6001600160a01b038516600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b90506000620002ee8483620003d860201b62000f711790919060201c565b9050620002fe8684848462000422565b5050505b6001600160a01b03821615620003a4576001600160a01b03821660009081526008602052604081205463ffffffff1690816200034057600062000372565b6001600160a01b038416600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b90506000620003908483620003a960201b62000f4c1790919060201c565b9050620003a08584848462000422565b5050505b505050565b600082820183811015620003d15760405162461bcd60e51b81526004016200017490620006e3565b9392505050565b6000620003d183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506200058f60201b60201c565b600062000449436040518060600160405280603381526020016200268a60339139620005be565b905060008463ffffffff161180156200049357506001600160a01b038516600090815260076020908152604080832063ffffffff6000198901811685529252909120548282169116145b15620004d2576001600160a01b038516600090815260076020908152604080832063ffffffff6000198901168452909152902060010182905562000543565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600784528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260089092529390208054928801909116919092161790555b846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248484604051620005809291906200075a565b60405180910390a25050505050565b60008184841115620005b65760405162461bcd60e51b81526004016200017491906200068d565b505050900390565b6000816401000000008410620005e95760405162461bcd60e51b81526004016200017491906200068d565b509192915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200063457805160ff191683800117855562000664565b8280016001018555821562000664579182015b828111156200066457825182559160200191906001019062000647565b506200067292915062000676565b5090565b5b8082111562000672576000815560010162000677565b6000602080835283518082850152825b81811015620006bb578581018301518582016040015282016200069d565b81811115620006cd5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b918252602082015260400190565b611f1280620007786000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063715018a611610104578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e146103b0578063e7a324dc146103c3578063f1127ed8146103cb578063f2fde38b146103ec576101cf565b8063a9059cbb14610364578063aa271e1a14610377578063b4b5ea571461038a578063c3cda5201461039d576101cf565b80638da5cb5b116100de5780638da5cb5b1461032e57806395d89b4114610336578063983b2d561461033e578063a457c2d714610351576101cf565b8063715018a614610300578063782d6fe1146103085780637ecebe001461031b576101cf565b8063313ce567116101715780635b7121f81161014b5780635b7121f8146102985780635c19a95c146102b85780636fcfff45146102cd57806370a08231146102ed576101cf565b8063313ce5671461025d578063395093511461027257806340c10f1914610285576101cf565b806318160ddd116101ad57806318160ddd1461022757806320606b701461022f57806323338b881461023757806323b872dd1461024a576101cf565b80630323aac7146101d457806306fdde03146101f2578063095ea7b314610207575b600080fd5b6101dc6103ff565b6040516101e99190611921565b60405180910390f35b6101fa610410565b6040516101e99190611990565b61021a610215366004611807565b6104a6565b6040516101e99190611916565b6101dc6104c4565b6101dc6104ca565b61021a610245366004611778565b6104ee565b61021a6102583660046117c7565b61055f565b6102656105e6565b6040516101e99190611e13565b61021a610280366004611807565b6105ef565b61021a610293366004611807565b61063d565b6102ab6102a63660046118cf565b61069a565b6040516101e99190611902565b6102cb6102c6366004611778565b610706565b005b6102e06102db366004611778565b610713565b6040516101e99190611dec565b6101dc6102fb366004611778565b61072b565b6102cb610746565b6101dc610316366004611807565b6107c5565b6101dc610329366004611778565b6109ae565b6102ab6109c0565b6101fa6109cf565b61021a61034c366004611778565b610a30565b61021a61035f366004611807565b610a98565b61021a610372366004611807565b610b00565b61021a610385366004611778565b610b14565b6101dc610398366004611778565b610b21565b6102cb6103ab366004611831565b610b85565b6101dc6103be366004611793565b610d59565b6101dc610d84565b6103de6103d9366004611890565b610da8565b6040516101e9929190611dfd565b6102cb6103fa366004611778565b610dd5565b600061040b600b610fb3565b905090565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600020905b81548152906001019060200180831161047f57829003601f168201915b5050505050905090565b60006104ba6104b3610fbe565b8484610fc2565b5060015b92915050565b60025490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b60006104f8610fbe565b600a546001600160a01b0390811691161461052e5760405162461bcd60e51b815260040161052590611bda565b60405180910390fd5b6001600160a01b0382166105545760405162461bcd60e51b815260040161052590611c54565b6104be600b83611076565b600061056c84848461108b565b6105dc84610578610fbe565b6105d785604051806060016040528060288152602001611e5d602891396001600160a01b038a166000908152600160205260408120906105b6610fbe565b6001600160a01b0316815260208101919091526040016000205491906110cd565b610fc2565b5060019392505050565b60055460ff1690565b60006104ba6105fc610fbe565b846105d7856001600061060d610fbe565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610f4c565b600061064833610b14565b6106645760405162461bcd60e51b815260040161052590611ba3565b6a07d995ee4bd116c740000061068261067b6104c4565b8490610f4c565b1115610690575060006104be565b6104ba83836110f9565b60006106a4610fbe565b600a546001600160a01b039081169116146106d15760405162461bcd60e51b815260040161052590611bda565b60016106db6103ff565b038211156106fb5760405162461bcd60e51b815260040161052590611b6c565b6104be600b8361112c565b6107103382611138565b50565b60086020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526020819052604090205490565b61074e610fbe565b600a546001600160a01b0390811691161461077b5760405162461bcd60e51b815260040161052590611bda565b600a546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80546001600160a01b0319169055565b60004382106107e65760405162461bcd60e51b815260040161052590611d20565b6001600160a01b03831660009081526008602052604090205463ffffffff16806108145760009150506104be565b6001600160a01b038416600090815260076020908152604080832063ffffffff600019860181168552925290912054168310610883576001600160a01b03841660009081526007602090815260408083206000199490940163ffffffff168352929052206001015490506104be565b6001600160a01b038416600090815260076020908152604080832083805290915290205463ffffffff168310156108be5760009150506104be565b600060001982015b8163ffffffff168163ffffffff16111561097757600282820363ffffffff160481036108f061174a565b506001600160a01b038716600090815260076020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610952576020015194506104be9350505050565b805163ffffffff1687111561096957819350610970565b6001820392505b50506108c6565b506001600160a01b038516600090815260076020908152604080832063ffffffff9094168352929052206001015491505092915050565b60096020526000908152604090205481565b600a546001600160a01b031690565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561049c5780601f106104715761010080835404028352916020019161049c565b6000610a3a610fbe565b600a546001600160a01b03908116911614610a675760405162461bcd60e51b815260040161052590611bda565b6001600160a01b038216610a8d5760405162461bcd60e51b815260040161052590611a25565b6104be600b836111ea565b60006104ba610aa5610fbe565b846105d785604051806060016040528060258152602001611eb86025913960016000610acf610fbe565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906110cd565b60006104ba610b0d610fbe565b848461108b565b60006104be600b836111ff565b6001600160a01b03811660009081526008602052604081205463ffffffff1680610b4c576000610b7e565b6001600160a01b038316600090815260076020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610bb0610410565b80519060200120610bbf611214565b30604051602001610bd3949392919061194e565b60405160208183030381529060405280519060200120905060007fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf888888604051602001610c24949392919061192a565b60405160208183030381529060405280519060200120905060008282604051602001610c519291906118e7565b604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051610c8e9493929190611972565b6020604051602081039080840390855afa158015610cb0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ce35760405162461bcd60e51b815260040161052590611a68565b6001600160a01b03811660009081526009602052604090208054600181019091558914610d225760405162461bcd60e51b815260040161052590611d66565b87421115610d425760405162461bcd60e51b815260040161052590611c0f565b610d4c818b611138565b505050505b505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60076020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b610ddd610fbe565b600a546001600160a01b03908116911614610e0a5760405162461bcd60e51b815260040161052590611bda565b6001600160a01b038116610e305760405162461bcd60e51b815260040161052590611aad565b600a546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610eb25760405162461bcd60e51b815260040161052590611da7565b610ebe600083836110c8565b600254610ecb9082610f4c565b6002556001600160a01b038216600090815260208190526040902054610ef19082610f4c565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610f40908590611921565b60405180910390a35050565b600082820183811015610b7e5760405162461bcd60e51b815260040161052590611b35565b6000610b7e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506110cd565b60006104be82611218565b3390565b6001600160a01b038316610fe85760405162461bcd60e51b815260040161052590611cdc565b6001600160a01b03821661100e5760405162461bcd60e51b815260040161052590611af3565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590611069908590611921565b60405180910390a3505050565b6000610b7e836001600160a01b03841661121c565b6110968383836112e2565b6001600160a01b038084166000908152600660205260408082205485841683529120546110c8929182169116836113d1565b505050565b600081848411156110f15760405162461bcd60e51b81526004016105259190611990565b505050900390565b6111038282610e8c565b6001600160a01b038083166000908152600660205260408120546111289216836113d1565b5050565b6000610b7e838361150e565b6001600160a01b038083166000908152600660205260408120549091169061115f8461072b565b6001600160a01b03858116600090815260066020526040902080546001600160a01b031916918616919091179055905061119a8284836113d1565b826001600160a01b0316826001600160a01b0316856001600160a01b03167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a450505050565b6000610b7e836001600160a01b038416611553565b6000610b7e836001600160a01b03841661159d565b4690565b5490565b600081815260018301602052604081205480156112d8578354600019808301919081019060009087908390811061124f57fe5b906000526020600020015490508087600001848154811061126c57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061129c57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506104be565b60009150506104be565b6001600160a01b0383166113085760405162461bcd60e51b815260040161052590611c97565b6113138383836110c8565b61135081604051806060016040528060268152602001611e37602691396001600160a01b03861660009081526020819052604090205491906110cd565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461137f9082610f4c565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611069908590611921565b816001600160a01b0316836001600160a01b0316141580156113f35750600081115b156110c8576001600160a01b03831615611485576001600160a01b03831660009081526008602052604081205463ffffffff169081611433576000611465565b6001600160a01b038516600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b905060006114738285610f71565b9050611481868484846115b5565b5050505b6001600160a01b038216156110c8576001600160a01b03821660009081526008602052604081205463ffffffff1690816114c05760006114f2565b6001600160a01b038416600090815260076020908152604080832063ffffffff60001987011684529091529020600101545b905060006115008285610f4c565b9050610d51858484846115b5565b815460009082106115315760405162461bcd60e51b8152600401610525906119e3565b82600001828154811061154057fe5b9060005260206000200154905092915050565b600061155f838361159d565b611595575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104be565b5060006104be565b60009081526001919091016020526040902054151590565b60006115d943604051806060016040528060338152602001611e856033913961171a565b905060008463ffffffff1611801561162257506001600160a01b038516600090815260076020908152604080832063ffffffff6000198901811685529252909120548282169116145b1561165f576001600160a01b038516600090815260076020908152604080832063ffffffff600019890116845290915290206001018290556116d0565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600784528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260089092529390208054928801909116919092161790555b846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724848460405161170b929190611dde565b60405180910390a25050505050565b60008164010000000084106117425760405162461bcd60e51b81526004016105259190611990565b509192915050565b604080518082019091526000808252602082015290565b80356001600160a01b03811681146104be57600080fd5b600060208284031215611789578081fd5b610b7e8383611761565b600080604083850312156117a5578081fd5b6117af8484611761565b91506117be8460208501611761565b90509250929050565b6000806000606084860312156117db578081fd5b83356117e681611e21565b925060208401356117f681611e21565b929592945050506040919091013590565b60008060408385031215611819578182fd5b6118238484611761565b946020939093013593505050565b60008060008060008060c08789031215611849578182fd5b6118538888611761565b95506020870135945060408701359350606087013560ff81168114611876578283fd5b9598949750929560808101359460a0909101359350915050565b600080604083850312156118a2578182fd5b6118ac8484611761565b9150602083013563ffffffff811681146118c4578182fd5b809150509250929050565b6000602082840312156118e0578081fd5b5035919050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b901515815260200190565b90815260200190565b9384526001600160a01b039290921660208401526040830152606082015260800190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156119bc578581018301518582016040015282016119a0565b818111156119cd5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526022908201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e604082015261647360f01b606082015260800190565b60208082526023908201527f446f6d3a205f6164644d696e74657220697320746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526025908201527f446f6d3a3a64656c656761746542795369673a20696e76616c6964207369676e604082015264617475726560d81b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526018908201527f446f6d3a20696e646578206f7574206f6620626f756e64730000000000000000604082015260600190565b60208082526018908201527f63616c6c6572206973206e6f7420746865206d696e7465720000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f446f6d3a3a64656c656761746542795369673a207369676e61747572652065786040820152641c1a5c995960da1b606082015260800190565b60208082526023908201527f446f6d3a205f64656c4d696e74657220697320746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526026908201527f446f6d3a3a6765745072696f72566f7465733a206e6f742079657420646574656040820152651c9b5a5b995960d21b606082015260800190565b60208082526021908201527f446f6d3a3a64656c656761746542795369673a20696e76616c6964206e6f6e636040820152606560f81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b918252602082015260400190565b63ffffffff91909116815260200190565b63ffffffff929092168252602082015260400190565b60ff91909116815260200190565b6001600160a01b038116811461071057600080fdfe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365446f6d3a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220372e10f258df2566d10e4fd78cc5c3e7938287a550b2ae48c8ef4b6ebe8ea35364736f6c634300060c0033446f6d3a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473";
