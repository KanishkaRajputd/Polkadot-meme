import { BN } from "bn.js";
import { tokenSymbol } from "./global/networkConstants";

export interface ICoin {
    createdAt: string;
    totalSupply: string;
    limit: string;
    title: string;
    content?: string;
    logoImage: string;
    name: string;
    mintCount: number;
    mintedByAddresses: string[]; 
    proposer: string; 
}

export interface IFirebaseCoin{
    created_at: Date;
    content: string;
    title: string;
    limit: string;
    total_supply: string;
    logo_image: string;
    minted_addresses?: string[];
    name: string;
    proposer: string;
    network: string;
}
export const ZERO_BN = new BN(0);
export type TokenSymbol = (typeof tokenSymbol)[keyof typeof tokenSymbol];

export type TRPCEndpoint = {
	key: string;
	label: string;
};

export interface ChainProps {
	palletInstance?: string;
	parachain?: string;
	blockTime: number;
	logo?: any;
	ss58Format: number;
	tokenDecimals: number;
	tokenSymbol: TokenSymbol;
	chainId: number;
	rpcEndpoint: string;
	category: string;
	externalLinks: string;
	assethubExternalLinks?: string;
	rpcEndpoints: TRPCEndpoint[];
	relayRpcEndpoints?: TRPCEndpoint[];
}
