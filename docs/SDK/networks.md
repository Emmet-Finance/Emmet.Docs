---
sidebar_position: 1
title: Network Switching
---

# Network Switching

## Importing the chain Factories:

```ts
import { ChainFactoryBuilder, ChainFactoryConfigs } from "emmet.js/dist";
import { ChainFactory } from "emmet.js/dist/factory/types";
```

## Switching between Mainnet & Testnet

```ts
// MAINNET
export const chainFactoryMainnet: ChainFactory = await ChainFactoryBuilder(
  ChainFactoryConfigs.MainNet(),
);

// TESTNET
export const chainFactoryTestnet: ChainFactory = await ChainFactoryBuilder(
  ChainFactoryConfigs.TestNet(),
);
```