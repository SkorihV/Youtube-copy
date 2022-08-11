<template>
  <aside :class="classes">
    <SidebarContent />
  </aside>
</template>

<script>
import SidebarContent from '~/components/SidebarContent'

export default {
  name: 'TheSidebar',
  components: {
    SidebarContent,
  },
  computed: {
    classes() {
      return [
        'w-64',
        'max-h-screen',
        'overflow-auto',
        'fixed',
        'top-12',
        'bg-white',
        'z-20',
      ]
    },
  },
}
</script>

<style scoped></style>
