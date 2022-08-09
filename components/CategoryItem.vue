<template>
  <a href="#" :class="classes">{{ titleCategory }}</a>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: {
    titleCategory: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['px-3', 'py-1', 'transition', 'border', 'rounded-full']

      return this.isActive
        ? [
            ...classes,
            'bg-gray-600',
            'border-gray-700',
            'hover:bg-gray-500',
            'text-white',
          ]
        : [...classes, 'bg-gray-100', 'border-gray-600', 'hover:bg-gray-200']
    },
  },
}
</script>

<style scoped></style>
