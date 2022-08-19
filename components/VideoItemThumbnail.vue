<template>
  <div class="relative">
    <img :src="`https://picsum.photos/id/${index}/720/404`" alt="" />
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
import VideoItemThumbnailIButton from '@/components/VideoItemThumbnailIButton'

export default {
  name: 'VideoItemThumbnail',
  components: {
    VideoItemThumbnailIButton,
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
