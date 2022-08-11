<template>
  <li>
    <a href="#" :class="classes">
      <slot></slot>
      <span v-if="title" class="text-xs text-center">{{ title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SidebarCompactNavItem',
  props: {
    title: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = [
        'flex',
        'flex-col',
        'items-center',
        'px-2',
        'py-5',
        'text-gray-600',
        'hover:bg-gray-100',
      ]
      return this.isActive ? [...classes, 'text-red-500'] : [...classes]
    },
  },
}
</script>

<style scoped></style>
