<template>
  <span :class="classes" @mouseleave="toggleBadge" @mouseenter="toggleBadge">
    <BaseIcon :name="nameIcon" class="w-4 h-4 text-white" is-svg-fill />
    <span :class="badgeClasses">
      <span class="m-1.5 flex">{{ title }}</span>
    </span>
  </span>
</template>

<script>
import baseIcon from '@/components/BaseIcon'

export default {
  name: 'VideoItemThumbnailIButton',
  components: {
    baseIcon,
  },
  props: {
    nameIcon: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isBadgeShown: false,
    }
  },
  methods: {
    toggleBadge() {
      this.isBadgeShown = !this.isBadgeShown
    },
  },
  computed: {
    classes() {
      return [
        'opacity-0',
        'group-hover:opacity-100',
        'bg-opacity-60',
        'absolute',
        'right-0',
        'bg-black',
        'm-1',
        'p-1',
        this.isBadgeShown ? 'rounded-r-sm' : 'rounded-sm',
      ]
    },
    badgeClasses() {
      return [
        'absolute',
        'transition-width',
        'bg-black',
        'bg-opacity-60',
        'whitespace-nowrap',
        'top-0',
        'right-full',
        'overflow-hidden',
        'text-xs',
        'uppercase',
        'font-semibold',
        'rounded-l-sm',
        'height-full',
        'text-white',
        'vertical-center',
        'h-full',
        this.isBadgeShown ? 'w-30' : 'w-0',
      ]
    },
  },
}
</script>

<style scoped></style>
