<template>
  <div>
    <div class="b-h1 q-mb-lg">Модальные окна</div>

    <div class="q-mb-lg">
      <b-button @click="onClick">Открыть окно</b-button>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ isShowModal }}</b-badge>
    </div>
    <b-modal v-model="isShowModal">
      <div class="text-center">
        <img src="../assets/broken-heart.svg" />
      </div>
      <div class="text-center b-h3 q-mb-sm">
        Заголовок попапа максимум две строки
      </div>
      <div class="text-center b-text-md q-mb-lg">
        Основной текст попапа, может быть в несколько строчек
      </div>
      <b-button block class="q-mb-sm">Submit</b-button>
      <b-button block type="pale">Cancel</b-button>
    </b-modal>
    <div class="b-h3 q-mb-md">Большой размер</div>
    <div class="q-mb-lg">
      <b-button @click="onClick1">Открыть большое окно</b-button>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t2"></pre>
    </div>
    <b-modal size="m" v-model="isShowModal1">
      <div class="text-center">
        <img src="../assets/broken-heart.svg" />
      </div>
      <div class="text-center b-h3 q-mb-sm">
        Заголовок попапа максимум две строки
      </div>
      <div class="text-center b-text-md q-mb-lg">
        Основной текст попапа, может быть в несколько строчек
      </div>
      <div class="text-center">
        <b-button class="q-mr-sm">Submit</b-button>
        <b-button type="pale">Cancel</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import BModal from "../components/b-modal";
import BButton from "../components/b-btn";
import BBadge from "../components/b-badge";

export default {
  name: "Modals",
  components: {
    BModal,
    BButton,
    BBadge,
  },
  data: function () {
    return {
      isShowModal: false,
      isShowModal1: false,
      t1: `<b-modal v-model="isShowModal">
  <div class="text-center">
    <img src="../assets/broken-heart.svg" />
  </div>
  <div class="text-center b-h3 q-mb-sm">
    Заголовок попапа максимум две строки
  </div>
  <div class="text-center b-text-md q-mb-lg">
    Основной текст попапа, может быть в несколько строчек
  </div>
  <b-button block class="q-mb-sm">Submit</b-button>
  <b-button block type="pale">Cancel</b-button>
</b-modal>`,
      t2: ` <b-modal size="m">...</b-modal>`,
    };
  },
  methods: {
    onClick() {
      this.isShowModal = true;
    },
    onClick1() {
      this.isShowModal1 = true;
    },
  },
};
</script>

<style scoped>
.test {
  margin-bottom: 12px;
}
</style>
