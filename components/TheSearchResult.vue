<template>
  <div :class="classes">
    <ul>
      <li v-for="result in results" :key="result" :class="classesItems">
        {{ result }}
      </li>
    </ul>
    <a href="#" :class="reportLinkClasses"
      >Пожаловаться на результаты подсказок</a
    >
  </div>
</template>

<script>
export default {
  name: 'TheSearchResult',
  props: {
    results: {
      type: Array,
    },
  },
  data() {
    return {
      classes: [
        'absolute',
        'top-full',
        'w-full',
        'bg-white',
        'border',
        'border-t-0',
        'border-gray-300',
        'shadow-md pt-4',
      ],
      classesItems: [
        'hover:bg-gray-100',
        'text-black',
        'px-3',
        'py-1',
        'select-none',
        'truncate',
      ],
      reportLinkClasses: [
        'text-xs',
        'mx-2',
        'flex',
        'justify-end',
        'italic',
        'text-gray-500',
        'hover:text-black',
      ],
    }
  },
}
</script>

<style scoped></style>
