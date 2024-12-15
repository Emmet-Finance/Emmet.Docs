---
sidebar_position: 4
title: Getting Token Data
---

# Getting Token Data

Token name type:

```ts
type TTokenName = 
    'CAVI' 
    | 'DAI'
    | 'GrabClub'
    | 'TON'
    | 'TRT'
    | 'USDC'
    | <more token names will be added>
    ;
```

Token type:

```ts
type TToken {
    address:     string,    // the token contract address
    swap?:       string,    // will be deprecated soon
    decimals:    bigint,    // token decimals, ex. 6 or 18
    symbol:      string,    // The short name, ex. USDC
    fee:         bigint,    // the token fee if liquidity pool is involved
    feedecimals: bigint,    // the fee decimals, usually 6
}
```

Getting token data from the chain handler:

```ts
(async () => {
    ...
    const tokenSymbol:      TTokenName = "USDC";
    const token:            TToken = await handler.token(tokenSymbol);

    console.log(token);

    const tokenAddress:     string = token.address;
    const tokenDecimals:    bigint = token.decimals;
    ...
})()
```