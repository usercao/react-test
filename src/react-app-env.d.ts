/// <reference types="react-scripts" />

declare interface Window {
  [propName: string]: any
  ethereum?: {
    isMetaMask?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
    autoRefreshOnNetworkChange?: boolean
  }
  web3?: Record<string, unknown>
  BinanceChain?: {
    bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
  }
}

declare interface require {
  context: (path: string, isDeep: boolean, file: string | RegExp) => any
}

declare type TargetContext = '_self' | '_blank'

declare module '@davion/router'

declare module '*.ttf'
declare module '*.svg'
