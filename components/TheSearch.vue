<template>
  <div class="flex w-full h-full">
    <TheSearchInput />
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from '~/components/TheSearchInput'
import TheSearchButton from '~/components/TheSearchButton'
export default {
  name: 'TheSearch',
  components: {
    TheSearchInput,
    TheSearchButton,
  },
}
</script>

<style scoped></style>
