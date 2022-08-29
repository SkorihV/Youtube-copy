<template>
  <BaseModal>
    <p class="text-2xl mb-52">Говорите голосом</p>
    <button class="w-16 h-16 mx-auto bg-gray-300 rounded-full text-black flex justify-center items-center focus:outline-none">
      <BaseIcon name="microphone" class="w-5 h-5" isFill></BaseIcon>
    </button>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import BaseIcon from "@/components/BaseIcon";

export default {
  name: "TheModalSearchWithVoice",
  components: {
    BaseModal,
    BaseIcon
  }
}
</script>

<style scoped>

</style>
