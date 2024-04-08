<template>
  <div>
    <div class="w-100 d-flex">
      <b-form-select
        id="tradeaiModel-select"
        v-model="locTradeaiModel"
        :options="botStore.activeBot.tradeaiModelList"
      >
      </b-form-select>
      <div class="ms-2">
        <b-button @click="botStore.activeBot.getTradeAIModelList">
          <i-mdi-refresh />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBotStore } from '@/stores/tsbotwrapper';

const props = defineProps({
  modelValue: { type: String, required: true },
});
const emit = defineEmits(['update:modelValue']);
const botStore = useBotStore();

const locTradeaiModel = computed({
  get() {
    return props.modelValue;
  },
  set(tradeaiModel: string) {
    emit('update:modelValue', tradeaiModel);
  },
});

onMounted(() => {
  if (botStore.activeBot.tradeaiModelList.length === 0) {
    botStore.activeBot.getTradeAIModelList();
  }
});
</script>
