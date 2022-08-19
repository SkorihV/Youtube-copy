<template>
  <input
    type="text"
    placeholder="Введите значение"
    class="w-full h-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:outline-none focus:border-blue-700"
  />
</template>

<script>
export default {
  name: 'TheSearchInput',
  mounted() {
    if (window.innerWidth < 640) {
      this.$el.focus()
    }
  },
}
</script>

<style scoped></style>
