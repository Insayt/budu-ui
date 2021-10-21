<template>
  <div>
    <div class="b-h1 q-mb-lg">Бейджи</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="m">M - 32px</b-badge>
      </div>
      <div class="content">В заголовках, и других крупных элементах</div>
    </div>
    <code class="q-mb-md" v-text="t1"></code>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="s">S - 24px</b-badge>
      </div>
      <div class="content">В текстовых лейблах, таблицах, дропдаунах</div>
    </div>
    <code class="q-mb-md" v-text="t2"></code>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="xs">XS - 20px</b-badge>
      </div>
      <div class="content">Крошка бейджик :3</div>
    </div>
    <code class="q-mb-md" v-text="t3"></code>

    <div class="b-h3 q-mb-lg">Иконки</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="m" icon="check">M - 32px</b-badge>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="s" icon="check">S - 24px</b-badge>
      </div>
      <div class="content"></div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="xs" icon="check">XS - 20px</b-badge>
      </div>
      <div class="content"></div>
    </div>
    <code class="q-mb-md" v-text="t4"></code>

    <div class="b-h3 q-mb-lg">Цвета</div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="m" color="$b-support-301">M - 32px</b-badge>
      </div>
      <div class="content">
        Цвет текста автоматически подстраивается под цвет фона
      </div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="m" color="#000000" text-color="#f27b67">
          M - 32px
        </b-badge>
      </div>
      <div class="content">
        Либо можно указать нужный цвет в параметре "text-color"
      </div>
    </div>
    <div class="row items-center q-mb-md">
      <div class="wrap">
        <b-badge size="m" color="$b-support-504"> M - 32px </b-badge>
      </div>
      <div class="content">
        Так же поддерживаются переменные цветов из палитры
      </div>
    </div>
    <code class="q-mb-md" v-text="t5"></code>
    <code class="q-mb-md" v-text="t6"></code>
    <code class="q-mb-md" v-text="t7"></code>
  </div>
</template>

<script>
import BBadge from "../components/b-badge";
export default {
  name: "Badges",
  components: {
    BBadge,
  },
  data: function () {
    return {
      t1: `<b-badge size="m">M - 32px</b-badge>`,
      t2: `<b-badge size="s">S - 32px</b-badge>`,
      t3: `<b-badge size="xs">XS - 32px</b-badge>`,
      t4: `<b-badge size="m" icon="check">XS - 20px</b-badge>`,
      t5: `<b-badge size="m" color="$b-support-301">M - 32px</b-badge>`,
      t6: `<b-badge size="m" color="#000000" text-color="#f27b67">M - 32px</b-badge>`,
      t7: `<b-badge size="m" color="$b-support-504">M - 32px</b-badge>`,
    };
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100px;
}
.content {
  width: calc(100% - 100px);
}
</style>
