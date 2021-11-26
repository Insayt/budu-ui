<template>
  <i
    class="b-icon"
    :class="`icon-${name}`"
    :style="getStyles()"
    v-on="$listeners"
  ></i>
</template>

<script>
import { colored } from "./mixins/colored";
export default {
  name: "b-icon",
  mixins: [colored],
  props: {
    name: {
      type: String,
      required: true,
    },
    size: String,
    color: String,
  },
  methods: {
    getStyles() {
      const style = {
        fontSize: this.size ? this.size + "px" : "16px",
      };
      if (this.color) {
        if (this.getSystemColorByName(this.color)) {
          style.color = this.getSystemColorByName(this.color);
        } else {
          style.color = this.color;
        }
      }
      return style;
    },
  },
};
</script>

<style scoped lang="scss">
.b-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
