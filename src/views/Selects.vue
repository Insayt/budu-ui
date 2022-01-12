<template>
  <div>
    <div class="b-h1 q-mb-lg">Селекты</div>
    <div class="b-h3 q-mb-md">Options: строки</div>
    <div class="row items-center q-mb-md">
      <b-select
        placeholder="Обычный селект"
        :options="options1"
        v-model="currentSelect2"
      />
    </div>
    <div class="q-mb-md">
      <b>Options:</b>
      <pre class="q-mb-md" v-text="cache1"></pre>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentSelect2 }}</b-badge>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>

    <div class="b-h3 q-mb-md">Options: обьекты</div>
    <div class="row items-center q-mb-md">
      <b-select
        placeholder="Обычный селект"
        :options="options"
        v-model="currentSelect1"
        option-label="name"
      ></b-select>
    </div>
    <div class="q-mb-md">
      <b>Options:</b>
      <pre class="q-mb-md" v-text="cache"></pre>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentSelect1 }}</b-badge>
    </div>

    <div class="b-h3 q-mb-md">Disabled</div>
    <div class="row items-center q-mb-md">
      <b-select
        :disabled="true"
        placeholder="Отключен"
        :options="options"
        :filter-fn="filter"
        v-model="currentSelect1"
      ></b-select>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t2"></pre>
    </div>

    <div class="b-h3 q-mb-md">Мультиселект</div>

    <div class="row items-center q-mb-md">
      <b-select
        multiple
        placeholder="Мультиселект"
        :options="options"
        :filter-fn="filter1"
        v-model="currentSelect3"
      />
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ currentSelect3 }}</b-badge>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t3"></pre>
    </div>
  </div>
</template>

<script>
const cache1 = [
  "Google 123 123 123 213 123 123 123 123 12 312 3 12312 123 123 123 ",
  "Facebook",
  "Twitter",
  "Apple",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
  "Oracle",
];
const cache = [
  { inn: "7706181640", name: "Медкорп" },
  { inn: "6316179588", name: "ИнРос-Мед" },
  { inn: "7840093388", name: "Ренклиника" },
  { inn: "7729674716", name: "К31" },
  { inn: "5257201082", name: "Профиклиник" },
  { inn: "7714996140", name: "Альтер" },
];
import BSelect from "../components/b-select";
import BBadge from "../components/b-badge";
export default {
  name: "Selects",
  components: {
    BSelect,
    BBadge,
  },
  data: function () {
    return {
      cache: cache,
      cache1: cache1,
      options: cache,
      options1: cache1,
      currentSelect1: { inn: "7714996140", name: "Альтер" },
      currentSelect2: null,
      currentSelect3: null,
      t1: `<b-select
  placeholder="Обычный селект"
  :options="options"
  v-model="model"
/>`,
      t2: `<b-select
  :disabled="true"
  v-model="currentSelect1"
/>`,
      t3: `<b-select
  multiple
  placeholder="Мультиселект"
  :options="options1"
  :filter-fn="filter1"
  v-model="currentSelect3"
/>`,
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
