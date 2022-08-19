<template>
  <div class="relative">
    <div
      class="flex items-center h-full"
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = false"
    >
      <slot />
    </div>
    <transition
      enter-active-class="duration-600"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class=" duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseTooltip',
  props: {
    text: {
      type: String,
    },
    top: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShown: false,
      classes: [
        'bg-gray-600',
        'bg-opacity-80',
        'rounded-sm',
        'text-white',
        'text-sm',
        'whitespace-nowrap',
        'absolute',
        'p-2',
        'transform',
        ...this.getPositionClasses(),
      ],
    }
  },
  methods: {
    getPositionClasses() {
      const topClass = this.top ? 'bottom-12' : 'top-14'

      if (this.right) {
        return [topClass, 'left-0']
      }

      if (this.left) {
        return [topClass, 'right-0']
      }

      return [topClass, 'left-1/2', '-translate-x-1/2']
    },
  },
  computed: {},
}
</script>

<style scoped></style>
