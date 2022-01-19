<template>
  <div class="b-tabs" :class="{ 'b-tabs-no-border': noBorder }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "b-tabs",
  props: {
    value: String,
    noBorder: Boolean,
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
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.12);
}

.b-tabs-no-border {
  box-shadow: none;
}
</style>
