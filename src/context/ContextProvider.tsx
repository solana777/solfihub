'use client';

import type { FC, ReactNode } from 'react';
import type { WalletError } from '@solana/wallet-adapter-base';

// import { clusterApiUrl } from '@solana/web3.js';
import { useRef, useMemo, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  TorusWalletAdapter,
  SolletWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  // LedgerWalletAdapter,
  // SlopeWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import loginUser from 'src/actions/login';
import deleteAccessToken from 'src/actions/logout';
import refreshTokens from 'src/actions/refreshTokens';
import validateToken from 'src/actions/validateToken';
import { useTokensByWallet } from 'src/actions/getTokensByWallet';

import { notify } from '../utils/notifications';
import { useAutoConnect, AutoConnectProvider } from './AutoConnectProvider';

// login handler: send api call every refresh
const WalletLoginHandler: FC<{ children: ReactNode }> = ({ children }) => {
  const { publicKey, connected, disconnecting, disconnect, signMessage } = useWallet();
  const { refetch } = useTokensByWallet();

  const prevConnectedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!prevConnectedRef.current && connected && publicKey && signMessage) {
      const handleLogin = async () => {
        const storedAccessToken = localStorage.getItem('accessToken');

        if (storedAccessToken) {
          const isValidToken = await validateToken(storedAccessToken);
          if (isValidToken) {
            await refreshTokens(publicKey);
            await refetch();
            return;
          }
          localStorage.removeItem('accessToken');
        }

        try {
          if (!localStorage.getItem('priorityFee')) {
            localStorage.setItem('priorityFee', '100000');
          }
          await loginUser(publicKey.toBase58(), signMessage);
          await refreshTokens(publicKey);
          await refetch();
        } catch (error) {
          console.error('Login or refetching token failed:', error);
        }
      };

      handleLogin();
    }
    prevConnectedRef.current = connected;
  }, [connected, publicKey, signMessage, refetch]);

  useEffect(() => {
    if (disconnecting) {
      disconnect();
      deleteAccessToken();
      localStorage.removeItem('priorityFee'); // Clear priority fee setting
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [disconnect, disconnecting]);

  return <>{children}</>;
};

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { autoConnect } = useAutoConnect();
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint =
    process.env.HELIUS_URL ||
    'https://mainnet.helius-rpc.com/?api-key=f8e77391-2691-45d1-b759-f185dfe4a4f1';
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const endpoint = "https://solana-mainnet.g.alchemy.com/v2/btnWfpLQi-oGB2Rrhk6zF29DOD14ArAw"; // Replace this with your actual RPC URL
  // const endpoint = "http://rpc.parachute.ag"; // Replace this with your actual RPC URL

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const onError = useCallback((error: WalletError) => {
    notify({
      type: 'error',
      message: error.message ? `${error.name}: ${error.message}` : error.name,
    });
    console.error(error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={autoConnect}>
        <ReactUIWalletModalProvider>
          <WalletLoginHandler>{children}</WalletLoginHandler>
        </ReactUIWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <AutoConnectProvider>
    <WalletContextProvider>{children}</WalletContextProvider>
  </AutoConnectProvider>
);
