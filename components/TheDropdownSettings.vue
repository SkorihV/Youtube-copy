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
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in-out duration-100"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        :class="dropdownClasses"
        @keydown.esc="close"
        tabindex="-1"
        ref="dropdown"
      >
        <component
          v-if="selectedMenu"
          :is="menu"
          :selectedOptions="selectedOptions"
          @close="closeMenu"
          @selectOption="selectOption"
        />
        <TheDropdownSettingsMain
          v-else
          :menu-items="menuItems"
          @selectMenu="selectMenu"
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
      selectedMenu: null,
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
    selectMenu(menuItem) {
      this.selectedMenu = menuItem
      this.$refs.dropdown.focus()
    },
    close() {
      this.isOpen = false
      setTimeout(() => this.closeMenu(), 150)
    },
    closeMenu() {
      this.selectMenu(null)
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
        appearance: 'TheDropdownSettingsAppearance',
        language: 'TheDropdownSettingsLanguage',
        location: 'TheDropdownSettingsLocation',
        guard: 'TheDropdownSettingsRestrictedMode',
      }

      return this.selectedMenu ? menuComponentNames[this.selectedMenu.id] : null
    },
    menuItems() {
      return [
        {
          id: 'userData',
          label: 'Личные данные на YouTube',
          icon: 'userData',
          isArrow: false,
        },
        {
          id: 'appearance',
          label: 'Тема: ' + this.selectedOptions.theme.text,
          icon: 'theme',
          isArrow: true,
        },
        {
          id: 'language',
          label: 'Язык: ' + this.selectedOptions.language.text,
          icon: 'language',
          isArrow: true,
        },
        {
          id: 'guard',
          label: 'Безопасный режим: ' + this.selectedOptions.guard.text,
          icon: 'guard',
          isArrow: true,
        },
        {
          id: 'location',
          label: 'Страна: ' + this.selectedOptions.location.text,
          icon: 'location',
          isArrow: true,
        },
        {
          id: 'keyboard',
          label: 'Быстрые клавиши',
          icon: 'keyboard',
          isArrow: false,
        },
        {
          id: 'settings',
          label: 'Настройки',
          icon: 'settings',
          isArrow: false,
        },
        {
          id: 'help',
          label: 'Справка',
          icon: 'help',
          isArrow: false,
        },
        {
          id: 'reviews',
          label: 'Отправить отзыв',
          icon: 'reviews',
          isArrow: false,
        },
      ]
    },
  },
}
</script>

<style scoped></style>
