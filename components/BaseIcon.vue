<template>
  <svg
    :class="$attrs.class"
    :fill="fill"
    :stroke="stroke"
    :style="svgStyle"
    :viewBox="viewBox"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>

<script>
import icons from '~/icons'

export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      require: true,
    },
    isFill: {
      type: Boolean,
      default: false,
    },
    isStroke: {
      type: Boolean,
      default: false,
    },
    isSvgFill: {
      type: Boolean,
      default: false,
    },
    isSvgStroke: {
      type: Boolean,
      default: false,
    },
    isViewBox: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      path: icons[this.name],
    }
  },
  computed: {
    fill() {
      return this.isFill ? 'currentColor' : ''
    },
    stroke() {
      return this.isStroke ? 'currentColor' : ''
    },
    svgStyle() {
      let svgStyle = this.isSvgFill ? 'fill: currentColor' : ''
      svgStyle += this.isSvgStroke ? 'stroke: currentColor' : ''
      return svgStyle
    },
    viewBox() {
      return this.isViewBox.length ? this.isViewBox : '0 0 22 22'
    },
  },
}
</script>

<style scoped></style>
