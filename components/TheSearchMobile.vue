<template>
  <div class="flex absolute h-12 w-full z-10 p-2">
    <BaseTooltip text="Назад" right>
      <button @click="close" class="mr-2 p-2 focus:outline-none">
        <BaseIcon
          name="leftArrow"
          class="w-6 h-6"
          viewBox="0 0 20 20"
          is-svg-stroke
        />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Поиск голосом" left>
      <button
        class="h-full focus:outline-none ml-4 bg-gray-200 p-1 rounded-full max-w-8 max-h-8 flex items-center justify-center"
      >
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import TheSearch from '~/components/TheSearch'
import BaseTooltip from '~/components/BaseTooltip'
import baseIcon from '~/components/BaseIcon'

export default {
  name: 'TheSearchMobile',
  components: {
    TheSearch,
    BaseTooltip,
    baseIcon,
  },
  mounted() {
    window.addEventListener('click', this.onclick)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.onclick)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    onclick(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style scoped></style>
