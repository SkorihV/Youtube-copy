<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon name="dotsVertical" class="w-5 h-5" isFill />
    </button>
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transition opacity-100 scale-100"
      leave-active-class="transition ease-in-out duration-300"
      leave-from-class="transition opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0 outline-none"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        ref="dropdown"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem
              icon="userData"
              label="Личные данные на YouTube"
            />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem
              icon="theme"
              label="Тема: как на устройстве"
              is-arrow
            />
            <DropdownSettingsListItem
              icon="language"
              label="Язык: Русский"
              is-arrow
            />
            <DropdownSettingsListItem
              icon="guard"
              label="Безопасный режим: откл"
              is-arrow
            />
            <DropdownSettingsListItem
              icon="location"
              label="Страна: Россия"
              is-arrow
            />
            <DropdownSettingsListItem icon="keyboard" label="Быстрые клавиши" />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem icon="settings" label="Настройки" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownSettingsListItem icon="help" label="Справка" />
            <DropdownSettingsListItem icon="reviews" label="Отправить отзыв" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import DropdownSettingsListItem from '~/components/DropdownSettingsListItem'

export default {
  name: 'TheDropdownSettings',
  components: {
    BaseIcon,
    DropdownSettingsListItem,
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    })
  },
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    },
  },
}
</script>

<style scoped></style>
