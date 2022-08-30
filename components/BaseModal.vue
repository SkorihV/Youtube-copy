<template>
  <div
    class="fixed inset-0 z-10 focus:outline-none"
    @keydown.esc="close"
    tabindex="-1"
  >
    <transition
      appear
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class=" ease-in-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModalOverlay @click.native="close"></BaseModalOverlay>
    </transition>
    <div class="relative bg-white w-full sm:w-2/3 mx-auto my-8">
      <div v-if="withCloseButton" class="p-2 text-right">
        <BaseModalButtonClose @click.native="close" />
      </div>
      <div class="p-6">
        <slot />
      </div>
      <div>
        <slot name="footer" :close="close" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from '@/components/BaseModalButtonClose'
import BaseModalOverlay from '@/components/BaseModalOverlay'

export default {
  name: 'BaseModal',
  components: {
    BaseModalButtonClose,
    BaseModalOverlay,
  },
  mounted() {
    this.$el.focus()
  },
  props: {
    withCloseButton: {
      type: Boolean,
    },
  },
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    close() {
      this.isOpen = false
      setTimeout(() => {
        this.$emit('close')
      }, 100)
    },
  },
}
</script>

<style scoped></style>
