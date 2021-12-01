<template>
  <div>
    <div class="b-h1 q-mb-lg">Датапикер</div>
    <div class="b-h3 q-mb-md">Одиночная дата</div>
    <div class="row items-center q-mb-md">
      <b-datepicker placeholder="Дата" v-model="currentSelect1" />
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentSelect1 }}</b-badge>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>
    <div class="b-h3 q-mb-md">Диапазон дат</div>
    <div class="row items-center q-mb-md">
      <b-datepicker placeholder="Диапазон дат" range v-model="currentSelect2" />
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentSelect2 }}</b-badge>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t2"></pre>
    </div>
  </div>
</template>

<script>
const cache1 = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const cache = [
  {
    label: "Google",
    value: "Google1",
    description: "Search engine",
    category: "1",
  },
  {
    label: "Facebook",
    value: "Facebook2",
    description: "Social media",
    category: "1",
  },
  {
    label: "Twitter",
    value: "Twitter3",
    description: "Quick updates",
    category: "2",
  },
  {
    label: "Apple",
    value: "Apple4",
    description: "iStuff",
    category: "2",
  },
  {
    label: "Oracle",
    value: "Oracle5",
    disable: true,
    description: "Databases",
    category: "3",
  },
];
import BDatepicker from "../components/b-datepicker";
import BBadge from "../components/b-badge";
export default {
  name: "Datepickers",
  components: {
    BBadge,
    BDatepicker,
  },
  data: function () {
    return {
      cache: cache,
      cache1: cache1,
      options: cache,
      options1: cache1,
      currentSelect1: null,
      currentSelect2: null,
      t1: `<b-datepicker placeholder="Дата" v-model="model" />`,
      t2: `<b-datepicker placeholder="Диапазон дат" range v-model="model" />`,
      t3: `<b-input size="xs" icon="doctor" placeholder="Input hint XS">
        <template slot="hint"> Текст подсказки </template>
      </b-input>`,
      t4: `<b-input canceled size="xs" placeholder="Input canceled XS" />`,
      t5: `<b-input canceled size="xs" placeholder="Input canceled XS">
        <template slot="hint"> Текст подсказки </template>
      </b-input>`,
      t6: `<b-input error="Текст ошибки" size="xs" placeholder="Input error XS" />`,
      t7: `<b-badge size="m" color="$b-support-504">M - 32px</b-badge>`,
    };
  },
  methods: {
    filter(val) {
      this.options = cache.filter((v) =>
        v.toLowerCase().includes(val.toLowerCase())
      );
    },
    filter1(val) {
      this.options1 = cache1.filter((v) =>
        v.toLowerCase().includes(val.toLowerCase())
      );
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 300px;
  margin-right: 20px;
}
.content {
  width: calc(100% - 320px);
}
</style>
