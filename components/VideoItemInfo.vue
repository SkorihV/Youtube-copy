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
      <div class="mt-1 flex">
        <BaseTooltip :text="channelName" top>
          <span>{{ channelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Подтверждено" top>
          <BaseIcon name="checkedChannel" class="w-5 h-5 ml-1" />
        </BaseTooltip>
      </div>
      <div v-html="summary"></div>
    </div>
    <VideoItemDropdown />
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import VideoItemDropdown from '@/components/VideoItemDropdown'
import BaseTooltip from '~/components/BaseTooltip'

export default {
  name: 'VideoItemInfo',
  components: {
    BaseIcon,
    VideoItemDropdown,
    BaseTooltip,
  },
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      channelName: `Название канала ${this.index}`,
    }
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
