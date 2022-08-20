/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExcessReturnDataRecipient,
  ExcessReturnDataRecipientInterface,
} from "../../../contracts/test/ExcessReturnDataRecipient";

const _abi = [
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "magic",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "setRevertDataSize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080806040523461001657610850908161001c8239f35b600080fdfe60806040526004361015610023575b361561001957600080fd5b6100216105c2565b005b6000803560e01c8063e998da54146101045763f23a6e6114610045575061000e565b346100fd5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100fd5761007c61013d565b50610085610165565b5060843567ffffffffffffffff808211610100573660238301121561010057816004013590811161010057369101602401116100fd576100f96100c6610260565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b80fd5b8280fd5b50346100fd5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100fd5760043581556080f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016057565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361016057565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7e1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81116001166101e8575b600b1b90565b6101f0610188565b6101e2565b628fe800907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7017ff8111610225570190565b61022d610188565b0190565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff40090610c008110610225570190565b7ff23a6e61000000000000000000000000000000000000000000000000000000009060005461028b57565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061054661054161053c6105377ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb506104cd5a662386f26fc100006633413c26506520917f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82018060011c178060021c178060041c178060081c178060101c178060201c178060401c177e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff6001604051927ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd84527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208501527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a827252361660408501527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608501527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808501527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08501527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08501527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e085015261010084016040528060801c17010260f81c60ff03015160f81c911160081b01020490565b7f04bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f68811160011661056d575b6036027ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb4f8111610560575b5a6104b082018110610553575b03016101b8565b6101f5565b61057a565b610231565b60031b1680600080376000fd5b61055b610188565b610530565b610568610188565b610523565b610575610188565b6104f8565b9060009160038111908160011461059957501561059357565b60019150565b925050816001808201811c915b8483106105b257505050565b9193508382048401811c916105a6565b6000546105cb57565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061080d61054161053c6105377ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb506104cd5a662386f26fc100006633413c26506520917f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82018060011c178060021c178060041c178060081c178060101c178060201c178060401c177e818283848586878898a8b8c8d8e8f929395969799a9b9d9e9faaeb6bedeeff6001604051927ff8f9cbfae6cc78fbefe7cdc3a1793dfcf4f0e8bbd8cec470b6a28a7a5a3e1efd84527ff5ecf1b3e9debc68e1d9cfabc5997135bfb7a7a3938b7b606b5b4b3f2f1f0ffe60208501527ff6e4ed9ff2d6b458eadcdf97bd91692de2d4da8fd2d0ac50c6ae9a827252361660408501527fc8c0b887b0a8a4489c948c7f847c6125746c645c544c444038302820181008ff60608501527ff7cae577eec2a03cf3bad76fb589591debb2dd67e0aa9834bea6925f6a4a2e0e60808501527fe39ed557db96902cd38ed14fad815115c786af479b7e8324736353433727170760a08501527fc976c13bb96e881cb166a933a55e490d9d56952b8d4e801485467d236242260660c08501527f753a6d1b65325d0c552a4d1345224105391a310b29122104190a11030902010060e085015261010084016040528060801c17010260f81c60ff03015160f81c911160081b01020490565b60041b1680600080376000fdfea26469706673582212209bfb5f8f06e675355cd60704ba96b6a0478ecf5e90cb2a1fa419544ee7f10df564736f6c634300080e0033";

type ExcessReturnDataRecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExcessReturnDataRecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExcessReturnDataRecipient__factory extends ContractFactory {
  constructor(...args: ExcessReturnDataRecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExcessReturnDataRecipient> {
    return super.deploy(overrides || {}) as Promise<ExcessReturnDataRecipient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ExcessReturnDataRecipient {
    return super.attach(address) as ExcessReturnDataRecipient;
  }
  override connect(signer: Signer): ExcessReturnDataRecipient__factory {
    return super.connect(signer) as ExcessReturnDataRecipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExcessReturnDataRecipientInterface {
    return new utils.Interface(_abi) as ExcessReturnDataRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExcessReturnDataRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExcessReturnDataRecipient;
  }
}
