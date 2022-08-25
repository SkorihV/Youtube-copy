<template>
  <div class="flex h-full w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model.trim="query"
        @input="updateSearchResults"
        @changeState="toggleState"
        @handlePreviousSearchResult="handlePreviousSearchResult"
        @handleNextSearchResult="handleNextSearchResult"
        @enter="selectSearchResult"
      />
      <TheSearchResult
        v-show="isSearchResultShown"
        :results="results"
        :hasResults="results.length"
        :activeResultId="activeSearchResultId"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <TheSearchButton @click.stop="selectSearchResult" />
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
  props: ['searchQuery',],
  mounted() {
    window.addEventListener('click', this.onClickAndResize)
    window.addEventListener('resize', this.onClickAndResize)
  },
  data() {
    return {
      results: [],
      query: '',
      activeQuery: '',
      isSearchResultShown: false,
      activeSearchResultId: null,
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
    onClickAndResize() {
      this.toggleState(false)
    },
    updateSearchResults() {
      this.activeSearchResultId = null
      this.activeQuery = this.query
      if (this.query) {
        this.results = []
      }
      this.results = this.keywords.filter((key) => key.includes(this.query))
    },
    toggleState(state) {
      this.isSearchResultShown = state && this.results.length > 0
    },
    handlePreviousSearchResult() {
      if (this.isSearchResultShown) {
        this.makePreviousSearchResultActive()
        this.updateQueryWithSearchResult()
      } else {
        this.toggleState(true)
      }
    },
    handleNextSearchResult() {
      if (this.isSearchResultShown) {
        this.makeNextSearchResultActive()
        this.updateQueryWithSearchResult()
      } else {
        this.toggleState(true)
      }
    },
    makeNextSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = 0
      } else if (this.activeSearchResultId + 1 === this.results.length) {
        this.activeSearchResultId = null
      } else {
        this.activeSearchResultId++
      }
    },
    makePreviousSearchResultActive() {
      if (this.activeSearchResultId === null) {
        this.activeSearchResultId = this.results.length - 1
      } else if (this.activeSearchResultId === 0)
        this.activeSearchResultId = null
      else {
        this.activeSearchResultId--
      }
    },
    updateQueryWithSearchResult() {
      const hasActiveSearchResult = this.activeSearchResultId !== null

      this.query = hasActiveSearchResult
        ? this.results[this.activeSearchResultId]
        : this.activeQuery
    },
    selectSearchResult() {
      this.query = this.activeSearchResultId === null
        ? this.query
        : this.results[this.activeSearchResultId]

      this.toggleState(false)
      this.updateSearchResults()
    },
  },

}
</script>

<style scoped></style>
