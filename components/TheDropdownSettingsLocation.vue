<template>
  <div>
    <dropdownSettingsHeader title="Выбери свою страну" @back="$emit('close')" />
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
import dropdownSubmenu from '@/mixins/dropdownSubmenu'

export default {
  name: 'TheDropdownSettingsAppearance',
  mixins: [dropdownSubmenu],
  data() {
    return {
      locations: ['Австралия', 'Алжир', 'Бельгия', 'Боливия', 'Гана', 'Россия'],
      optionName: 'location',
    }
  },
}
</script>

<style scoped></style>
