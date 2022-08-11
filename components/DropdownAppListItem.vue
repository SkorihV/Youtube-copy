<template>
  <li>
    <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
      <div class="mr-6 bg-red-600 rounded-full p-1">
        <BaseIcon :name="nameIcon" class="w-4 h-4 text-white" isFill />
      </div>
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'

export default {
  name: 'DropdownAppListItem',
  components: {
    BaseIcon,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    nameIcon: {
      type: String,
    },
  },
}
</script>

<style scoped></style>
