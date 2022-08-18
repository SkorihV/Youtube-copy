<template>
  <div class="flex items-start mr-3 mt-2">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="mr-3 w-9 h-9 rounded-full"
      alt=""
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-800"
        >Заголовок видео {{ index }}</span
      >
      <div class="mt-1 flex items-center">
        <span>Название канала {{ index }}</span>
        <BaseIcon name="checkedChannel" class="w-5 h-5 ml-1" />
      </div>
      <div v-html="summary"></div>
    </div>
    <VideoItemDropdown />

  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import VideoItemDropdown from "@/components/VideoItemDropdown";

export default {
  name: 'VideoItemInfo',
  components: {
    BaseIcon,
    VideoItemDropdown,
  },
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    summary() {
      const days = this.index === 1 ? 'день' : 'дней'
      return `${this.index * 2}к просмотров &middot; ${
        this.index
      } ${days} назад`
    },
  },
}
</script>

<style scoped></style>
