<template>
  <li>
    <a href="#" :class="classes">
      <div v-if="isBlack" class="mr-6 bg-gray-700 rounded-full p-1">
        <BaseIcon
          :name="iconName"
          :class="iconClasses"
          :is-fill="isFill"
          :isViewBox="viewBox"
        />
      </div>
      <BaseIcon
        v-else
        :name="iconName"
        :class="iconClasses"
        :is-fill="isFill"
        :isViewBox="viewBox"
      />

      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'SidebarNavItem',
  components: {
    BaseIcon,
  },
  props: {
    label: {
      type: String,
      require: true,
    },
    iconName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isFill: {
      type: Boolean,
    },
    viewBox: {
      type: String,
      default: '',
    },
    isBlack: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
      return this.isActive
        ? [
            ...classes,
            'font-medium',
            'text-gray-800',
            'bg-gray-200',
            'hover:bg-gray-300',
          ]
        : [...classes, 'hover:bg-gray-100']
    },
    iconClasses() {
      const classes = ['w-6', 'h-6', 'mr-6']

      if (this.isBlack) {
        return ['w-4', 'h-4', 'text-white']
      }

      return this.isActive
        ? [...classes, 'text-red-500']
        : [...classes, 'text-gray-600']
    },
  },
}
</script>

<style scoped></style>
