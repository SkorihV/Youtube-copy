<template>
  <div>
    <dropdownSettingsHeader title="Отображение" @back="$emit('close')" />
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
import dropdownSubmenu from '@/mixins/dropdownSubmenu'

export default {
  name: 'TheDropdownSettingsAppearance',
  mixins: [dropdownSubmenu],
  data() {
    return {
      themes: ['Светлая тема', 'Темная тема', 'Как в системе'],
      optionName: 'theme',
    }
  },
}
</script>

<style scoped></style>
