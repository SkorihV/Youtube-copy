<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div v-show="isShown" :class="classes">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    }
  },
  computed: {
    classes() {
      return [
        'bg-gray-600',
        'bg-opacity-80',
        'rounded-sm',
        'text-white',
        'text-sm',
        'whitespace-nowrap',
        'absolute',
        'p-2',
        'left-1/2',
        'top-8',
        'transform',
        '-translate-x-1/2'

      ]
    }
  }
}
</script>

<style scoped>

</style>
