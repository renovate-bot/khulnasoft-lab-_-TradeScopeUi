export enum TsWsMessageTypes {
  exception = 'exception',

  whitelist = 'whitelist',
  entryFill = 'entry_fill',
  entryCancel = 'entry_cancel',

  exitFill = 'exit_fill',
  exitCancel = 'exit_cancel',
  newCandle = 'new_candle',
}

export interface TsBaseWsMessage {
  type: TsWsMessageTypes;
}

export interface TsWhitelistMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.whitelist;
  data: string[];
}

export interface TsEntryFillMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.entryFill;
  pair: string;
  open_rate: number;
  amount: number;
  // ...
}

export interface TsExitFillMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.exitFill;
  pair: string;
  open_rate: number;
  amount: number;
  // ...
}

export interface TSEntryCancelMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.entryCancel;
  pair: string;
  reason: string;
  direction: string;
  // ...
}

export interface TSExitCancelMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.exitCancel;
  pair: string;
  reason: string;
  direction: string;
  // ...
}

export interface TsNewCandleMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.newCandle;
  /** Pair, timeframe, candletype*/
  data: [string, string, string];
  // ...
}

export interface TsErrorMessage extends TsBaseWsMessage {
  type: TsWsMessageTypes.exception;
  data: string;
}

export type TSWsMessage =
  | TsErrorMessage
  | TsWhitelistMessage
  | TsEntryFillMessage
  | TSEntryCancelMessage
  | TsExitFillMessage
  | TSExitCancelMessage
  | TsNewCandleMessage;
