<template>
  <div
    class="b-badge"
    :class="{
      'b-badge-m': size === 'm',
      'b-badge-s': size === 's',
      'b-badge-xs': size === 'xs',
      'b-badge-icon': icon,
    }"
    :style="getStyles()"
  >
    <template v-if="icon">
      <b-icon class="b-badge-icon" :name="icon" :size="getIconSize()"></b-icon>
    </template>
    <slot></slot>
  </div>
</template>

<script>
import { colored } from "./mixins/colored";
import BIcon from "./b-icon";
export default {
  name: "b-badge",
  mixins: [colored],
  components: {
    BIcon,
  },
  props: {
    size: {
      type: String,
      default: "s",
    },
    icon: String,
    color: String,
  },
  methods: {
    getContrastYIQ(hexcolor) {
      hexcolor = hexcolor.replace("#", "");
      const r = parseInt(hexcolor.substr(0, 2), 16);
      const g = parseInt(hexcolor.substr(2, 2), 16);
      const b = parseInt(hexcolor.substr(4, 2), 16);
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? "black" : "white";
    },
    getIconSize() {
      if (this.size === "m") return "16";
      if (this.size === "s") return "16";
      if (this.size === "xs") return "16";
      return "16";
    },
    getStyles() {
      const style = {};
      if (this.color) {
        if (this.getSystemColorByName(this.color)) {
          style.backgroundColor = this.getSystemColorByName(this.color);
        } else {
          style.backgroundColor = this.color;
        }
        style.color = this.getContrastYIQ(style.backgroundColor);
      }
      return style;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables";
.b-badge {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  line-height: 20px;
  color: $b-primary-label-inverse;
  background-color: $b-primary;
  border-radius: 16px;
  padding: 4px 12px;

  &.b-badge-m {
    font-size: 13px;
    line-height: 20px;
    padding: 4px 12px;
  }

  &.b-badge-s {
    font-size: 13px;
    line-height: 20px;
    padding: 0 8px;
  }

  &.b-badge-xs {
    font-size: 11px;
    line-height: 16px;
    padding: 0 4px;
  }

  .b-badge-icon {
    margin-right: 4px;
  }
}
</style>
