<script setup lang="ts">
import { useBotStore } from '@/stores/ftbotwrapper';

const locChainaiModel = defineModel<string>();
const botStore = useBotStore();

onMounted(() => {
  if (botStore.activeBot.chainaiModelList.length === 0) {
    botStore.activeBot.getChainAIModelList();
  }
});
</script>

<template>
  <div>
    <div class="w-100 d-flex">
      <BFormSelect
        id="chainaiModel-select"
        v-model="locChainaiModel"
        :options="botStore.activeBot.chainaiModelList"
      >
      </BFormSelect>
      <div class="ms-2">
        <BButton @click="botStore.activeBot.getChainAIModelList">
          <i-mdi-refresh />
        </BButton>
      </div>
    </div>
  </div>
</template>
