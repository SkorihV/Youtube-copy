<template>
  <div class="w-full relative">
    <input
      type="text"
      placeholder="Введите значение"
      :class="classes"
      ref="input"
      v-model="searchQuery"
      @blur="setState(false)"
      @focus="setState(true)"
      @keyup.esc="handleEsc"
      @click="setState(true)"
    />
    <button
      v-show="searchQuery"
      class="text-gray-400 top-0 right-0 absolute h-full px-3 focus:outline-none"
      @click="clear"
    >
      <BaseIcon name="x" class="w-5 h-5" is-svg-stroke />
    </button>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'TheSearchInput',
  components: {
    BaseIcon,
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$refs.input.focus()
    }

    document.addEventListener('keydown', this.onKeydown)
  },
  props: ['value', 'hasResults'],

  destroyed() {
    document.removeEventListener('keydown', this.onKeydown)
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    onKeydown(e) {
      const isInputFocused = this.$refs.input === document.activeElement
      if (e.code === 'Slash' && !isInputFocused ) {
        e.preventDefault()

        this.$refs.input.focus()
      }
    },
    setState(isActive) {
      this.isActive = isActive
      this.$emit('changeState', isActive)
    },
    handleEsc() {
      if (this.isActive && this.hasResults) {
        this.setState(false)
      } else {
        this.$refs.input.blur()
      }
    },
    clear() {
      this.searchQuery = '';
      this.$refs.input.focus()
    }
  },
  computed: {
    classes() {
      return [
        'w-full',
        'h-full',
        'px-3',
        'shadow-inner',
        'rounded-bl-sm',
        'rounded-tl-sm',
        'border',
        'border-gray-300',
        'focus:outline-none',
        'focus:border-blue-700',
      ]
    },
    searchQuery: {
      get() {
        return this.value
      },

      set(searchQuery) {
        this.$emit('input', searchQuery)
        this.setState(this.isActive)
      },
    },
  },
}
</script>

<style scoped></style>
