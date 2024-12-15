---
sidebar_position: 8
title: Transferring tokens
---

# Transferring tokens

```ts
export const SUPPORTED_CHAINS = { ...MAINNETS, ...TESTNETS };
export type TChainName = keyof typeof SUPPORTED_CHAINS;
export const ChainToDestinationDomain: { [key in TChainName]: number } = {
    // CCTP unsupported chains
  ethereum: 0,
  sepolia: 0,
  avalanche: 1,
  avalancheFuji: 1,
  optimism: 2,
  optimismSepolia: 2,
  arbitrum: 3,
  arbitrumSepolia: 3,
  bsc: 4,
  bscTestnet: 4,
  base: 6,
  baseSepolia: 6,
  polygon: 7,
  polygonAmoy: 7,
  // Other chains
  ton: 65534,
  tonTestnet: 65535,
  berachainBartio: 80084,
  onlylayerTestnet: 728696,
  solana: 102, // TODO: subject to change
};

(async (
    fromChain: TChainName,
    toChain: TChainName, 
    fromToken: TTokenName, 
    toToken: TTokenName,
    amount: bigint,
    mintRecipient: string // the address of the destination beneficiary
) => {
    ...
    const { sender: tonSender } = useTonConnect();
    // See: https://github.com/Emmet-Finance/websitev2/blob/feat/TON/src/hooks/useBridgeFee.ts
    const { fee } = useBridgeFee();
    const signer = useEthersSigner();

    const fromChainID = ChainToDestinationDomain[toChain];
    const formattedAmount: bigint = amount * 10n ** tokenDecimals;
    const destinationDomain = ChainToDestinationDomain[toChain];

     // TON example:
    if(fromChainID === Chain.TON){
        const handler = await chainFactoryTestnet.inner(fromChainID);
        const { hash } = await chainFactoryTestnet.sendInstallment(
            handler,
            tonSender,
            BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            fromToken,
            toToken,
            mintRecipient,
        );
        console.log(hash);
    // EVM chains example:
    } else if ( 
          fromChainID === Chain.POLYGON ||
          fromChainID === Chain.ETHEREUM ||
          fromChainID === Chain.BSC ||
          fromChainID === Chain.BERACHAIN ||
          fromChainID === Chain.ONLYLAYER
    ) {
        const handler: Web3Helper = await chainFactoryTestnet.inner(fromChainID) as Web3Helper;

        const { hash } = await chainFactoryTestnet.sendInstallment(
            handler,
            signer!,
            BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            fromToken,
            toToken,
            mintRecipient,
            {
              value: fee,
            },
          );
          console.log(hash);

    }

})(
    'tonTestnet'
    'sepolia',
    'USDC',
    'USDC',
    10n,
    'your-evm-address'
)   
```