import DropdownSettingsListItem from '@/components/DropdownSettingsListItem'
import dropdownSettingsHeader from '@/components/DropdownSettingsHeader'

export default {
  components: {
    DropdownSettingsListItem,
    dropdownSettingsHeader,
  },
  props: {
    selectedOptions: {
      type: Object,
    },
  },
  data() {
    return {
      optionName: null,
    }
  },
  methods: {
    selectOption(data) {
      this.$emit('selectOption', { name: this.optionName, value: data })
    },
  },
}
