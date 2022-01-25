<template>
  <div class="b-pagination">
    <b-btn
      class="b-pagination-arrow b-pagination-arrow-left"
      type="ghost"
      size="s"
      @click="clickPaginationArrow('left')"
      :disabled="value < 2"
    >
      <b-icon class="b-pagination-icon" size="16" bold name="arrow-left" />
    </b-btn>

    <q-pagination
      v-model="innerValue"
      :max="max"
      :max-pages="6"
      boundary-numbers
    />

    <b-btn
      class="b-pagination-arrow b-pagination-arrow-right"
      type="ghost"
      size="s"
      @click="clickPaginationArrow('right')"
      :disabled="value >= max"
    >
      <b-icon class="b-pagination-icon" size="16" bold name="arrow-right" />
    </b-btn>
  </div>
</template>

<script>
import BIcon from "./b-icon";
import BBtn from "./b-btn";
export default {
  name: "b-pagination",
  components: {
    BIcon,
    BBtn,
  },
  props: {
    value: Number,
    max: Number,
  },
  data() {
    return {
      innerValue: 0,
    };
  },
  methods: {
    clickPaginationArrow(type) {
      if (type === "left") {
        this.$emit("input", this.innerValue - 1);
      } else {
        this.$emit("input", this.innerValue + 1);
      }
    },
  },
  watch: {
    innerValue(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.innerValue = val;
    },
  },
  mounted() {
    this.innerValue = this.value;
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
.b-pagination {
  display: flex;
  align-items: center;

  .q-pagination {
    .q-btn {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      margin-right: 8px;
      color: $b-link !important;

      &:last-child {
        //margin-right: 0;
      }

      &.bg-primary {
        background-color: $b-primary !important;
        color: $b-base-01 !important;
      }

      &:hover:not(.bg-primary) {
        background-color: $b-primary-pale !important;
        color: $b-link !important;
      }
    }

    .q-btn__wrapper:before {
      box-shadow: none;
    }

    .q-btn .q-focus-helper {
      display: none !important;
    }
  }

  .b-pagination-icon {
    cursor: pointer;
  }

  .b-pagination-arrow {
    width: 40px;
    height: 40px;
    padding: 0;
    .b-btn-inner {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .b-pagination-arrow-left {
    margin-right: 8px;
  }
}
</style>
