<template>
  <section class="flex border-b border-green-200 text-black items-center">
    <button @click.stop="$emit('back')" class="px-3 focus:outline-none">
      <BaseIcon
        name="leftArrow"
        class="w-6 h-6"
        viewBox="0 0 20 20"
        is-svg-stroke
      />
    </button>
    <span class="py-3">{{ title }}</span>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'dropdownSettingsHeader',
  components: {
    BaseIcon,
  },
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped></style>
