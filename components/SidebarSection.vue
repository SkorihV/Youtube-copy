<template>
  <section :class="$attrs.class || 'py-2 border-b'">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SidebarSection',
}
</script>

<style scoped></style>
