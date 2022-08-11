<template>
  <section class="text-xs px-6 py-4 font-semibold space-y-4">
    <div>
      <a
        v-for="link in links.slice(0, 7)"
        :key="link"
        href="#"
        class="inline-block mr-2"
        >{{ link }}</a
      >
    </div>
    <div>
      <a
        v-for="link in links.slice(7)"
        :key="link"
        href="#"
        class="inline-block mr-2"
        >{{ link }}</a
      >
    </div>
    <div class="font-normal text-gray-500">© 2022 Google LLC</div>
  </section>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      links: [
        'О сервисе',
        'Прессе',
        'Авторские права',
        'Связаться с нами',
        'Авторам',
        'Рекламодателям',
        'Разработчикам',
        'Условия использования',
        'Конфиденциальность',
        'Правила и безопасность',
        'Как работает YouTube',
        'Тестирование новых функций',
      ],
    }
  },
}
</script>

<style scoped></style>
