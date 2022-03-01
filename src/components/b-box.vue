<template>
  <div
    class="b-box"
    :class="[{'--nopadding': nopadding}]">
    <slot />
  </div>
</template>
<script>
export default {
  name: "b-box",
  props: {
    nopadding: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.b-box {
  background: #fff;
  border: 1px solid $b-base-03;
  border-radius: 8px;
  padding: 12px 24px;
  width: 100%;
  margin-bottom: 8px;
  &.--nopadding {
    padding: 0;
  }
}
</style>