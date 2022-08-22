<template>
  <div>
    <dropdownSettingsHeader
      title="Выбери свой язык"
      @back="$emit('selectMenu', 'main')"
    />
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
      languages: ['English', 'Русский'],
    }
  },
  methods: {
    selectOption(data) {
      this.$emit('selectOption', { name: 'language', value: data })
    },
  },
}
</script>

<style scoped></style>
