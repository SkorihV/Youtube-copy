<template>
  <main class="sm:ml-24 xl:ml-64 pt-32 px-5 pb-5">
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 max-w-screen-2xl m-auto"
    >
      <VideoItem v-for="i in 20" :index="i" :key="i"></VideoItem>
    </div>
  </main>
</template>

<script>
import VideoItem from '~/components/VideoItem'

export default {
  name: 'TheVideos',
  components: {
    VideoItem,
  },
}
</script>

<style scoped></style>
