<template>
  <div :class="classes">
    <TheSearch
      :searchQuery="searchQuery"
      @updateSearchQuery="$emit('updateSearchQuery', $event)"
    />
    <BaseTooltip text="Поиск голосом">
      <button
        class="h-full focus:outline-none ml-4 bg-gray-200 p-1 rounded-full max-w-8 max-h-8 flex items-center justify-center"
      >
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import BaseTooltip from '@/components/BaseTooltip'
import TheSearch from '@/components/TheSearch'

export default {
  name: 'TheSearchMain',
  components: {
    BaseIcon,
    BaseTooltip,
    TheSearch,
  },
  props: {
    searchQuery: {
      type: String,
    },
  },
  methods: {
    qwe($event) {},
  },
  data() {
    return {
      classes: [
        'h-12 hidden',
        'sm:flex',
        'items-center',
        'justify-end',
        'p-2.5',
        'pl-8',
        'md:pl-12',
        'md:px-8',
        'lx:px-0',
        'flex-1',
        'lg:w-1/2',
        'max-w-screen-md',
      ],
    }
  },
}
</script>

<style scoped></style>
