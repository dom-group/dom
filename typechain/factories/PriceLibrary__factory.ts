/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PriceLibrary } from "../PriceLibrary";

export class PriceLibrary__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PriceLibrary> {
    return super.deploy(overrides || {}) as Promise<PriceLibrary>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceLibrary {
    return super.attach(address) as PriceLibrary;
  }
  connect(signer: Signer): PriceLibrary__factory {
    return super.connect(signer) as PriceLibrary__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceLibrary {
    return new Contract(address, _abi, signerOrProvider) as PriceLibrary;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outAmount",
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
        name: "token",
        type: "address",
      },
    ],
    name: "unit",
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
];

const _bytecode =
  "0x610462610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063b9b2e68f14610045578063e64f521d14610096575b600080fd5b61007d6004803603606081101561005b57600080fd5b506001600160a01b0381358116916020810135821691604090910135166100ce565b6040805192835260208301919091528051918290030190f35b6100bc600480360360208110156100ac57600080fd5b50356001600160a01b03166102c7565b60408051918252519081900360200190f35b6000806100da846102c7565b9150826001600160a01b0316846001600160a01b031614156100fd5750806102bf565b6000856001600160a01b031663e6a4390586866040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561015d57600080fd5b505afa158015610171573d6000803e3d6000fd5b505050506040513d602081101561018757600080fd5b505190506001600160a01b038116156102bd576000819050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156101db57600080fd5b505afa1580156101ef573d6000803e3d6000fd5b505050506040513d606081101561020557600080fd5b5080516020918201516040805163d21220a760e01b815290519295509093506000926001600160a01b0387169263d21220a7926004808201939291829003018186803b15801561025457600080fd5b505afa158015610268573d6000803e3d6000fd5b505050506040513d602081101561027e57600080fd5b505190506001600160a01b0380821690891614610299579091905b6102b687846001600160701b0316846001600160701b031661033c565b9550505050505b505b935093915050565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d602081101561032d57600080fd5b505160ff16600a0a9392505050565b600080841161037c5760405162461bcd60e51b815260040180806020018281038252602a8152602001806103dc602a913960400191505060405180910390fd5b60008311801561038c5750600082115b6103c75760405162461bcd60e51b81526004018080602001828103825260278152602001806104066027913960400191505060405180910390fd5b82828502816103d257fe5b0494935050505056fe50616e6b537761704c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e5450616e6b537761704c6962726172793a20494e53554646494349454e545f4c4951554944495459a2646970667358221220bb38d6c71b1ea063bfed85fda4e05cc3b8589426159b1a5c309f3c947e2a450664736f6c634300060c0033";
