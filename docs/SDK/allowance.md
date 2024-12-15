---
sidebar_position: 5
title: Getting token allowance
---

# Getting token allowance

If token allowance is less than the amount intended to be bridged, the transfer will fail. So, it is essential that the allowance is sufficient for the transfer.

```ts
(async () => {

    const bridgeAddress: string = await handler.bridge();

    const allowance: bigint = await handler.getApprovedAmount(
        token.address,
        bridge.senderAddress,
        bridgeAddress
    );

    console.log(allowance);

})()
```