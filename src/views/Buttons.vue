<template>
  <div>
    <div class="b-h1 q-mb-lg">Кнопки</div>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button @click="clickBtn('Primary')"> Primary </b-button>
      </div>
      <div class="btn-content">
        Для основных действий. В идеале кнопка такого типа должна быть одна на
        странице или в блоке.
      </div>
    </div>
    <code class="q-mb-md" v-text="'<b-btn>Primary</b-btn>'"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button :loading="true" @click="clickBtn('Primary loading')">
          Primary
        </b-button>
      </div>
      <div class="btn-content">
        Свойство loading отображает иконку загрузки во время запросов
      </div>
    </div>
    <code
      class="q-mb-md"
      v-text="'<b-btn :loading=\'true\' >Primary</b-btn>'"
    ></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="secondary" @click="clickBtn('Secondary')">
          Secondary
        </b-button>
      </div>
      <div class="btn-content">
        Альтернативный цветовой акцент для основных действий, действий в плитках
        и блоках, когда на них нужен дополнительный акцент. Нельзя использовать
        в непосредственной близости с Primary
      </div>
    </div>
    <code class="q-mb-md" v-text="t1"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="pale" @click="clickBtn('Pale')">Pale</b-button>
      </div>
      <div class="btn-content">
        Для действий в плитках и блоках. Используются только в отдельно стоящих
        кнопках. Рядом с Primary лучше ставить Ghost
      </div>
    </div>
    <code class="q-mb-md" v-text="t2"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="ghost" @click="clickBtn('Ghost')">Ghost</b-button>
      </div>
      <div class="btn-content">
        Кнопка для второстепенных действий. Используется рядом с Primary или
        Pale. Также используются в андроиде в диалоговых окнах и плитках
      </div>
    </div>
    <code class="q-mb-md" v-text="t3"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="outline" @click="clickBtn('Outline')">Outline</b-button>
      </div>
      <div class="btn-content">
        Кнопка для второстепенных действий. Может использоваться в паре с
        Primary, Pale или Uncolored
      </div>
    </div>
    <code class="q-mb-md" v-text="t4"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="uncolored" @click="clickBtn('Uncolored')">
          Uncolored
        </b-button>
      </div>
      <div class="btn-content">
        Кнопка для второстепенных действий. Может использоваться в паре с
        Primary. Также можно использовать на различных zero-состояниях
      </div>
    </div>
    <code class="q-mb-lg" v-text="t5"></code>
    <div class="b-h3 q-mb-lg">Размеры</div>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button size="l">Button L</b-button>
      </div>
      <div class="btn-content">Для основных действий</div>
    </div>
    <code class="q-mb-md" v-text="t6"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button size="m">Button M</b-button>
      </div>
      <div class="btn-content">
        Для основных действий, действий внутри плиток и блоков, для
        множественных действий
      </div>
    </div>
    <code class="q-mb-md" v-text="t7"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button size="s">Button S</b-button>
      </div>
      <div class="btn-content">
        Дефолтная кнопка. Для действий внутри плиток и блоков, а также можно
        использовать в таблицах
      </div>
    </div>
    <code class="q-mb-md" v-text="t8"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button size="xs">Button XS</b-button>
      </div>
      <div class="btn-content">
        Для действий внутри плиток и блоков, а также можно использовать в
        таблицах
      </div>
    </div>
    <code class="q-mb-lg" v-text="t9"></code>
    <div class="b-h3 q-mb-lg">Иконки</div>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="outline" icon-left="calendar">Button</b-button>
      </div>
      <div class="btn-content">
        Icon left: иконка слева, когда нужно дополнительно проиллюстрировать
        действие или заменить глагол: например слово «добавить» на иконку плюса
      </div>
    </div>
    <code class="q-mb-lg" v-text="t10"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button type="uncolored" icon-right="arrow-down">Button</b-button>
      </div>
      <div class="btn-content">
        Icon right: иконка справа, когда нужно дополнительно проиллюстрировать
        действие
      </div>
    </div>
    <code class="q-mb-lg" v-text="t11"></code>
    <div class="row items-center q-mb-md">
      <div class="btn-wrap">
        <b-button icon-only="calendar"></b-button>
      </div>
      <div class="btn-content">
        Icon Only: для кнопок с очевидным действием: добавление, удаление,
        вкл/выкл звук и т.д.
      </div>
    </div>
    <code class="q-mb-lg" v-text="t12"></code>
  </div>
</template>

<script>
import BButton from "../components/b-btn";
export default {
  name: "Buttons",
  components: {
    BButton,
  },
  data: function () {
    return {
      t1: `<b-btn type="secondary">Secondary</b-btn>`,
      t2: `<b-btn type="pale">Pale</b-btn>`,
      t3: `<b-btn type="ghost">Ghost</b-btn>`,
      t4: `<b-btn type="outline">Outline</b-btn>`,
      t5: `<b-btn type="uncolored">Uncolored</b-btn>`,
      t6: `<b-btn size="l">Primary</b-btn>`,
      t7: `<b-btn size="m">Button M</b-btn>`,
      t8: `<b-btn size="s">Button S</b-btn>или просто<b-button>Button S</b-button>`,
      t9: `<b-btn size="xs">Button XS</b-btn>`,
      t10: ` <b-btn icon-left="calendar">Button</b-btn>`,
      t11: ` <b-btn icon-right="arrow-down">Button</b-btn>`,
      t12: `<b-btn icon-only="calendar"></b-btn>`,
    };
  },
  methods: {
    clickBtn(type) {
      alert(`Кликнули кнопку ${type}`);
    },
  },
};
</script>

<style scoped lang="scss">
.btn-wrap {
  width: 120px;
}
.btn-content {
  width: calc(100% - 120px);
}
</style>
