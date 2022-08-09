<template>
  <section
    class="pt-14 fixed bg-white z-10 sm:pl-24 xl:pl-64 w-full bg-opacity-95"
  >
    <div class="max-w-screen-2xl m-auto border-t border-b px-4">
      <div
        class="py-3 flex space-x-3 overflow-x-auto text-sm whitespace-nowrap"
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
}
</script>

<style scoped></style>
