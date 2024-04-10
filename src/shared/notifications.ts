import { showAlert } from '@/shared/alerts';
import { useSettingsStore } from '@/stores/settings';
import { TSWsMessage, TsWsMessageTypes } from '@/types/wsMessageTypes';

export function showNotification(msg: TSWsMessage, botname: string) {
  const settingsStore = useSettingsStore();
  if (settingsStore.notifications && settingsStore.notifications[msg.type]) {
    switch (msg.type) {
      case TsWsMessageTypes.entryFill:
        console.log('entryFill', msg);
        showAlert(`Entry fill for ${msg.pair} at ${msg.open_rate}`, 'success', botname);
        break;
      case TsWsMessageTypes.exitFill:
        console.log('exitFill', msg);
        showAlert(`Exit fill for ${msg.pair} at ${msg.open_rate}`, 'success', botname);
        break;
      case TsWsMessageTypes.exitCancel:
        console.log('exitCancel', msg);
        showAlert(`Exit order cancelled for ${msg.pair} due to ${msg.reason}`, 'warning', botname);
        break;
      case TsWsMessageTypes.entryCancel:
        console.log('entryCancel', msg);
        showAlert(`Entry order cancelled for ${msg.pair} due to ${msg.reason}`, 'warning', botname);
        break;
    }
  } else {
    console.log(`${botname}: Message ${msg.type} not shown.`);
  }
}
