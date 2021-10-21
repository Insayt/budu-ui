<template>
  <div>
    <div class="b-h1 q-mb-lg">Чекбоксы</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m1">Обычное состояние</b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ m1 }}</b-badge>
    </div>
    <code class="q-mb-lg" v-text="t1"></code>
    <div class="b-h3 q-mb-md">Модель-массив</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m2" value="Первый">Первый</b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox size="m" v-model="m2" value="Второй"> Второй </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox size="m" v-model="m2" value="Третий" :disabled="true">
          Третий (disabled)
        </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="q-mb-md">
      <b>Значение модели:</b> <b-badge>{{ m2 }}</b-badge>
    </div>
    <code class="q-mb-md" v-text="t2"></code>
    <code class="q-mb-md" v-text="t3"></code>
    <code class="q-mb-lg" v-text="t4"></code>

    <div class="b-h3 q-mb-md">Размеры</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m3" value="Обычный">
          Обычный размер (по умолчанию)
        </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m3" size="s" value="Маленький">
          Маленький размер
        </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <code class="q-mb-md" v-text="t5"></code>
    <code class="q-mb-lg" v-text="t6"></code>

    <div class="b-h3 q-mb-md">Иконка помощи</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m3" value="1">
          Наведи и удивись
          <template slot="hint"> Текст подсказки </template>
        </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-checkbox v-model="m3" value="2" size="s">
          Наведи и удивись
          <template slot="hint"> Текст подсказки </template>
        </b-checkbox>
      </div>
      <div class="content"></div>
    </div>
    <code class="q-mb-md" v-text="t7"></code>
  </div>
</template>

<script>
import BBadge from "../components/b-badge";
import BCheckbox from "../components/b-checkbox";
export default {
  name: "Badges",
  components: {
    BCheckbox,
    BBadge,
  },
  data: function () {
    return {
      m1: true,
      m2: ["Третий"],
      m3: [],
      t1: `<b-checkbox v-model="m1">Обычное состояние</b-checkbox>`,
      t2: `<b-checkbox v-model="m2" value="Первый">Первый</b-checkbox>`,
      t3: `<b-checkbox v-model="m2" value="Второй">Второй</b-checkbox>`,
      t4: `<b-checkbox v-model="m2" value="Третий" :disabled="true">Третий</b-checkbox>`,
      t5: `<b-checkbox v-model="m3">Обычный размер (по умолчанию)</b-checkbox>`,
      t6: `<b-checkbox v-model="m3" size="s">Маленький размер</b-checkbox>`,
      t7: `<b-checkbox v-model="m3">Наведи и удивись <template slot="hint"> Текст подсказки </template> </b-checkbox>`,
    };
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 400px;
}
.content {
  width: calc(100% - 400px);
}
</style>
