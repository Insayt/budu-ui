<template>
  <div class="b-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "b-tabs",
  props: {
    value: String,
  },
  methods: {
    onTabClick(tab) {
      this.$emit("input", tab);
    },
  },
};
</script>

<style scoped>
.b-tabs {
  display: inline-flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
