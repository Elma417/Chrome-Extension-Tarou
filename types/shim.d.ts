import type { ProtocolWithReturn } from 'webext-bridge'

declare module 'webext-bridge' {
  export interface ProtocolMap {
    getRaidName: ProtocolWithReturn<null, void | { questName?: string }>
    getBattleResult: ProtocolWithReturn<null, void | { domStr?: string }>
    getBattleHistoryResult: ProtocolWithReturn<null, void | { domStr?: string }>
    getUnclaimedList: ProtocolWithReturn<null, void | { domStr?: string }>
  }
}
