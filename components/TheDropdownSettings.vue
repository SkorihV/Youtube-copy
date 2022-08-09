<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          icon="userData"
          label="Личные данные на YouTube"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          icon="theme"
          label="Тема: как на устройстве"
          is-arrow
        />
        <DropdownSettingsListItem
          icon="language"
          label="Язык: Русский"
          is-arrow
        />
        <DropdownSettingsListItem
          icon="guard"
          label="Безопасный режим: откл"
          is-arrow
        />
        <DropdownSettingsListItem
          icon="location"
          label="Страна: Россия"
          is-arrow
        />
        <DropdownSettingsListItem icon="keyboard" label="Быстрые клавиши" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem icon="settings" label="Настройки" />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem icon="help" label="Справка" />
        <DropdownSettingsListItem icon="reviews" label="Отправить отзыв" />
      </ul>
    </section>
  </div>
</template>

<script>
import BaseIcon from '~/components/BaseIcon'
import DropdownSettingsListItem from '~/components/DropdownSettingsListItem'

export default {
  name: 'TheDropdownSettings',
  components: {
    BaseIcon,
    DropdownSettingsListItem,
  },
}
</script>

<style scoped></style>
