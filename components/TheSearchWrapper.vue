<template>
  <div :class="classes">
    <BaseTooltip v-if="isSmallScreen" text="Назад" right>
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
    <BaseTooltip text="Поиск голосом" :left="isSmallScreen">
      <button
        @click="$emit('openVoiceModal')"
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
import BaseIcon from '~/components/BaseIcon'

export default {
  name: 'TheSearchWrapper',
  components: {
    TheSearch,
    BaseTooltip,
    BaseIcon,
  },
  props: {
    isSmallScreen: {
      type: Boolean,
    },
  },
  mounted() {
    window.addEventListener('click', this.onclick)
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
  computed: {
    classes() {
      return this.isSmallScreen
        ? ['flex', 'absolute', 'h-12', 'w-full', 'z-10', 'p-2', 'bg-white']
        : [
            'h-12',
            'sm:flex',
            'items-center',
            'justify-end',
            'p-2.5',
            'pl-8',
            'md:pl-12',
            'md:px-8',
            'lx:px-0',
            'flex-1',
            'lg:w-1/2',
            'max-w-screen-md',
          ]
    },
  },
}
</script>

<style scoped></style>
