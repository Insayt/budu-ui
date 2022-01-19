<template>
  <div
    class="b-tab"
    :class="{ _active: isActive, _disabled: disabled }"
    @click="onClick"
  >
    <div class="b-tab-title" v-if="label">{{ label }}</div>
    <b-badge v-if="badge" size="xs" class="b-tab-badge">{{ badge }}</b-badge>
    <!--    TODO: Подумать нужен ли будет вложенный контент-->
    <!--    <div class="b-tab-content">-->
    <!--      <slot></slot>-->
    <!--    </div>-->
  </div>
</template>

<script>
import BBadge from "./b-badge";
export default {
  name: "b-tab",
  components: {
    BBadge,
  },
  props: {
    label: String, //Название визуальное
    name: String, //Название для переключения
    badge: [String, Number], // Цифра на бейджике
    disabled: Boolean,
  },
  computed: {
    isActive() {
      return this.$parent.value === this.name;
    },
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.$parent.onTabClick(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.b-tab {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 11px;
  padding-bottom: 11px;
  cursor: pointer;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.24);
    color: $b-secondary-label;
  }
  &._active {
    box-shadow: inset 0px -2px 0px $b-link;
    color: $b-link;
  }
  &:first-child {
    margin-right: 24px;
  }

  &._disabled {
    opacity: 0.56;
    cursor: not-allowed;
    &:hover {
      color: $b-primary-label;
      box-shadow: none;
    }
  }
}
.b-tab-badge {
  margin-left: 4px;
}
</style>
