<template>
  <q-dialog
    transition-show="none"
    transition-hide="none"
    ref="modal"
    class="b-modal"
    v-model="showModal"
    :maximized="maximized"
    @hide="hideModal"
  >
    <div
      class="b-modal-content"
      :class="{ 'b-modal-maximized': maximized, 'b-modal-m': size === 'm' }"
    >
      <div class="b-text-link b-modal-back" v-if="maximized" @click="close">
        <b-icon bold name="arrow-left" class="b-modal-back-icon"></b-icon>
        Назад
      </div>
      <div class="b-modal-content-inner">
        <div class="b-modal-title b-h3" v-if="hasSlotTitle">
          <slot name="title"></slot>
        </div>
        <div class="b-text-m">
          <slot></slot>
        </div>
        <div class="b-modal-bottom" v-if="hasSlotBottom">
          <slot name="bottom"></slot>
        </div>
        <b-icon
          class="b-modal-close"
          size="24"
          name="close"
          color="$b-secondary-label"
          @click="close"
          v-if="!maximized"
        ></b-icon>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import BIcon from "./b-icon";
export default {
  name: "b-modal",
  components: {
    BIcon,
  },
  props: {
    value: Boolean,
    maximized: Boolean,
    size: {
      type: String,
      default: "s",
    },
  },
  data: function () {
    return {
      showModal: true,
    };
  },
  computed: {
    hasSlotTitle() {
      return this.$slots.title;
    },
    hasSlotBottom() {
      return this.$slots.bottom;
    },
  },
  methods: {
    hideModal() {
      this.$emit("input", false);
    },
    close() {
      this.$refs.modal.hide();
    },
  },
  mounted() {
    this.showModal = this.value;
  },
  watch: {
    value: function (newVal) {
      this.showModal = newVal;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";
.b-modal-content {
  width: 336px;
  background-color: $b-base-01;
  border-radius: 16px !important;
  padding: 32px;
  position: relative;
}
.b-modal-m {
  width: 500px;
}
.b-modal-maximized {
  width: 100%;
}
.b-modal-close {
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
}
.b-modal-title {
  margin-bottom: 8px;
}
.b-modal-bottom {
  margin-top: 32px;
}
.b-modal-maximized {
  background-color: #e5e5e5;
  border-radius: 0;

  .b-modal-content-inner {
    background-color: white;
    padding: 32px;
    border-radius: 8px;
  }
}
.b-modal-back {
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-bottom: 12px;
  cursor: pointer;
}
.b-modal-back-icon {
  margin-right: 4px;
}
.q-dialog__inner > div {
  box-shadow: none !important;
}
</style>
