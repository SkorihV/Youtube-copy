<template>
  <BaseModal @close="$emit('close')" with-close-button>
    <p class="text-2xl mb-52">{{ text }}</p>
    <TheButtonSearchWithVoice @change-text="text = $event" />
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import TheButtonSearchWithVoice from '@/components/TheButtonSearchWithVoice'

export default {
  name: 'TheModalSearchWithVoice',
  components: {
    BaseModal,
    TheButtonSearchWithVoice,
  },
  data() {
    return {
      text: null,
    }
  },
}
</script>

<style scoped></style>
