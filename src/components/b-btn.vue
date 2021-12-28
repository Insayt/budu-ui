<template>
  <button
    class="b-btn"
    :class="{
      'b-btn-primary': type === 'primary',
      'b-btn-secondary': type === 'secondary',
      'b-btn-pale': type === 'pale',
      'b-btn-ghost': type === 'ghost',
      'b-btn-outline': type === 'outline',
      'b-btn-uncolored': type === 'uncolored',
      'b-btn-l': size === 'l',
      'b-btn-m': size === 'm',
      'b-btn-s': size === 's',
      'b-btn-xs': size === 'xs',
      'b-btn-icon-only': iconOnly,
      'b-btn-block': block,
      'b-btn-loading': loading,
      'b-btn-select': _inselect,
      'b-btn-select-open': _inselectOpen,
      'b-btn-indate-open': _indateOpen,
    }"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <template v-if="loading">
      <b-icon
        class="b-btn-icon-loading-icon"
        name="reload"
        :size="getIconSize()"
        :color="getIconColor()"
      ></b-icon>
    </template>
    <span class="b-btn-inner">
      <template v-if="iconLeft">
        <b-icon
          class="b-btn-icon-left"
          bold
          :name="iconLeft"
          :size="getIconSize()"
          :color="getIconColor()"
        ></b-icon>
      </template>
      <slot></slot>
      <template v-if="iconOnly">
        <b-icon bold :name="iconOnly" :size="getIconSize()"></b-icon>
      </template>
      <template v-if="iconRight">
        <div class="b-btn-icons-right">
          <b-icon
            v-if="_inselectHasValue"
            class="b-btn-icon-right"
            name="close"
            bold
            :size="getIconSize()"
            :color="getIconColor()"
            @click="$emit('cancel')"
          ></b-icon>
          <b-icon
            class="b-btn-icon-right b-icon-last"
            bold
            :name="iconRight"
            :color="getIconColor()"
            :size="getIconSize()"
          ></b-icon>
        </div>
      </template>
    </span>
  </button>
</template>

<script>
import BIcon from "./b-icon";
export default {
  name: "b-btn",
  components: {
    BIcon,
  },
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "s",
    },
    block: {
      type: Boolean,
    },
    loading: Boolean,
    iconLeft: String,
    iconRight: String,
    iconRightColor: String,
    iconOnly: String,
    _inselect: {
      // Если кнопка внутри селекта
      type: Boolean,
    },
    _inselectHasValue: {
      // Если кнопка внутри селекта и есть выбранное значение - что бы показать сброс
      type: Boolean,
    },
    _inselectOpen: {
      // Если кнопка внутри селекта и селект открыт
      type: Boolean,
    },
    _indateOpen: {
      // Если кнопка внутри датапикера и селект открыт
      type: Boolean,
    },
  },
  methods: {
    getIconSize() {
      if (this.size === "l") return "24";
      if (this.size === "m") return "18";
      if (this.size === "s") return "16";
      if (this.size === "xs") return "14";
      return "16";
    },
    getIconColor() {
      if (this.iconRightColor) return this.iconRightColor;
      if (this.type === "uncolored") return "#00000";
      if (
        this.type === "pale" ||
        this.type === "ghost" ||
        this.type === "outline"
      )
        return "#ef553b";
      return "#ffffff";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
.b-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  line-height: 20px;
  color: $b-primary-label-inverse;
  background-color: $b-primary;
  border-radius: 12px;
  border: 1px solid $b-primary;
  padding: 10px 16px;
  cursor: pointer;
  outline: none;
  position: relative;

  &:hover:enabled {
    background-color: $b-primary-hover;
    border-color: $b-primary-hover;
  }
  &:active:enabled {
    background-color: $b-primary-pressed;
    border-color: $b-primary-pressed;
  }
  &:disabled {
    opacity: 0.48;
  }

  &-icon-left {
    margin-right: 0.5em;
  }

  &-icon-right {
    transition: all 0.1s;
    margin-left: 0.5em;
  }

  &-icons-right {
    height: 16px;
  }

  &.b-btn-select {
    padding: 6px 16px !important;
    color: $b-primary-label;
    background-color: transparent;
    border-color: $b-base-05;
    &:hover:enabled {
      background-color: $b-base-02;
      border-color: $b-base-05;
    }
    &:active:enabled {
      border-color: $b-base-09;
    }
  }
}

.b-btn-loading {
  text-align: center;
  .b-btn-inner {
    visibility: hidden;
  }
}

.b-btn-icon-loading-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: translateY(-50%) translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) translateX(-50%) rotate(360deg);
  }
}

.b-btn-select-open {
  border-color: $b-base-09 !important;

  .b-icon-last {
    transform: rotate(180deg);
  }
}

.b-btn-indate-open {
  border-color: $b-base-09 !important;
}

.b-btn-l {
  font-size: 15px;
  padding: 18px 20px;
}

.b-btn-m {
  font-size: 15px;
  padding: 14px 16px;
}

.b-btn-s {
  font-size: 13px;
  padding: 10px 16px;
}

.b-btn-xs {
  font-size: 13px;
  padding: 6px 12px;
}

.b-btn-icon-only {
  padding: 16px;
  border-radius: 50%;
}

.b-btn-secondary {
  background-color: $b-secondary;
  border-color: $b-secondary;
  &:hover:enabled {
    background-color: $b-secondary-hover;
    border-color: $b-secondary-hover;
  }
  &:active:enabled {
    background-color: $b-secondary-pressed;
    border-color: $b-secondary-pressed;
  }
}

.b-btn-pale {
  color: $b-link;
  background-color: $b-primary-pale;
  border-color: $b-primary-pale;
  &:hover:enabled {
    background-color: $b-primary-pale;
    border-color: $b-primary-pale;
  }
  &:active:enabled {
    background-color: $b-primary-pale;
    border-color: $b-primary-pale;
  }
}

.b-btn-ghost {
  color: $b-link;
  background-color: transparent;
  border-color: transparent;
  &:hover:enabled {
    background-color: $b-primary-pale;
    border-color: $b-primary-pale;
  }
  &:active:enabled {
    background-color: $b-primary-pale-hover;
    border-color: $b-primary-pale-hover;
  }
}

.b-btn-outline {
  color: $b-link;
  background-color: transparent;
  border-color: $b-primary;
  &:hover:enabled {
    background-color: $b-primary-pale;
    border-color: $b-primary;
  }
  &:active:enabled {
    background-color: $b-primary-pale-hover;
    border-color: $b-primary;
  }
}

.b-btn-uncolored {
  color: $b-primary-label;
  background-color: transparent;
  border-color: $b-base-09-20;
  &:hover:enabled {
    background-color: $b-base-09-10;
    border-color: $b-base-09-20;
  }
  &:active:enabled {
    background-color: $b-base-09-30;
    border-color: $b-base-09-20;
  }
}

.b-btn-block {
  display: block;
  width: 100%;
}
</style>
