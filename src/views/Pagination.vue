<template>
  <div>
    <div class="b-h1 q-mb-lg">Пагинация</div>
    <b-pagination v-model="current" :max="max"></b-pagination>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ current }}</b-badge>
    </div>
  </div>
</template>

<script>
import BPagination from "../components/b-pagination";
import BBadge from "../components/b-badge";

export default {
  name: "Pagination",
  components: {
    BPagination,
    BBadge,
  },
  data: function () {
    return {
      current: 3,
      max: 10,
      t1: `<b-pagination v-model="current" :max="10"></b-pagination>`,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
