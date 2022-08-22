<template>
  <div class="relative">
    <BaseTooltip text="Youtube настройки">
      <button @click="toggle" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" isFill />
      </button>
    </BaseTooltip>
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transition opacity-100 scale-100"
      leave-active-class="transition ease-in-out duration-100"
      leave-from-class="transition opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        :class="dropdownClasses"
        @keydown.esc="close"
        tabindex="-1"
        ref="dropdown"
      >
        <component
          :is="menu"
          :selectedOptions="selectedOptions"
          @selectMenu="showSelectedMenu"
          @selectOption="selectOption"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import BaseTooltip from '~/components/BaseTooltip'
import TheDropdownSettingsMain from '@/components/TheDropdownSettingsMain'
import TheDropdownSettingsAppearance from '@/components/TheDropdownSettingsAppearance'
import TheDropdownSettingsLanguage from '@/components/TheDropdownSettingsLanguage'
import TheDropdownSettingsLocation from '@/components/TheDropdownSettingsLocation'
import TheDropdownSettingsRestrictedMode from '@/components/TheDropdownSettingsRestrictedMode'

export default {
  name: 'TheDropdownSettings',
  components: {
    BaseIcon,
    BaseTooltip,
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsLanguage,
    TheDropdownSettingsLocation,
    TheDropdownSettingsRestrictedMode,
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.close()
      }
    })
  },
  data() {
    return {
      isOpen: false,
      selectedMenu: 'main',
      selectedOptions: {
        theme: {
          id: 0,
          text: 'Светлая тема',
        },
        language: {
          id: 0,
          text: 'English',
        },
        location: {
          id: 0,
          text: 'Австралия',
        },
        guard: {
          isActive: false,
          text: 'откл',
        },
      },
    }
  },
  methods: {
    showSelectedMenu(selected) {
      this.selectedMenu = selected
      this.$refs.dropdown.focus()
    },
    close() {
      this.isOpen = false
      setTimeout(() => {
        this.selectedMenu = 'main'
      }, 150)
    },
    open() {
      this.isOpen = true
    },
    toggle() {
      this.isOpen ? this.close() : this.open()
    },
    selectOption(option) {
      this.selectedOptions[option.name] = option.value
    },
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    },
  },
  computed: {
    dropdownClasses() {
      return [
        'z-10',
        'absolute',
        'top-9',
        '-right-full',
        'sm:right-0',
        'bg-white',
        'w-72',
        'border',
        'border-t-0',
        'outline-none',
      ]
    },
    menu() {
      const menuComponentNames = {
        main: 'TheDropdownSettingsMain',
        appearance: 'TheDropdownSettingsAppearance',
        language: 'TheDropdownSettingsLanguage',
        location: 'TheDropdownSettingsLocation',
        guard: 'TheDropdownSettingsRestrictedMode',
      }

      return menuComponentNames[this.selectedMenu]
    },
  },
}
</script>

<style scoped></style>
