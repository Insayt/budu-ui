<template>
  <b-btn
    class="b-select"
    icon-right="arrow-down"
    :type="buttonType"
    :size="buttonSize"
  >
    <div class="b-select-inner">
      {{ placeholder }}
      <div v-if="value.length">
        Выбрано {{ value.length }}
      </div>
    </div>
    <q-popup-proxy ref="content" :offset="[0, 8]">
      <div class="b-select-content">
        <div class="b-select-filter">
          <b-input
            icon="search"
            size="xs"
            placeholder="Начните набирать имя"
            v-model="searchText"
            canceled
          />
        </div>
        <div class="b-select-items">
          <div class="b-select-item">
            <b-checkbox v-model="value" _inselect value="Первый" size="s">Соболева Анастасия Ивановна</b-checkbox>
          </div>
          <div class="b-select-item">
            <b-checkbox v-model="value" _inselect value="Второй" size="s">Соловьева Екатерина Олеговна</b-checkbox>
          </div>
          <div class="b-select-item">
            <b-checkbox v-model="value" _inselect value="Третий" size="s">Сафронова Ирина Дмитриевна</b-checkbox>
          </div>
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
    placeholder: String,
    buttonSize: {
      type: String,
      default: "s",
    },
    buttonType: {
      type: String,
      default: "uncolored",
    },
  },
  data: function() {
    return {
      value: [],
      searchText: ''
    }
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
};
</script>

<style lang="scss">
@import "../variables";
.b-select {
}
.b-select-content {
  padding: 6px;
}
.b-select-inner {
  text-align: left;
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
.q-menu {
  border: 1px solid $b-base-04;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
}
</style>
