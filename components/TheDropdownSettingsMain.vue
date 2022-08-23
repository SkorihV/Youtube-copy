<template>
  <div>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="item in menuItems.slice(0, 1)"
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
          v-for="item in menuItems.slice(1, 6)"
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
          v-for="item in menuItems.slice(6, 7)"
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
          v-for="item in menuItems.slice(7)"
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
    menuItems: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  methods: {
    selectMenu(item) {
      if (item.isArrow) {
        this.$emit('selectMenu', item)
      }
    },
  },
}
</script>

<style scoped></style>
