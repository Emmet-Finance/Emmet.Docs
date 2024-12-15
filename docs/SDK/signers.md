---
sidebar_position: 6
title: Protocol Signers
---

# Protocol Signers

## EVM

```ts
import {
    BrowserProvider, 
    JsonRpcSigner
} from "ethers";
import { useMemo } from "react";
import type {
    Account, 
    Chain, 
    Client, 
    Transport
} from "viem";
import { 
    type Config, 
    useConnectorClient
} from "wagmi";

/** 
 Hook to convert a viem Wallet Client
 to an ethers.js Signer. 
*/
export function clientToSigner(
    client: Client<Transport, Chain, Account>
) {
  const { account, chain, transport } = client;

  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  const provider = new BrowserProvider(
    transport, 
    network
  );

  const signer = new JsonRpcSigner(
    provider, 
    account.address
  );

  return signer;
}

/** 
 Hook to convert a viem Wallet Client
 to an ethers.js Signer. 
*/
export function useEthersSigner(
    { chainId }: { chainId?: number } = {}
) {
  const { data: client } = useConnectorClient<Config>({
    chainId
});
  return useMemo(() => (
    client 
    ? clientToSigner(client) 
    : undefined), [client]);
}
```

## TON

```ts
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Address, Sender, SenderArguments } from "@ton/core";

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  hash: string;
} {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();

  return {
    sender: {
      // @ts-ignore
      send: async (args: SenderArguments) => {
        await tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
        return 0;
      },
      address: address ? Address.parse(address) : undefined,
    },
    connected: tonConnectUI.connected,
  };
}
```