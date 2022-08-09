<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <div class="mr-6 bg-red-600 rounded-full p-1">
        <slot></slot>
      </div>
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'

export default {
  name: 'TheDropdownAppListItem',
  components: {
    BaseIcon,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
  },
}
</script>

<style scoped></style>
