<template>
  <div class="flex h-full w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput @changeState="toggleState" v-model.trim="query" />
      <TheSearchResult v-show="isSearchResultShown" :results="results" :hasResults="results.length" />
    </div>
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from '~/components/TheSearchInput'
import TheSearchButton from '~/components/TheSearchButton'
import TheSearchResult from '@/components/TheSearchResult'

export default {
  name: 'TheSearch',
  components: {
    TheSearchInput,
    TheSearchButton,
    TheSearchResult,
  },
  data() {
    return {
      query: '',
      isSearchResultShown: false,
      keywords: [
        'уроки vue',
        'уроки vue js',
        'уроки vue 3',
        'уроки vue.js на русском',
        'уроки vue 2',
        'vue js уроки',
        'vuex  уроки',
      ],
    }
  },
  methods: {
    toggleState(state) {
      this.isSearchResultShown = state && this.results.length
    },
  },
  computed: {
    results() {
      if (!this.query) {
        return []
      }
      return this.keywords.filter((key) => key.includes(this.query))
    },
  },
}
</script>

<style scoped></style>
