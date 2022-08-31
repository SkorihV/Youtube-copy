<template>
  <BaseModal @close="$emit('close')" @click.native.stop>
    <template v-slot:default>
      <p class="text-base text-black tracking-wide">
        Пожаловаться на поисковые подсказки
      </p>
      <TheSearchPredictionsList v-model="selectedSearchPredictions" :search-predictions="searchPredictions"/>
    </template>
    <template v-slot:footer="{ close }">
      <div class="flex justify-end border-t border-gray-200 py-2">
        <button
          @click="close"
          class="uppercase text-xs font-medium tracking-wider py-2.5 px-4 ml-auto mr-1 focus:outline-none"
        >
          Отмена
        </button>
        <button
          class="uppercase text-xs font-medium tracking-wider py-2.5 px-4 ml-1 mr-1 focus:outline-none text-gray-400 cursor-auto"
          disabled
        >
          Пожаловаться
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import TheSearchPredictionsList from "@/components/TheSearchPredictionsList";

export default {
  name: 'TheModalSearchPredictions',
  components: {
    BaseModal,
    TheSearchPredictionsList,
  },
  props: {
    searchPredictions: {
      type: Array
    }
  },
  data() {
    return {
      selectedSearchPredictions: [],
    }
  },
}
</script>

<style scoped></style>
