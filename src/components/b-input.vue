<template>
  <label class="b-input" :class="classObject">
    <template v-if="icon">
      <b-icon
        class="b-input-icon"
        color="$b-secondary-label"
        size="16"
        bold
        :name="icon"
      ></b-icon>
    </template>
    <textarea
      v-if="type === 'textarea'"
      class="b-input-control"
      :disabled="disabled"
      v-model="innerValue"
      @input="handleInput"
      v-bind="$attrs"
    />
    <input
      v-else
      :type="type"
      class="b-input-control"
      :disabled="disabled"
      v-model="innerValue"
      @input="handleInput"
      v-bind="$attrs"
    />
    <div class="b-input-hint" v-if="hasSlotHint">
      <b-icon bold name="help" color="$b-secondary-label"></b-icon>
      <div class="b-input-hint-content">
        <slot name="hint"></slot>
      </div>
    </div>
    <div class="b-input-error" v-if="error">
      {{ error }}
    </div>
    <template v-if="canceled && innerValue">
      <b-icon
        class="b-input-close"
        color="$b-secondary-label"
        name="close"
        size="16"
        bold
        @click.stop="clean"
      ></b-icon>
    </template>
  </label>
</template>

<script>
import BIcon from "./b-icon";
export default {
  name: "b-input",
  components: {
    BIcon,
  },
  props: {
    value: String,
    icon: String,
    error: String,
    canceled: Boolean,
    light: Boolean,
    disabled: {
      default: false,
    },
    size: {
      type: String,
      default: "m",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: function () {
    return {
      innerValue: "",
    };
  },
  computed: {
    classObject: function () {
      const data = {
        "b-input-disabled": this.disabled,
        "b-input-l": this.size === "l",
        "b-input-m": this.size === "m",
        "b-input-s": this.size === "s",
        "b-input-xs": this.size === "xs",
        "b-input-left-icon": this.icon,
        "b-input-light": this.light,
      };
      if (this.error) {
        data["b-input-has-error"] = true;
        return data;
      }
      if (this.canceled && this.hasSlotHint) {
        data["b-input-double-icon"] = true;
        return data;
      }
      if (this.canceled) {
        data["b-input-canceled-icon"] = true;
      }
      if (this.hasSlotHint) {
        data["b-input-hint-icon"] = true;
      }
      return data;
    },
    hasSlotHint() {
      return this.$slots.hint;
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.innerValue);
    },
    clean() {
      this.innerValue = "";
      this.$emit("input", "");
    },
  },
  watch: {
    value(val) {
      this.innerValue = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";
.b-input {
  position: relative;
}

.b-input-control {
  width: 100%;
  padding: 34px 16px;
  background-color: $b-base-01;
  border: 1px solid $b-base-05;
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 15px;
  line-height: 20px;
  color: $b-secondary-label;
  outline: none;

  &:hover {
    background-color: $b-base-02;
    border-color: $b-base-05;
  }

  &:focus {
    background-color: $b-base-01;
    border-color: $b-base-09;
    color: $b-primary-label;
  }
}

.b-input-has-error .b-input-control {
  background-color: transparentize($b-negative, 0.88);
}

.b-input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.b-input-close {
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}

.b-input-l .b-input-control {
  font-size: 15px;
  padding: 17px 16px;
}

.b-input-m .b-input-control {
  font-size: 15px;
  padding: 13px 16px;
}

.b-input-s {
  .b-input-control {
    padding: 9px 12px;
  }

  .b-input-icon {
    left: 12px;
  }

  .b-input-close {
    right: 12px;
  }
}

.b-input-xs {
  .b-input-control {
    padding: 5px 10px;
    border-radius: 8px;
  }
  .b-input-icon {
    left: 10px;
  }

  .b-input-close {
    right: 10px;
  }
}

// Когда есть иконка слева
.b-input-left-icon {
  &.b-input-l {
    .b-input-icon {
      left: 16px;
    }
    .b-input-control {
      padding-left: 40px;
    }
  }
  &.b-input-m {
    .b-input-icon {
      left: 16px;
    }
    .b-input-control {
      padding-left: 40px;
    }
  }
  &.b-input-s {
    .b-input-icon {
      left: 12px;
    }
    .b-input-control {
      padding-left: 36px;
    }
  }
  &.b-input-xs {
    .b-input-icon {
      left: 10px;
    }
    .b-input-control {
      padding-left: 34px;
    }
  }
}

// Когда есть подсказка
.b-input-hint-icon,
.b-input-canceled-icon {
  &.b-input-l {
    .b-input-control {
      padding-right: 40px;
    }
  }
  &.b-input-m {
    .b-input-control {
      padding-right: 40px;
    }
  }
  &.b-input-s {
    .b-input-hint {
      right: 12px;
    }
    .b-input-control {
      padding-right: 36px;
    }
  }
  &.b-input-xs {
    .b-input-hint {
      right: 10px;
    }
    .b-input-control {
      padding-right: 34px;
    }
  }
}

// Когда есть подсказка и отмена
.b-input-double-icon {
  &.b-input-l {
    .b-input-hint {
      right: 16px;
    }
    .b-input-close {
      right: 40px;
    }
    .b-input-control {
      padding-right: 60px;
    }
  }
  &.b-input-m {
    .b-input-hint {
      right: 16px;
    }
    .b-input-close {
      right: 40px;
    }
    .b-input-control {
      padding-right: 60px;
    }
  }
  &.b-input-s {
    .b-input-hint {
      right: 12px;
    }
    .b-input-close {
      right: 36px;
    }
    .b-input-control {
      padding-right: 60px;
    }
  }
  &.b-input-xs {
    .b-input-hint {
      right: 10px;
    }
    .b-input-close {
      right: 34px;
    }
    .b-input-control {
      padding-right: 58px;
    }
  }
}

// Без рамок
.b-input-light {
  .b-input-control {
    border: none;
    border-bottom: 1px solid $b-base-04;
    border-radius: 0 !important;
    padding-left: 0 !important;
  }
}

// Подсказка
.b-input-hint {
  display: inline;
  position: absolute;
  height: 16px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  .b-input-hint-content {
    color: $b-base-09;
    background-color: $b-base-01;
    font-size: 13px;
    line-height: 20px;
    display: none;
    min-width: 130px;
    max-width: 300px;
    position: absolute;
    padding: 8px 10px;
    border: 1px solid $b-base-04;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    &:before {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -9px;
      display: block;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: $b-base-04 transparent transparent transparent;
    }

    &:after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -8px;
      display: block;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: white transparent transparent transparent;
    }
  }
  &:hover {
    .b-input-hint-content {
      display: block;
    }
  }
}
.b-input-error {
  font-size: 11px;
  line-height: 16px;
  color: $b-support-104;
  margin-top: 4px;
}
</style>
