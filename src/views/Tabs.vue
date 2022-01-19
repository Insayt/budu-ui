<template>
  <div>
    <div class="b-h1 q-mb-lg">Табы</div>
    <b-tabs v-model="currentTab">
      <b-tab :badge="10" label="Заголовок 1" name="tab1">Таб 1</b-tab>
      <b-tab label="Заголовок 2" name="tab2">Таб 2</b-tab>
      <b-tab label="Заголовок 3" name="tab3" :disabled="true">Таб 3</b-tab>
    </b-tabs>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentTab }}</b-badge>
    </div>
  </div>
</template>

<script>
import BTabs from "../components/b-tabs";
import BTab from "../components/b-tab";
import BBadge from "../components/b-badge";

export default {
  name: "Tabs",
  components: {
    BTabs,
    BTab,
    BBadge,
  },
  data: function () {
    return {
      currentTab: "tab1",
      t1: `<b-tabs v-model="currentTab">
  <b-tab :badge="10" label="Заголовок 1" name="tab1">Таб 1</b-tab>
  <b-tab label="Заголовок 2" name="tab2">Таб 2</b-tab>
  <b-tab label="Заголовок 3" name="tab3" :disabled="true">Таб 3</b-tab>
</b-tabs>
`,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
