<template>
  <div>
    <dropdownSettingsHeader title="Выбери свой язык" @back="$emit('close')" />
    <section class="py-2">
      <ul class="max-h-96 overflow-auto">
        <DropdownSettingsListItem
          v-for="(languageName, languageId) in languages"
          :label="languageName"
          :key="languageId"
          :active="languageId === selectedOptions.language.id"
          @click.native="selectOption({ id: languageId, text: languageName })"
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
      languages: ['English', 'Русский'],
      optionName: 'language',
    }
  },
}
</script>

<style scoped></style>
