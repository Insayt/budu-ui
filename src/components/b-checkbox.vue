<template>
  <label
    class="b-checkbox"
    :class="{
      'b-checkbox-disabled': disabled,
      'b-checkbox-small': size === 's',
      'b-checkbox-select': _inselect,
    }"
  >
    <slot></slot>
    <input
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
    />
    <b-icon
      class="b-checkbox-checkmark"
      name="check"
      color="$b-base-01"
    ></b-icon>
    <div class="b-checkbox-hint" v-if="hasSlotHint">
      <b-icon name="help" color="$b-tertiary-label"></b-icon>
      <div class="b-checkbox-hint-content">
        <slot name="hint"></slot>
      </div>
    </div>
  </label>
</template>

<script>
import BIcon from "./b-icon";
export default {
  name: "b-checkbox",
  model: {
    prop: "modelValue",
    event: "change",
  },
  components: {
    BIcon,
  },
  props: {
    value: {
      type: String,
    },
    modelValue: {
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
    disabled: {
      default: false,
    },
    size: {
      type: String,
      default: "m",
    },
    _inselect: {
      // Если чекбокс внутри селекта
      type: Boolean,
    },
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    },
    hasSlotHint() {
      return this.$slots.hint;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables";
.b-checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 29px;
  cursor: pointer;
  font-size: 15px;
  line-height: 20px;
  user-select: none;
  color: $b-primary-label;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .b-checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: $b-base-01;
    border: 1px solid $b-base-05;
    border-radius: 4px;

    &:before {
      display: none;
    }
  }

  &:hover input ~ .b-checkbox-checkmark {
    background-color: $b-base-02;
  }

  &.b-checkbox-select:hover input ~ .b-checkbox-checkmark {
    background-color: $b-base-01;
  }

  input:checked ~ .b-checkbox-checkmark {
    background-color: $b-primary !important;
    border-color: $b-primary !important;
    &:before {
      display: block;
    }
  }

  &.b-checkbox-disabled {
    opacity: 0.48;
    cursor: not-allowed;
  }

  &.b-checkbox-small {
    font-size: 13px;
    padding-left: 24px;

    .b-checkbox-checkmark {
      height: 16px;
      width: 16px;
      top: 2px;
    }
    .b-checkbox-hint {
      top: 3px;
    }
  }

  .b-checkbox-hint {
    position: relative;
    margin-left: 8px;
    top: 2px;

    .b-checkbox-hint-content {
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
      .b-checkbox-hint-content {
        display: block;
      }
    }
  }
}
</style>
