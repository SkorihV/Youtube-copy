<template>
  <header :class="classes">
    <div :class="leftSideClasses">
      <div class="flex items-center pl-4 xl:w-64 lg:bg-white">
        <button
          @click="$emit('toggleSidebar')"
          class="mr-3 sm:ml-2 sm:mr-2 focus:outline-none"
        >
          <BaseIcon name="menu" class="w-6 h-6" isStroke />
        </button>
        <a href="#">
          <LogoMain />
        </a>
      </div>
    </div>
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
      @openVoiceModal="isVoiceModalOpen = true"
    />
    <div :class="rightSideClasses">
      <BaseTooltip text="Поиск голосом">
        <button
          @click="isVoiceModalOpen = true"
          class="focus:outline-none p-2 sm:hidden"
        >
          <BaseIcon name="microphone" class="w-5 h-5" isFill />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Поиск">
        <button
          @click.stop="isMobileSearchActive = true"
          class="focus:outline-none p-2 sm:hidden"
        >
          <BaseIcon name="search" class="w-5 h-5" isStroke />
        </button>
      </BaseTooltip>
      <TheDropdownApp />
      <TheDropdownSettings />

      <ButtonLogin />
    </div>
    <TheModalSearchWithVoice
      v-if="isVoiceModalOpen"
      @close="isVoiceModalOpen = false"
    />
  </header>
</template>

<script>
import TheDropdownApp from '~/components/TheDropdownApp'
import TheDropdownSettings from '~/components/TheDropdownSettings'
import LogoMain from '~/components/LogoMain'
import TheSearch from '~/components/TheSearch'
import ButtonLogin from '~/components/ButtonLogin'
import BaseIcon from '~/components/BaseIcon'
import BaseTooltip from '~/components/BaseTooltip'
import TheSearchWrapper from '@/components/TheSearchWrapper'
import TheModalSearchWithVoice from '@/components/TheModalSearchWithVoice'
import { computed } from 'vue'

export default {
  name: 'TheHeader',
  components: {
    TheDropdownApp,
    TheDropdownSettings,
    TheSearchWrapper,
    LogoMain,
    TheSearch,
    ButtonLogin,
    BaseIcon,
    BaseTooltip,
    TheModalSearchWithVoice,
  },
  data() {
    return {
      isSmallScreen: false,
      isMobileSearchActive: false,
      classes: [
        'flex',
        'w-full',
        'max-h-12',
        'justify-between',
        'bg-opacity-95',
        'bg-white',
      ],
      isVoiceModalOpen: false,
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  provide() {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive),
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true
      } else {
        this.closeMobileSearch()
        this.isSmallScreen = false
      }
    },
    closeMobileSearch() {
      this.isMobileSearchActive = false
    },
  },

  computed: {
    isSearchShown() {
      return this.isMobileSearchShown || !this.isSmallScreen
    },
    isMobileSearchShown() {
      return this.isMobileSearchActive && this.isSmallScreen
    },
    opacity() {
      return this.isMobileSearchShown ? 'opacity-0' : 'opacity-100'
    },
    leftSideClasses() {
      return ['lg:w-1/4', 'flex', this.opacity]
    },
    rightSideClasses() {
      return [
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3 p-2',
        'sm:px-4',
        this.opacity,
      ]
    },
  },
}
</script>

<style scoped></style>
