---
sidebar_position: 7
title: Approving
---

# Approving

```ts
import { useEthersSigner } from "./useEthersSigner";

(async () => {
    ...
    const bridgeAddress: string = await handler.bridge();

    const signer = useEthersSigner();

    const amountToApprove: bigint = 10;

    const formattedAmount: bigint = amountToApprove 
        * 10n 
        ** tokenDecimals;

    // Some non-Evm chains don't have approval, ut have pre-transfer
    // The SDK function is called so for compatibility with them all
    await chainFactoryTestnet.preTransfer(
          handler,
          signer,
          tokenAddress,
          bridgeAddress,
          BigInt(Math.ceil(formattedAmount)),
          {},
        );

    ...

})()
```