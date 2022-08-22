<template>
  <header :class="classes">
    <div
      :class="[
        'lg:w-1/4',
        'flex',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100',
      ]"
    >
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
    <TheSearchMobile
      v-if="isMobileSearchShown"
      @close="closeMobileSearch"
    ></TheSearchMobile>
    <div
      v-else
      class="h-12 hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 lx:px-0 flex-1 lg:w-1/2 max-w-screen-md"
    >
      <TheSearch />
      <BaseTooltip text="Поиск голосом">
        <button
          class="h-full focus:outline-none ml-4 bg-gray-200 p-1 rounded-full max-w-8 max-h-8 flex items-center justify-center"
        >
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
    <div
      :class="[
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3 p-2',
        'sm:px-4',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100',
      ]"
    >
      <BaseTooltip text="Поиск голосом">
        <button class="focus:outline-none p-2 sm:hidden">
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
import TheSearchMobile from '~/components/TheSearchMobile'

export default {
  name: 'TheHeader',
  components: {
    TheDropdownApp,
    TheDropdownSettings,
    TheSearchMobile,
    LogoMain,
    TheSearch,
    ButtonLogin,
    BaseIcon,
    BaseTooltip,
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
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
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
    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive
    },
  },
}
</script>

<style scoped></style>
