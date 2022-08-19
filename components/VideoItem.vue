<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from '~/components/VideoItemThumbnail'
import VideoItemInfo from '~/components/VideoItemInfo'

export default {
  name: 'VideoItem',
  components: {
    VideoItemThumbnail,
    VideoItemInfo,
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
