<template>
  <div class="relative">
    <img :src="`https://picsum.photos/id/${index}/720/404`" />
    <VideoItemThumbnailIButton
      name-icon="clock"
      title="Смотреть позже"
      class="top-0"
    ></VideoItemThumbnailIButton>
    <VideoItemThumbnailIButton
      name-icon="menu"
      title="Добавить в плейлист"
      class="top-7"
    ></VideoItemThumbnailIButton>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import VideoItemThumbnailIButton from '@/components/VideoItemThumbnailIButton'

export default {
  name: 'VideoItemThumbnail',
  components: {
    VideoItemThumbnailIButton,
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
