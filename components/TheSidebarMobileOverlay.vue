<template>
  <div
    @click="clickOnBackground"
    class="fixed inset-0 bg-black bg-opacity-50 z-30"
  ></div>
</template>

<script>
export default {
  name: 'TheSidebarMobileOverlay',
  methods: {
    clickOnBackground() {
      this.$emit('clickOnBackground')
    },
  },
}
</script>

<style scoped></style>
