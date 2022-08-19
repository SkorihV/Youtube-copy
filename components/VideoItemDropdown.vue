<template>
  <div class="relative ml-auto -mt-1" ref="dropdownWrap">
    <button :class="buttonClasses" @click="toggle">
      <BaseIcon name="dotsVertical" class="w-6 h-6 text-gray-500" is-stroke />
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
        :class="dropdownClasses"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        ref="dropdown"
      >
        <section>
          <ul>
            <VideoItemDropdownListItem
              icon="addQueue"
              label="Добавить в очередь"
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import VideoItemDropdownListItem from '@/components/VideoItemDropdownListItem'

export default {
  name: 'VideoItemDropdown',
  components: {
    BaseIcon,
    VideoItemDropdownListItem,
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!this.$refs.dropdownWrap.contains(e.target)) {
        this.isOpen = false
      }
    })

    // window.addEventListener('scroll', () => (this.isOpen = false))
  },
  data() {
    return {
      isOpen: false,
      positionsClasses: [],
    }
  },
  watch: {
    isOpen() {
      // document.body.classList.toggle('overflow-hidden')
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    },
  },
  methods: {
    toggle(e) {
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        this.$nextTick(() => {
          this.positionsClasses = this.getPositionClasses(e)
        })
      }
    },
    getPositionClasses(e) {
      return [
        this.getTopClass(e),
        this.getRightClass(e),
        this.getLeftClass(e),
        this.getBottomClass(e),
      ]
    },
    getTopClass(e) {
      const clickCoordY = e.clientY
      const buttonHeight = e.currentTarget.offsetHeight
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'top-auto'
      }

      if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
        return 'top-0'
      }

      return 'top-8'
    },
    getRightClass(e) {
      const clickCoordX = e.clientX
      const clickCoordY = e.clientY
      const buttonHeight = e.currentTarget.offsetHeight
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerWidth - clickCoordX > dropdownWidth) {
        return 'right-auto'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'right-0'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight) {
        return 'right-8'
      }

      return 'right-0'
    },
    getLeftClass(e) {
      const clickCoordX = e.clientX
      const clickCoordY = e.clientY
      const buttonHeight = e.currentTarget.offsetHeight
      const dropdownWidth = this.$refs.dropdown.offsetWidth
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerWidth - clickCoordX < dropdownWidth) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'left-auto'
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'left-auto'
      }

      return 'left-8'
    },
    getBottomClass(e) {
      const clickCoordY = e.clientY
      const dropdownHeight = this.$refs.dropdown.offsetHeight

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'bottom-9'
      }
      return 'bottom-auto'
    },
  },
  computed: {
    buttonClasses() {
      return [
        'p-1',
        'text-gray-500',
        'hover:text-gray-700',
        'focus:outline-none',

        this.isOpen ? 'opacity-100' : 'opacity-0',
        'group-hover:opacity-100',
      ]
    },
    dropdownClasses() {
      return [
        'z-30',
        'absolute',
        'bg-white',
        'w-56',
        'rounded',
        'shadow',
        'outline-none',
        ...this.positionsClasses,
      ]
    },
  },
}
</script>

<style scoped></style>
