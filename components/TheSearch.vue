<template>
  <div class="flex h-full w-full mr-2">
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
