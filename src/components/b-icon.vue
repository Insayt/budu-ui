<template>
  <i :class="`icon-${name}`" :style="getStyles()"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: String,
    color: String,
  },
  name: "b-icon",
  methods: {
    getStyles() {
      const style = {
        fontSize: this.size ? this.size + "px" : "16px",
      };
      if (this.color) {
        style.color = this.color;
      }
      return style;
    },
  },
};
</script>

<style scoped></style>
