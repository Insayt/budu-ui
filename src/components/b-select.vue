<template>
  <b-btn
    class="b-select"
    icon-right="arrow-down"
    icon-right-color="rgba(60, 60, 67, 0.6)"
    :type="buttonType"
    :size="buttonSize"
    :_inselect="true"
    :_inselectHasValue="isChecked"
    :_inselectOpen="popup"
    :class="{
      'b-select-checked': isChecked,
      'b-select-disabled': disabled,
    }"
    @cancel="handleCancel"
  >
    <div class="b-select-inner">
      <div class="b-select-placeholder">
        {{ placeholder }}
      </div>
      <template v-if="multiple">
        <div
          class="b-select-value"
          v-if="val.length && val.length === 1 && isOptionsObject()"
        >
          {{ val[0].label }}
        </div>
        <div
          class="b-select-value"
          v-if="val.length && val.length === 1 && !isOptionsObject()"
        >
          {{ val[0] }}
        </div>
        <div class="b-select-value" v-if="val.length && val.length > 1">
          Выбрано: {{ val.length }}
        </div>
      </template>
      <template v-if="!multiple">
        <div class="b-select-value" v-if="val">
          <template v-if="isOptionsObject()">
            {{ val.label }}
          </template>
          <template v-else>
            {{ val }}
          </template>
        </div>
      </template>
    </div>
    <q-popup-proxy
      ref="content"
      :offset="[0, 8]"
      @before-hide="hidePopup"
      v-model="popup"
    >
      <div class="b-select-content custom-scroll">
        <div class="b-select-filter" v-if="filterFn">
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
            <template v-if="!multiple">
              <div
                class="b-select-item"
                :class="{ _single: !multiple }"
                v-for="(opt, index) of options"
                :key="index"
              >
                <label>
                  {{ opt.label }}
                  <input type="radio" :value="opt" v-model="val" />
                  <b-icon
                    name="check"
                    v-if="isCurrentSingleValue(opt)"
                  ></b-icon>
                </label>
              </div>
            </template>
            <tempalte v-if="multiple">
              <div
                class="b-select-item"
                :_inselect="true"
                v-for="(opt, index) of options"
                :key="index"
              >
                <b-checkbox v-model="val" _inselect :value="opt" size="s">
                  {{ opt.label }}
                </b-checkbox>
              </div>
            </tempalte>
          </template>
          <template v-if="options.length && !isOptionsObject()">
            <template v-if="!multiple">
              <div
                class="b-select-item"
                :class="{ _single: !multiple }"
                v-for="(opt, index) of options"
                :key="index"
              >
                <label>
                  {{ opt }}
                  <input type="radio" :value="opt" v-model="val" />
                  <b-icon
                    name="check"
                    v-if="isCurrentSingleValue(opt)"
                  ></b-icon>
                </label>
              </div>
            </template>
            <template v-if="multiple">
              <div
                class="b-select-item"
                :_inselect="true"
                v-for="(opt, index) of options"
                :key="index"
              >
                <b-checkbox v-model="val" _inselect :value="opt" size="s">
                  {{ opt }}
                </b-checkbox>
              </div>
            </template>
          </template>
        </div>
      </div>
    </q-popup-proxy>
  </b-btn>
</template>

<script>
import BBtn from "./b-btn";
import BIcon from "./b-icon";
import BInput from "./b-input";
import BCheckbox from "./b-checkbox";

export default {
  name: "b-select",
  components: {
    BBtn,
    BIcon,
    BInput,
    BCheckbox,
  },
  props: {
    value: [Array, Object, String],
    disabled: Boolean,
    options: Array,
    placeholder: String,
    multiple: Boolean,
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
      val: null,
      searchText: "",
      popup: false,
      isMounted: false,
    };
  },
  computed: {
    isChecked() {
      if (this.multiple) {
        return !!this.val.length;
      } else {
        if (this.isOptionsObject() && this.val) {
          return Object.keys(this.val).length !== 0;
        }
        return !!this.val;
      }
    },
  },
  methods: {
    isCurrentSingleValue(val) {
      if (this.val === null) return false;
      if (typeof val === "object" && val !== null) {
        return val.value === this.val.value;
      }
      return this.val === val;
    },
    handleCancel() {
      if (this.multiple) {
        this.val = [];
      } else {
        this.val = null;
      }
      this.$emit("input", []);
    },
    isOptionsObject() {
      return !!(this.options.length && typeof this.options[0] === "object");
    },
    hidePopup() {
      this.searchText = "";
      if (this.filterFn) {
        this.filterFn(this.searchText);
      }
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
  created() {
    if (this.multiple) {
      this.val = [];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isMounted = true;
    });
    this.$root.$on("dropdown:clickItem", this.onClickItem);
    document.addEventListener("click", this.onClickDocument);
  },
  watch: {
    val: function (newVal) {
      if (!this.isMounted) return;
      this.$emit("input", newVal);
    },
    value: function (value) {
      this.val = value;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
.b-select {
  min-width: 300px;
  padding: 12px 16px;
  position: relative;
}
.b-select-disabled {
  opacity: 0.64;
  pointer-events: none;
  cursor: not-allowed;
}
.b-select-content {
  padding: 6px;
  max-height: 350px;
  max-width: 300px;
  overflow-x: hidden;
}
.b-select-inner {
  text-align: left;
  font-size: 15px;
}
.b-select-placeholder {
  line-height: 34px;
  color: $b-secondary-label;
}
.b-select-checked {
  .b-select-placeholder {
    font-size: 11px;
    line-height: 15px;
  }
  .b-select-value {
    font-size: 13px;
    line-height: 19px;
    max-width: 210px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.b-select-filter {
  border-bottom: 1px solid $b-base-03;
  margin: 6px 8px;
  padding-bottom: 12px;
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

.b-select-item._single {
  //display: none;
  cursor: pointer;
  font-size: 13px;
  border-radius: 6px;

  &:hover {
    background-color: $b-base-02;
  }
  input {
    visibility: hidden;
  }
  label {
    padding: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
}
</style>
