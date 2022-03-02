<template>
  <div class="b-dropdown-item" @click="onClick"><slot></slot></div>
</template>

<script>
export default {
  name: "b-dropdown-item",
  methods: {
    onClick(event) {
      this.$root.$emit("dropdown:clickItem");
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss">
.b-dropdown-item {
  cursor: pointer;
  padding: 6px 8px;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
