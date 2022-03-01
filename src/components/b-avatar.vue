<template>
  <div
    class="b-avatar"
    :class="[`b-avatar-${size}`, {'--inverted': inverted}]"
    :style="avatarStyle">
    <span v-if="text && !url">
      {{ text }}
    </span>
    <b-icon
      v-if="(!text && !url)"
      class="b-avatar-icon"
      name="user"
      :color="iconColor"
      :size="currentTheme.iconSize" />
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
    inverted: Boolean,
    isOnline: Boolean,
    circle: Boolean,
    size: {
      type: String,
      default: "s",
    },
    url: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  computed: {
    iconColor() {
      return this.inverted ? '$b-secondary-label-inverse' : '$b-secondary-label';
    },
    avatarStyle() {
      const style = {
        height: this.currentTheme.height,
        width: this.currentTheme.width,
        borderRadius: this.circle ? '50%' : this.currentTheme.borderRadius,
        fontSize: this.currentTheme.fontSize,
      }
      if (this.size === 'xl') {
        style.fontWeight = '700'
      }
      if (this.url) {
        style.backgroundImage = `url('${this.url}')`;
      }
      return style
    },
    currentTheme() {
      const sizesMap = {
        xl: {
          height: '64px',
          width: '64px',
          borderRadius: '20px',
          iconSize: '20',
          fontSize: '22px',
        },
        l: {
          height: '44px',
          width: '44px',
          borderRadius: '12px',
          iconSize: '20',
          fontSize: '15px',
        },
        m: {
          height: '40px',
          width: '40px',
          borderRadius: '12px',
          iconSize: '20',
          fontSize: '15px',
        },
        s: {
          height: '32px',
          width: '32px',
          borderRadius: '8px',
          iconSize: '16',
          fontSize: '13px',
        },
        xs: {
          height: '24px',
          width: '24px',
          borderRadius: '8px',
          iconSize: '16',
          fontSize: '11px',
        },
      }
      return sizesMap[this.size];
    }
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
.b-avatar {
  background: $b-base-02;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  color: $b-secondary-label;
  font-weight: 400;
  background: {
    size: contain;
    position: center;
    repeat: no-repeat;
  }
  &.--inverted {
    background-color: $b-night-base-02;
    color: $b-secondary-label-inverse;
  }
}
</style>