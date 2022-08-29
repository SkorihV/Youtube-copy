<template>
  <button class="p-2 focus:outline-none">
    <BaseIcon name="x" is-svg-stroke />
  </button>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'BaseModalButtonClose',
  components: {
    BaseIcon,
  },
}
</script>

<style scoped></style>
