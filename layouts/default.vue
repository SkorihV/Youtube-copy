<template>
  <section class="main-wrapper text-gray-600 bg-gray-50">
    <TheHeader />

    <TheSidebarSmall />

    <TheSidebar />

    <TheSidebarMobile />

    <TheCategories />

    <TheVideos />
    <nuxt />
  </section>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheSidebarSmall from '~/components/TheSidebarSmall'
import TheSidebar from '~/components/TheSidebar'
import TheSidebarMobile from '~/components/TheSidebarMobile'
import TheCategories from '~/components/TheCategories'
import TheVideos from '~/components/TheVideos'

export default {
  name: 'default',
  components: {
    TheHeader,
    TheSidebarSmall,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
}
</script>

<style scoped></style>
