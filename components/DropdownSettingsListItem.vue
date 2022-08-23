<template>
  <li>
    <a
      href="#"
      @click.prevent
      class="flex items-center px-3 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon
        v-if="isIconShown"
        :name="iconName"
        class="w-5 h-5 mr-3 text-gray-500"
        isFill
      />
      <span :class="[{ 'ml-8': icon && !isIconShown }, 'truncate', 'flex-1']">{{
        label
      }}</span>
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
      default: 'check',
    },
    label: {
      type: String,
      require: true,
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
    },
  },
  computed: {
    isIconShown() {
      return this.active || (this.icon !== 'check' && this.icon !== null)
    },
    iconName() {
      return this.active ? 'check' : this.icon
    },
  },
}
</script>

<style scoped></style>
