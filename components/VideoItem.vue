<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index"></VideoItemInfo>
  </a>
</template>

<script>
import VideoItemThumbnail from '~/components/VideoItemThumbnail'

export default {
  name: 'VideoItem',
  components: {
    VideoItemThumbnail,
  },
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
}
</script>

<style scoped></style>
