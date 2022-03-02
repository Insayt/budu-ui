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
      <span
        class="b-avatar__status"
        :class="`--${status}`" />
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
    circle: Boolean,
    inverted: Boolean,
    url: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return ['xl', 'l', 'm', 's', 'xs'].includes(value)
      }
    },
    status: {
      type: String,
      default: 'offline',
      validator(value) {
        return ['online', 'offline'].includes(value)
      }
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
        },
        l: {
          height: '44px',
          width: '44px',
          borderRadius: '12px',
          iconSize: '20',
        },
        m: {
          height: '40px',
          width: '40px',
          borderRadius: '12px',
          iconSize: '20',
        },
        s: {
          height: '32px',
          width: '32px',
          borderRadius: '8px',
          iconSize: '16',
        },
        xs: {
          height: '24px',
          width: '24px',
          borderRadius: '8px',
          iconSize: '16',
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
@import "../assets/styles/mixins/fonts";
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
  &-xl{
    @include b-h4;
  }
  &-l{
    @include b-text-m;
  }
  &-m{
    @include b-text-m;
  }
  &-s{
    @include b-text-s;
  }
  &-xs{
    @include b-text-xs;
  }
  &__status {
    position: absolute;
    bottom: -2px;
    right: -1px;
    z-index: 3;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: $b-base-01;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &::before{
      content: '';
      position: absolute;
      background-color: $b-tertiary-label;
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }
    &.--online {
      &::before{
        background-color: $b-support-302;
        height: 8px;
        width: 8px;
        border-radius: 50%;
      }
    }
  }
  &.--inverted {
    background-color: $b-night-base-02;
    color: $b-secondary-label-inverse;
  }
}
</style>