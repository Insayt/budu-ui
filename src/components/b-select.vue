<template>
  <b-btn
    class="b-select"
    icon-right="arrow-down"
    icon-right-color="rgba(60, 60, 67, 0.6)"
    :type="buttonType"
    :size="buttonSize"
    :_inselect="true"
    :_inselectHasValue="!!value.length"
    :class="{
      'b-select-checked': value.length,
    }"
    @cancel="handleCancel"
  >
    <div class="b-select-inner">
      <div class="b-select-placeholder">
        {{ placeholder }}
      </div>
      <div
        class="b-select-value"
        v-if="value.length && value.length === 1 && isOptionsObject()"
      >
        {{ value[0].label }}
      </div>
      <div
        class="b-select-value"
        v-if="value.length && value.length === 1 && !isOptionsObject()"
      >
        {{ value[0] }}
      </div>
      <div class="b-select-value" v-if="value.length && value.length > 1">
        Выбрано: {{ value.length }}
      </div>
    </div>
    <q-popup-proxy ref="content" :offset="[0, 8]" @before-hide="hidePopup">
      <div class="b-select-content">
        <div class="b-select-filter">
          <b-input
            icon="search"
            size="xs"
            :placeholder="searchPlaceholder"
            v-model="searchText"
            @input="handleInput"
            canceled
          />
        </div>
        <div class="b-select-items">
          <div class="b-select-empty" v-if="!options.length">
            Ничего не найдено
          </div>
          <template v-if="options.length && isOptionsObject()">
            <div
              class="b-select-item"
              v-for="(opt, index) of options"
              :key="index"
            >
              <b-checkbox v-model="value" _inselect :value="opt" size="s">
                {{ opt.label }}
              </b-checkbox>
            </div>
          </template>
          <template v-if="options.length && !isOptionsObject()">
            <div
              class="b-select-item"
              v-for="(opt, index) of options"
              :key="index"
            >
              <b-checkbox v-model="value" _inselect :value="opt" size="s">
                {{ opt }}
              </b-checkbox>
            </div>
          </template>
        </div>
      </div>
    </q-popup-proxy>
  </b-btn>
</template>

<script>
import BBtn from "./b-btn";
import BInput from "./b-input";
import BCheckbox from "./b-checkbox";

export default {
  name: "b-select",
  components: {
    BBtn,
    BInput,
    BCheckbox,
  },
  props: {
    options: Array,
    placeholder: String,
    searchPlaceholder: String,
    filterFn: Function,
    buttonSize: {
      type: String,
      default: "s",
    },
    buttonType: {
      type: String,
      default: "uncolored",
    },
  },
  data: function () {
    return {
      value: [],
      searchText: "",
    };
  },
  methods: {
    handleCancel() {
      this.value = [];
      this.$emit("input", []);
    },
    isOptionsObject() {
      return !!(this.options.length && typeof this.options[0] === "object");
    },
    hidePopup() {
      this.searchText = "";
      this.filterFn(this.searchText);
    },
    handleInput() {
      this.filterFn(this.searchText);
    },
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
        !this.hasSomeParentTheClass(event.target, "b-select") &&
        !this.hasSomeParentTheClass(event.target, "b-select-content")
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
  watch: {
    value: function (newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>

<style lang="scss">
@import "../variables";
.b-select {
  min-width: 300px;
  padding: 12px 16px;
}
.b-select-content {
  padding: 6px;
}
.b-select-inner {
  text-align: left;
  font-size: 15px;
}
.b-select-placeholder {
  line-height: 34px;
}
.b-select-checked {
  .b-select-placeholder {
    font-size: 11px;
    line-height: 15px;
  }
  .b-select-value {
    font-size: 13px;
    line-height: 19px;
  }
}
.b-select-filter {
  border-bottom: 1px solid $b-base-03;
  padding-bottom: 10px;
  margin-bottom: 6px;
}
.b-select-item {
  padding: 12px;
  border-radius: 6px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: $b-base-02;
  }
}
.b-select-empty {
  font-size: 13px;
  line-height: 20px;
  color: $b-secondary-label;
  text-align: center;
  padding-bottom: 6px;
}
.q-menu {
  border: 1px solid $b-base-04;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
  min-width: 300px;
}
</style>
