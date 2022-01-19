<template>
  <div class="b-accordion" :class="{ 'b-accordion-open': showContent }">
    <div class="b-accordion-title" @click="toggle">
      <div>{{ title }}</div>
      <b-icon
        class="b-accordion-icon"
        name="arrow-down"
        size="24"
        color="$b-secondary-label"
      ></b-icon>
    </div>
    <div class="b-accordion-content" v-show="showContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BIcon from "./b-icon";
export default {
  name: "b-accordion",
  components: {
    BIcon,
  },
  props: {
    title: String,
  },
  data: function () {
    return {
      showContent: false,
    };
  },
  computed: {
    hasSlotTitle() {
      return this.$slots.title;
    },
    hasSlotBottom() {
      return this.$slots.bottom;
    },
  },
  methods: {
    toggle() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/mixins/fonts";
.b-accordion {
  border-radius: 8px;
  border: 1px solid $b-base-03;
  margin-bottom: 12px;

  &:hover {
    border-color: $b-base-04;
  }
}
.b-accordion-title {
  padding: 16px 24px;
  cursor: pointer;
  @include b-text-lb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}
.b-accordion-content {
  padding: 0 24px 24px 24px;
  @include b-text-m;
}
.b-accordion-icon {
  transition: transform 0.2s linear;
}

.b-accordion-open .b-accordion-icon {
  transform: rotate(180deg);
}
</style>
