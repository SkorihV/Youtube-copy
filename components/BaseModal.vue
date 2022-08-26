<template>
  <div class="fixed inset-0 z-10 focus:outline-none"

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
      <BaseModalOverlay v-if="isOpen"  @click.native="close"></BaseModalOverlay>
   </transition>
    <div v-if="isOpen" class="relative bg-white max-w-sm mx-auto my-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click.native="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda aut blanditiis doloremque expedita, maxime quaerat quibusdam quisquam sunt unde, voluptatem? Accusamus esse et excepturi facere rerum tempore voluptas.
      </div>
    </div>
  </div>
</template>

<script>
import BaseModalButtonClose from "@/components/BaseModalButtonClose";
import BaseModalOverlay from "@/components/BaseModalOverlay";


export default {
  name: "BaseModal",
  components: {
    BaseModalButtonClose,
    BaseModalOverlay,
  },
  mounted() {
    this.$el.focus()
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    close() {
      this.isOpen = false
      setTimeout(() => {this.$emit('close')}, 100)

    }
  },
}
</script>

<style scoped>

</style>
