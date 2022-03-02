<template>
  <b-btn
    class="b-dropdown"
    :icon-right="iconRight"
    :type="buttonType"
    :size="buttonSize"
    :_dropdownIconOnly="!!iconOnly"
  >
    <b-icon
      v-if="iconOnly"
      :name="iconOnly"
      :size="iconSize"
      color="#000000" />
    <template v-if="label">
      {{ label }}
    </template>
    <template v-slot:proxy>
      <q-popup-proxy ref="content" :offset="[0, 8]">
        <div class="b-dropdown-content">
          <slot></slot>
        </div>
      </q-popup-proxy>
    </template>
  </b-btn>
</template>

<script>
import BBtn from "./b-btn";
import BIcon from "./b-icon";

export default {
  name: "b-dropdown",
  components: {
    BBtn,
    BIcon,
  },
  props: {
    label: String,
    buttonSize: {
      type: String,
      default: "s",
      validator(value) {
        return ['l', 'm', 's', 'xs'].includes(value)
      }
    },
    buttonType: {
      type: String,
      default: "primary",
    },
    icon: {
      type: String,
      default: "arrow-down",
    },
    iconOnly: {
      type: String,
    },
  },
  computed: {
    iconSize(){
      const sizesMap = {
        xl: 20,
        l: 20,
        m: 20,
        s: 16,
        xs: 16,
      }
      return sizesMap[this.buttonSize];
    },
    iconRight() {
      if (this.iconOnly) return false;
      return this.icon;
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
  padding: 0 !important;
  .b-btn-inner {
    padding: 6px 12px;
  }
}
.b-dropdown-content {
  padding: 6px;
}
.q-menu {
  border: 1px solid $b-base-04;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
  max-width: unset;
}
</style>
