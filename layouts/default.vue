<template>
  <section class="main-wrapper text-gray-600 bg-gray-50">
    <div class="fixed w-full z-30">
      <TheHeader @toggleSidebar="toggleSidebar" />
      <TheCategories :isSidebarOpen="isSidebarOpen" />
    </div>

    <TheSidebarCompact v-if="isCompactSidebarOpen" />

    <TheSidebar v-if="isSidebarOpen" />

    <TheSidebarMobile
      :is-open="isMobileSidebarOpen"
      @closeMobileMenu="closeMobileMenu"
    />

    <TheVideos :isSidebarOpen="isSidebarOpen" />
    <nuxt />
  </section>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheSidebarCompact from '@/components/TheSidebarCompact'
import TheSidebar from '~/components/TheSidebar'
import TheSidebarMobile from '~/components/TheSidebarMobile'
import TheCategories from '~/components/TheCategories'
import TheVideos from '~/components/TheVideos'

export default {
  name: 'default',
  components: {
    TheHeader,
    TheSidebarCompact,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.onResize()
    })
    this.onResize()
  },
  data() {
    return {
      isMobileSidebarOpen: false,
      isCompactSidebarActive: false,
      isCompactSidebarOpen: false,
      isSidebarOpen: false,
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isCompactSidebarOpen = false
        this.isSidebarOpen = false
      } else if (window.innerWidth < 1280) {
        this.isCompactSidebarOpen = true
        this.isSidebarOpen = false
      } else {
        this.isCompactSidebarOpen = this.isCompactSidebarActive
        this.isSidebarOpen = !this.isCompactSidebarActive
        this.isMobileSidebarOpen = false
      }
    },
    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.isCompactSidebarActive = !this.isCompactSidebarActive
        this.onResize()
      } else {
        this.openMobileSidebar()
      }
    },
    openMobileSidebar() {
      this.isMobileSidebarOpen = true
    },
    closeMobileMenu() {
      this.isMobileSidebarOpen = false
    },
  },
}
</script>

<style scoped></style>
