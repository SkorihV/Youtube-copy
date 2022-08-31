<template>
  <div class="space-y-3 text-black text-sm tracking-wide">
    <div
      class="flex items-start"
      v-for="(label, index) in searchPredictions"
      :key="label"
    >
      <BaseCheckbox
        v-model="selectedSearchPredictions"
        :name="label"
        :id="index"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "@/components/BaseCheckbox";

export default {
  name: "TheSearchPredictionsList",
  components: {
    BaseCheckbox
  },
  props: {
    searchPredictions: {
      type: Array
    },
    value: {
      type: Array
    }
  },
  data() {
    return {
      selectedSearchPredictions: this.value
    }
  },
  watch: {
    selectedSearchPredictions() {
      this.$emit('input', this.selectedSearchPredictions)
    }
  }
}
</script>

<style scoped>

</style>
