<template>
  <label
    class="b-checkbox"
    :class="{
      'b-checkbox-disabled': disabled,
      'b-checkbox-small': size === 's',
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
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
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
  padding-left: 28px;
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
  }

  &:hover input ~ .b-checkbox-checkmark {
    background-color: $b-base-02;
  }

  input:checked ~ .b-checkbox-checkmark {
    background-color: $b-primary;
    border-color: $b-primary;
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
  }
}
</style>
