<template>
  <BaseTooltip text="Поиск">
    <button :class="classes">
      <BaseIcon name="search" class="w-5 h-5" isFill />
    </button>
  </BaseTooltip>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import BaseTooltip from '@/components/BaseTooltip'

export default {
  name: 'TheSearchButton',
  components: {
    BaseIcon,
    BaseTooltip,
  },
  data() {
    return {
      classes: [
        'h-full',
        'focus:outline-none',
        'flex',
        'items-center',
        'px-6',
        'py-1',
        'text-gray-600',
        'bg-gray-100',
        'border',
        'border-l-0',
        'border-gray-300',
        'rounded-tr-sm',
        'hover:bg-gray-200',
      ],
    }
  },
}
</script>

<style scoped></style>
