<template>
  <label
    class="b-input"
    :class="{
      'b-input-disabled': disabled,
      'b-input-l': size === 'l',
      'b-input-m': size === 'm',
      'b-input-s': size === 's',
      'b-input-xs': size === 'xs',
    }"
  >
    <template v-if="icon">
      <b-icon
        class="b-input-icon"
        color="$b-secondary-label"
        size="16"
        :name="icon"
      ></b-icon>
    </template>
    <input
      type="text"
      class="b-input-control"
      :disabled="disabled"
      v-model="innerValue"
      @input="handleInput"
      v-bind="$attrs"
    />
    <template v-if="canceled">
      <b-icon
        class="b-input-close"
        color="$b-secondary-label"
        name="close"
        size="16"
        @click="clean"
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
    canceled: Boolean,
    disabled: {
      default: false,
    },
    size: {
      type: String,
      default: "m",
    },
  },
  data: function () {
    return {
      innerValue: "",
    };
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
  padding: 17px 40px;
}

.b-input-m .b-input-control {
  font-size: 15px;
  padding: 13px 40px;
}

.b-input-s {
  .b-input-control {
    padding: 9px 36px;
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
    padding: 5px 34px;
    border-radius: 8px;
  }
  .b-input-icon {
    left: 10px;
  }

  .b-input-close {
    right: 10px;
  }
}
</style>
