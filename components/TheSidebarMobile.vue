<template>
  <transition
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div>
      <TheSidebarMobileOverlay
        @clickOnBackground="$emit('closeMobileMenu')"
        v-show="isOpen"
      />
      <aside
        @mouseover="hoverMenu = true"
        @mouseleave="hoverMenu = false"
        v-show="isOpen"
        @keydown.esc="$emit('closeMobileMenu')"
        tabindex="-1"
        ref="mobileSidebar"
        class="fixed w-64 max-h-screen bg-white z-40 outline-none overflow-auto"
      >
        <section class="flex items-center p-4 border-b sticky top-0 bg-white">
          <button
            @click="$emit('closeMobileMenu')"
            class="focus:outline-none mr-3 ml-2"
          >
            <BaseIcon name="menu" class="w-6 h-6" />
          </button>
          <a href="#">
            <LogoMain />
          </a>
        </section>
        <SidebarContent />
      </aside>
    </div>
  </transition>
</template>

<script>
import SidebarContent from '@/components/SidebarContent'
import LogoMain from '@/components/LogoMain'
import BaseIcon from '@/components/BaseIcon'
import TheSidebarMobileOverlay from '@/components/TheSidebarMobileOverlay'

export default {
  name: 'TheSidebarMobile',
  components: {
    LogoMain,
    BaseIcon,
    SidebarContent,
    TheSidebarMobileOverlay,
  },
  props: {
    isOpen: {
      type: Boolean,
    },
  },
  data() {
    return {
      hoverMenu: false,
    }
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.mobileSidebar.focus())
    },
  },
}
</script>

<style scoped></style>
