/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestERC1155,
  TestERC1155Interface,
} from "../../../contracts/test/TestERC1155";

const _abi = [
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
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608080604052346100165761127a908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b6000803560e01c918262fdd58e146100cb575050806301ffc9a7146100c25780630e89341c146100b9578063156e29f6146100b05780632eb2c2d6146100a75780634e1273f41461009e578063a22cb46514610095578063e985e9c51461008c5763f242432a14610084575b600080fd5b61007f610c78565b5061007f610bdd565b5061007f610aef565b5061007f610a16565b5061007f610739565b5061007f6103c7565b5061007f610327565b5061007f6101c7565b346101325760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013257604060209273ffffffffffffffffffffffffffffffffffffffff61011c610136565b1681528084528181206024358252845220548152f35b5080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361007f57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361007f57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361007f57565b7fffffffff0000000000000000000000000000000000000000000000000000000081160361007f57565b503461007f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f5760207fffffffff000000000000000000000000000000000000000000000000000000006004356102268161019d565b167f01ffc9a700000000000000000000000000000000000000000000000000000000811490811561028e575b8115610264575b506040519015158152f35b7f0e89341c0000000000000000000000000000000000000000000000000000000091501438610259565b7fd9b67a260000000000000000000000000000000000000000000000000000000081149150610252565b91908251928382526000905b84821061030f5750601f84602094957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09311610302575b0116010190565b60008582860101526102fb565b906020908180828501015190828601015201906102c4565b503461007f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f576103b66040516040810181811067ffffffffffffffff8211176103ba575b604052600381527f757269000000000000000000000000000000000000000000000000000000000060208201526040519182916020835260208301906102b8565b0390f35b6103c2610597565b610375565b503461007f5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f576104d3610402610136565b602435604435604051610414816105c7565b60008152610455836104468673ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b90600052602052604060002090565b610460838254610f2e565b905573ffffffffffffffffffffffffffffffffffffffff8416938460006040517fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f623391806104bc898b8360209093929193604081019481520152565b0390a4600092903b6104df57505050501515610fea565b60405160018152602090f35b610542917fffffffff000000000000000000000000000000000000000000000000000000009495602092856040518096819582947ff23a6e61000000000000000000000000000000000000000000000000000000009c8d85523360048601610f5b565b03925af191821561058a575b9161055c575b501614610fea565b61057d915060203d8111610583575b61057581836105f0565b810190610f46565b38610554565b503d61056b565b610592610fdd565b61054e565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6020810190811067ffffffffffffffff8211176105e357604052565b6105eb610597565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176105e357604052565b60209067ffffffffffffffff811161064b575b60051b0190565b610653610597565b610644565b81601f8201121561007f5780359161066f83610631565b9261067d60405194856105f0565b808452602092838086019260051b82010192831161007f578301905b8282106106a7575050505090565b81358152908301908301610699565b81601f8201121561007f5780359067ffffffffffffffff821161072c575b6040519261070a60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601856105f0565b8284526020838301011161007f57816000926020809301838601378301015290565b610734610597565b6106d4565b503461007f5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f57610771610136565b610779610159565b9067ffffffffffffffff9060443582811161007f5761079c903690600401610658565b60643583811161007f576107b4903690600401610658565b9260843590811161007f576107cd9036906004016106b6565b8151936107dc8151861461104f565b73ffffffffffffffffffffffffffffffffffffffff808516958633148015610966575b61080890610e82565b60005b8181106108ce5750509561086796811680966040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb33918061084f888b836110f7565b0390a4600093903b6108695750505050501515610fea565b005b917fffffffff0000000000000000000000000000000000000000000000000000000094956020928561054295604051968795869485937fbc197c81000000000000000000000000000000000000000000000000000000009d8e8652336004870161111c565b808761095e610956836104468e6109238b6104468f6108f260019c6108fb926110b4565b519687936110b4565b519873ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b61092e878254610f17565b905573ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b918254610f2e565b90550161080b565b506108086109c76109c03361099b8a73ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b9073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5460ff1690565b90506107ff565b90815180825260208080930193019160005b8281106109ee575050505090565b8351855293810193928101926001016109e0565b906020610a139281815201906109ce565b90565b503461007f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f5760043567ffffffffffffffff80821161007f573660238301121561007f578160040135610a7281610631565b92610a8060405194856105f0565b81845260209160248386019160051b8301019136831161007f57602401905b828210610ad8578560243586811161007f576103b691610ac6610acc923690600401610658565b90611178565b60405191829182610a02565b838091610ae48461017c565b815201910190610a9f565b503461007f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f57610b27610136565b6024359081151580920361007f5773ffffffffffffffffffffffffffffffffffffffff90336000526001602052610b828160406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff851617905560405192835216907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b503461007f5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f57602060ff610c6c610c1c610136565b73ffffffffffffffffffffffffffffffffffffffff610c39610159565b91166000526001845260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54166040519015158152f35b503461007f5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261007f57610cb0610136565b610cb8610159565b6084359160443560643567ffffffffffffffff851161007f57610ce26108679536906004016106b6565b9073ffffffffffffffffffffffffffffffffffffffff94858516958633148015610e46575b610d1090610e82565b610d3e856104468873ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b610d49848254610f17565b9055610d79856104468473ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b610d84848254610f2e565b9055811680966040517fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62339180610dc9888b8360209093929193604081019481520152565b0390a4600093903b610de15750505050501515610fea565b917fffffffff0000000000000000000000000000000000000000000000000000000094956020928561054295604051968795869485937ff23a6e61000000000000000000000000000000000000000000000000000000009d8e86523360048701610f9b565b50610d10610e7b6109c03361099b8a73ffffffffffffffffffffffffffffffffffffffff166000526001602052604060002090565b9050610d07565b15610e8957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e4f545f415554484f52495a45440000000000000000000000000000000000006044820152fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818110610f22570390565b610f2a610ee7565b0390565b81198111610f3a570190565b610f42610ee7565b0190565b9081602091031261007f5751610a138161019d565b909260a09273ffffffffffffffffffffffffffffffffffffffff610a139695168352600060208401526040830152606082015281608082015201906102b8565b9192610a1395949160a09473ffffffffffffffffffffffffffffffffffffffff80921685521660208401526040830152606082015281608082015201906102b8565b506040513d6000823e3d90fd5b15610ff157565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f554e534146455f524543495049454e54000000000000000000000000000000006044820152fd5b1561105657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4c454e4754485f4d49534d4154434800000000000000000000000000000000006044820152fd5b80518210156110c85760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b909161110e610a13936040845260408401906109ce565b9160208184039101526109ce565b9390610a13959361115c9161116a9473ffffffffffffffffffffffffffffffffffffffff809216885216602087015260a0604087015260a08601906109ce565b9084820360608601526109ce565b9160808184039101526102b8565b9182516111878351821461104f565b835161119281610631565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06111ce6040926111c6845195866105f0565b808552610631565b01946020953687850137829560005b8581106111ef57505050505050909150565b8073ffffffffffffffffffffffffffffffffffffffff6112116001938c6110b4565b5116600052600083528460002061122882866110b4565b516000528352846000205461123d82886110b4565b52016111dd56fea26469706673582212206cb99acf27dbd6e150255a9045c7a3a3f39e8f397a6b42268233d8798871f3a264736f6c634300080e0033";

type TestERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC1155__factory extends ContractFactory {
  constructor(...args: TestERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC1155> {
    return super.deploy(overrides || {}) as Promise<TestERC1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestERC1155 {
    return super.attach(address) as TestERC1155;
  }
  override connect(signer: Signer): TestERC1155__factory {
    return super.connect(signer) as TestERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC1155Interface {
    return new utils.Interface(_abi) as TestERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC1155 {
    return new Contract(address, _abi, signerOrProvider) as TestERC1155;
  }
}