<template>
  <div>
    <input
      class="h-5 w-5 cursor-pointer"
      type="checkbox"
      :id="id"
      :name="name"
      :value="selectedSearchPredictions"
      v-model="selectedSearchPredictions"
    />
    <label v-if="$slots.default" class="pl-4 cursor-pointer flex-grow" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    id: {
      type: Number
    },
    value: {
      type: Array
    },
    name: {
      type: String
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
