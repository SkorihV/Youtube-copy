<template>
  <div>
    <dropdownSettingsHeader
      title="Отображение"
      @back="$emit('selectMenu', 'main')"
    />
    <section class="py-2">
      <div class="text-gray-500 text-xs p-3">
        Настройки отображения только в браузере
      </div>
      <ul>
        <DropdownSettingsListItem
          v-for="(themeName, themeId) in themes"
          :label="themeName"
          :key="themeId"
          :active="themeId === selectedOptions.theme.id"
          @click.native="selectOption({ id: themeId, text: themeName })"
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
      themes: ['Светлая тема', 'Темная тема', 'Как в системе'],
    }
  },
  methods: {
    selectOption(data) {
      console.log(data)
      this.$emit('selectOption', { name: 'theme', value: data })
    },
  },
}
</script>

<style scoped></style>
