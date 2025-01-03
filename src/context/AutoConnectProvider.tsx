'use client';

import type { FC, ReactNode} from 'react';

import { useMemo, useContext,createContext } from 'react';
import { useLocalStorage } from '@solana/wallet-adapter-react';

export interface AutoConnectContextState {
    autoConnect: boolean;
    setAutoConnect(autoConnect: boolean): void;
}

export const AutoConnectContext = createContext<AutoConnectContextState>({} as AutoConnectContextState);

export function useAutoConnect(): AutoConnectContextState {
    return useContext(AutoConnectContext);
}


export const AutoConnectProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // TODO: fix auto connect to actual reconnect on refresh/other.
    // TODO: make switch/slider settings
    // const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);
    const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);

    const value = useMemo(() => ({ autoConnect, setAutoConnect }), [autoConnect, setAutoConnect]);

    return (
        <AutoConnectContext.Provider value={value}>{children}</AutoConnectContext.Provider>
    );
};
