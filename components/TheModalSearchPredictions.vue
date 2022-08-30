<template>
  <BaseModal @close="$emit('close')" @click.native.stop>
    <template v-slot:default>
      <p class="text-base text-black tracking-wide">
        Пожаловаться на поисковые подсказки
      </p>
      <div class="space-y-3 text-black text-sm tracking-wide">
        <div
          class="flex items-start"
          v-for="(label, index) in searchPredictions"
          :key="label"
        >
          <input
            class="h-5 w-5 cursor-pointer"
            v-model="selectedSearchPredictions"
            type="checkbox"
            :name="label"
            :id="index"
            :value="label"
          />
          <label class="pl-4 cursor-pointer flex-grow" :for="index">{{
            label
          }}</label>
        </div>
      </div>
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

export default {
  name: 'TheModalSearchPredictions',
  components: {
    BaseModal,
  },
  data() {
    return {
      selectedSearchPredictions: [],
      searchPredictions: [
        'уроки vue',
        'уроки vue js',
        'уроки vue 3',
        'уроки vue.js на русском',
        'уроки vue 2',
        'vue js уроки',
        'vuex  уроки',
      ],
    }
  },
}
</script>

<style scoped></style>
