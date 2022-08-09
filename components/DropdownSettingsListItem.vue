<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <BaseIcon
        v-if="icon"
        :name="icon"
        class="w-6 h-6 mr-3 text-gray-500"
        isFill
      />
      <span>{{ label }}</span>
      <BaseIcon
        v-if="isArrow"
        name="arrow"
        class="w-6 h-6 text-gray-500 ml-auto"
        isFill
      />
    </a>
  </li>
</template>

<script>
export default {
  name: 'DropdownSettingsListItem',
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
      require: true,
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
