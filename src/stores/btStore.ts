import { defineStore } from 'pinia';

export const useBtStore = defineStore('btStore', {
  state: () => {
    return {
      strategy: '',
      selectedTimeframe: '',
      selectedDetailTimeframe: '',
      timerange: '',
      maxOpenTrades: '',
      stakeAmount: '',
      startingCapital: '',
      allowCache: true,
      enableProtections: false,
      stakeAmountUnlimited: false,
      tradeAI: {
        enabled: false,
        model: '',
        identifier: '',
      },
    };
  },
  getters: {
    canRunBacktest: (state) => state.strategy !== '',
  },
  actions: {},
});
