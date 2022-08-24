<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click')"
      >
        <span @mouseenter="$emit('search-result-mouseenter', id)">{{
          text
        }}</span>
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
    activeResultId: {
      type: Number,
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
  methods: {
    getItemClasses(resultId) {
      return [
        resultId === this.activeResultId ? 'bg-gray-100' : 'bg-transparent',
        'text-black',
        'px-3',
        'py-1',
        'select-none',
        'truncate',
      ]
    },
  },
}
</script>

<style scoped></style>
