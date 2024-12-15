---
sidebar_position: 3
title: Chain Handlers
---

# Chain Handlers

## Dependencies

Each protocol has its own helper, for example `Web3Helper` for all EVM chains and `TonHelper` for the TON protocol.

```tsChain
import { Web3Helper } from "emmet.js/dist/chains/web3";
import { TonHelper }  from "emmet.js/dist/chains/ton";
import { Chain }      from "emmet.js/dist/factory/types";
import { 
    chainFactoryMainnet,
    chainFactoryTestnet 
} from "./your-path-to/chainFactory";
```
## Testnet example:

```ts
(async () => {
    ...
    const sepolia:      Web3Helper  = await chainFactoryTestnet.inner(Chain.ETHEREUM)  as Web3Helper;
    const matic:        Web3Helper  = await chainFactoryTestnet.inner(Chain.POLYGON)   as Web3Helper;
    const tonTestnet:   TonHelper   = await chainFactoryTestnet.inner(Chain.TON)       as TonHelper;
    ...
})()
```

## Mainnet example:

```ts
(async () => {
    ...
    const ethereum: Web3Helper  = await chainFactoryMainnet.inner(Chain.ETHEREUM)  as Web3Helper;
    const polygon:  Web3Helper  = await chainFactoryMainnet.inner(Chain.POLYGON)   as Web3Helper;
    const ton:      TonHelper   = await chainFactoryMainnet.inner(Chain.TON)       as TonHelper;
    ...
})()
```