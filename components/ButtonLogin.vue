<template>
  <button
    class="focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
  >
    <BaseIcon name="user" class="w-7 h-7 mr-2" isFill />
    Войти
  </button>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'

export default {
  name: 'ButtonLogin',
  components: {
    BaseIcon,
  },
}
</script>

<style scoped></style>
