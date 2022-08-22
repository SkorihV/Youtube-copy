<template>
  <div>
    <dropdownSettingsHeader
      title="Выбери свою страну"
      @back="$emit('selectMenu', 'main')"
    />
    <section class="py-2">
      <ul class="max-h-96 overflow-auto">
        <DropdownSettingsListItem
          v-for="(locationName, locationId) in locations"
          :label="locationName"
          :key="locationId"
          :active="locationId === selectedOptions.location.id"
          @click.native="selectOption({ id: locationId, text: locationName })"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from '@/components/DropdownSettingsListItem'
import dropdownSettingsHeader from '@/components/dropdownSettingsHeader'

export default {
  name: 'TheDropdownSettingsAppearance',
  components: {
    DropdownSettingsListItem,
    dropdownSettingsHeader,
  },
  props: {
    selectedOptions: {
      type: Object,
    },
  },
  data() {
    return {
      locations: ['Австралия', 'Алжир', 'Бельгия', 'Боливия', 'Гана', 'Россия'],
    }
  },
  methods: {
    selectOption(data) {
      this.$emit('selectOption', { name: 'location', value: data })
    },
  },
}
</script>

<style scoped></style>
