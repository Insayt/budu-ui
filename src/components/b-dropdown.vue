<template>
  <b-btn
    class="b-dropdown"
    icon-right="arrow-down"
    :type="buttonType"
    :size="buttonSize"
  >
    {{ label }}
    <q-popup-proxy ref="content" :offset="[0, 8]">
      <div class="b-dropdown-content">
        <slot></slot>
      </div>
    </q-popup-proxy>
  </b-btn>
</template>

<script>
import BBtn from "./b-btn";

export default {
  name: "b-dropdown",
  components: {
    BBtn,
  },
  props: {
    label: String,
    buttonSize: {
      type: String,
      default: "s",
    },
    buttonType: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    hasSomeParentTheClass(element, classname) {
      if (
        element.className &&
        element.className.split(" ").indexOf(classname) >= 0
      )
        return true;
      return (
        element.parentNode &&
        this.hasSomeParentTheClass(element.parentNode, classname)
      );
    },
    hideContent() {
      this.$refs.content.hide();
    },
    // popup-proxy почему то не закрывается при клике за его пределами - костыльнем :)
    onClickDocument(event) {
      if (
        !this.hasSomeParentTheClass(event.target, "b-dropdown") &&
        !this.hasSomeParentTheClass(event.target, "b-dropdown-content")
      ) {
        this.hideContent();
      }
    },
    onClickItem() {
      this.$nextTick(() => {
        this.hideContent();
      });
    },
  },
  beforeDestroy() {
    this.$root.$off("dropdown:clickItem");
    document.removeEventListener("click", this.onClickDocument);
  },
  mounted() {
    this.$root.$on("dropdown:clickItem", this.onClickItem);
    document.addEventListener("click", this.onClickDocument);
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
.b-dropdown {
}
.b-dropdown-content {
  padding: 6px;
}
.q-menu {
  border: 1px solid $b-base-04;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
}
</style>
