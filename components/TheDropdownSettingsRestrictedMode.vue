<template>
  <div>
    <dropdownSettingsHeader
      title="Безопасный режим"
      @back="$emit('selectMenu', 'main')"
    />
    <section class="px-3 py-4 space-y-4 text-black text-sm">
      <p>
        В безопасном режиме скрыты видео, которые не подходят для детей. Хотя
        идеальных фильтров не существует, в большинстве случаев защита работает.
      </p>
      <p>Безопасный режим будет включен только в этом браузере.</p>
      <div class="text-gray-400 font-semibold">
        <label class="flex items-center">
          ВКЛЮЧИТЬ БЕЗОПАСНЫЙ РЕЖИМ
          <span class="uppercase mr-4">
            <input
              type="checkbox"
              name="ВКЛЮЧИТЬ БЕЗОПАСНЫЙ РЕЖИМ"
              :checked="selectedOptions.guard.isActive"
              @input="selectOption"
            />
          </span>
        </label>
      </div>
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
  methods: {
    selectOption($event) {
      const isActive = $event.target.checked
      const value = { isActive, text: isActive ? 'вкл' : 'откл' }

      this.$emit('selectOption', { name: 'guard', value })
    },
  },
}
</script>

<style scoped></style>
