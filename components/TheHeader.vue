<template>
  <header class="flex fixed z-30 w-full max-h-12 bg-opacity-95 justify-between">
    <div class="lg:w-1/4 flex">
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
    <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 lx:px-0 flex-1 lg:w-1/2 max-w-screen-md"
    >
      <TheSearch />
      <button
        class="focus:outline-none ml-4 bg-gray-200 p-1 rounded-full max-w-8 max-h-8 flex items-center justify-center"
      >
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </div>
    <div
      class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4"
    >
      <button class="focus:outline-none p-2 sm:hidden">
        <BaseIcon name="microphone" class="w-5 h-5" isFill />
      </button>

      <button class="focus:outline-none p-2 sm:hidden">
        <BaseIcon name="search" class="w-5 h-5" isStroke />
      </button>

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

export default {
  name: 'TheHeader',
  components: {
    TheDropdownApp,
    TheDropdownSettings,
    LogoMain,
    TheSearch,
    ButtonLogin,
    BaseIcon,
  },
}
</script>

<style scoped></style>
