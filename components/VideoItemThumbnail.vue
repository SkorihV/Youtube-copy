<template>
  <div class="relative">
    <img :src="`https://picsum.photos/id/${index}/720/404`" />
    <span
      class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black rounded-sm m-1 p-1"
    >
      <BaseIcon name="clock" class="w-4 h-4 text-white" is-svg-fill />
    </span>
    <span
      class="opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-7 right-0 bg-black rounded-sm m-1 p-1"
    >
      <BaseIcon name="menu" class="w-4 h-4 text-white" is-stroke />
    </span>
    <span
      class="duration-500 opacity-100 group-hover:opacity-0 bg-opacity-60 absolute bottom-0 right-0 h-4 rounded-sm m-1 p-1 text-xs bg-black text-white flex items-center font-semibold"
      >6:25</span
    >
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'

export default {
  name: 'VideoItemThumbnail',
  components: {
    BaseIcon,
  },
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped></style>
