<template>
  <li>
    <div
      href="#"
      class="flex items-center pl-5 pr-8 py-2 px-3 py-2 text-sm hover:bg-gray-200"
    >
      <BaseIcon :name="icon" class="w-5 h-5 mr-4 text-gray-500" isFill />
      <span>{{ label }}</span>
    </div>
  </li>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'VideoItemDropdownListItem',
  components: {
    BaseIcon,
  },
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
}
</script>

<style scoped></style>
