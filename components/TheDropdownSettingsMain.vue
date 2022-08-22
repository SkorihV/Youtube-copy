<template>
  <div>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="item in listItems.slice(0, 1)"
          @click.stop.native="selectMenu(item)"
          :key="item.label"
          :icon="item.icon"
          :label="item.label"
          :is-arrow="item.isArrow"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="item in listItems.slice(1, 6)"
          @click.stop.native="selectMenu(item)"
          :key="item.label"
          :icon="item.icon"
          :label="item.label"
          :is-arrow="item.isArrow"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="item in listItems.slice(6, 7)"
          @click.stop.native="selectMenu(item)"
          :key="item.label"
          :icon="item.icon"
          :label="item.label"
          :is-arrow="item.isArrow"
        />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem
          v-for="item in listItems.slice(7)"
          @click.stop.native="selectMenu(item)"
          :key="item.label"
          :icon="item.icon"
          :label="item.label"
          :is-arrow="item.isArrow"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from '@/components/DropdownSettingsListItem'

export default {
  name: 'TheDropdownSettingsMain',
  components: {
    DropdownSettingsListItem,
  },
  props: {
    selectedOptions: {
      type: Object,
    },
  },
  data() {
    return {
      listItems: [
        {
          id: 'userData',
          label: 'Личные данные на YouTube',
          icon: 'userData',
          isArrow: false,
        },
        {
          id: 'appearance',
          label: 'Тема: ' + this.selectedOptions.theme.text,
          icon: 'theme',
          isArrow: true,
        },
        {
          id: 'language',
          label: 'Язык: ' + this.selectedOptions.language.text,
          icon: 'language',
          isArrow: true,
        },
        {
          id: 'guard',
          label: 'Безопасный режим: ' + this.selectedOptions.guard.text,
          icon: 'guard',
          isArrow: true,
        },
        {
          id: 'location',
          label: 'Страна: ' + this.selectedOptions.location.text,
          icon: 'location',
          isArrow: true,
        },
        {
          id: 'keyboard',
          label: 'Быстрые клавиши',
          icon: 'keyboard',
          isArrow: false,
        },
        {
          id: 'settings',
          label: 'Настройки',
          icon: 'settings',
          isArrow: false,
        },
        {
          id: 'help',
          label: 'Справка',
          icon: 'help',
          isArrow: false,
        },
        {
          id: 'reviews',
          label: 'Отправить отзыв',
          icon: 'reviews',
          isArrow: false,
        },
      ],
    }
  },
  methods: {
    selectMenu(item) {
      if (item.isArrow) {
        this.$emit('selectMenu', item.id)
      }
    },
  },
}
</script>

<style scoped></style>
