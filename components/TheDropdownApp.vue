<template>
  <div class="relative">
    <BaseTooltip text="Youtube приложения">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="viewGrid" class="w-5 h-5" isFill />
      </button>
    </BaseTooltip>

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
        class="dropdownClasses"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        ref="dropdown"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownAppListItem title="Главная" nameIcon="home" />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownAppListItem title="YouTube Music" nameIcon="play" />
            <DropdownAppListItem title="YouTube Детям" nameIcon="children" />
            <DropdownAppListItem title="YouTube Детям" nameIcon="tv" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import DropdownAppListItem from '~/components/DropdownAppListItem'
import BaseTooltip from '~/components/BaseTooltip'

export default {
  name: 'TheDropdownApp',
  components: {
    BaseIcon,
    DropdownAppListItem,
    BaseTooltip,
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
  computed: {
    dropdownClasses() {
      return [
        'z-10',
        'absolute',
        'top-9',
        'right-0',
        'sm:left-0',
        'bg-white',
        'w-60',
        'border',
        'border-t-0',
        'outline-none',
      ]
    },
  },
}
</script>

<style scoped></style>
