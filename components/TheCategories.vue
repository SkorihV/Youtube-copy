<template>
  <section :class="classes">
    <div class="max-w-screen-2xl m-auto border-t border-b px-4">
      <div
        class="bg-white bg-opacity-95 py-3 flex space-x-3 overflow-x-auto text-sm whitespace-nowrap"
      >
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :titleCategory="category"
          :is-active="category === 'Все'"
        ></CategoryItem>
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from '~/components/CategoryItem'

export default {
  name: 'TheCategories',
  components: {
    CategoryItem,
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
    },
  },
  data() {
    return {
      categories: [
        'Все',
        'Видеоигры,',
        'Джемы',
        'Экшен и приключения',
        'Спортивные игры',
        'Ремесла',
        'Последние опубликованные',
        'Просмотрено',
        'Новое для',
      ],
    }
  },
  computed: {
    classes() {
      return  this.isSidebarOpen ? 'xl:pl-64' : 'sm:pl-24';
    },
  },
}
</script>

<style scoped></style>
