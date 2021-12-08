<template>
  <div>
    <div class="b-h1 q-mb-lg">Инпуты</div>
    <div class="b-h3 q-mb-md">Размеры</div>
    <div class="row items-center q-mb-md">
      <b-input size="l" placeholder="Input L" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="m" placeholder="Input M" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="s" placeholder="Input S" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="xs" placeholder="Input XS" />
    </div>
    <code class="q-mb-md" v-text="t1"></code>

    <div class="b-h3 q-mb-md">С иконкой</div>
    <div class="row items-center q-mb-md">
      <b-input size="l" icon="search" placeholder="Input with icon L" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="m" icon="home" placeholder="Input with icon M" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="s" icon="bell" placeholder="Input with icon S" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="xs" icon="doctor" placeholder="Input with icon XS" />
    </div>
    <code class="q-mb-md" v-text="t2"></code>

    <div class="b-h3 q-mb-md">Подсказка</div>
    <div class="row items-center q-mb-md">
      <b-input size="l" icon="search" placeholder="Input hint L">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="m" icon="home" placeholder="Input hint M">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="s" icon="bell" placeholder="Input hint S">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input size="xs" icon="doctor" placeholder="Input hint XS">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <code class="q-mb-md" v-text="t3"></code>

    <div class="b-h3 q-mb-md">Сброс значения</div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="l" placeholder="Input canceled L" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="m" placeholder="Input canceled M" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="s" placeholder="Input canceled S" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="xs" placeholder="Input canceled XS" />
    </div>
    <code class="q-mb-md" v-text="t4"></code>

    <div class="b-h3 q-mb-md">Сброс значения вместе с подсказкой</div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="l" placeholder="Input canceled L">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="m" placeholder="Input canceled M">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="s" placeholder="Input canceled S">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <div class="row items-center q-mb-md">
      <b-input canceled size="xs" placeholder="Input canceled XS">
        <template slot="hint"> Текст подсказки </template>
      </b-input>
    </div>
    <code class="q-mb-md" v-text="t5"></code>

    <div class="b-h3 q-mb-md">Ошибка</div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="l" placeholder="Input error L" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="m" placeholder="Input error M" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="s" placeholder="Input error S" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="xs" placeholder="Input error XS" />
    </div>
    <code class="q-mb-md" v-text="t6"></code>

    <div class="b-h3 q-mb-md">Textarea</div>
    <div class="row items-center q-mb-md">
      <b-input class="test" type="textarea" size="l" placeholder="Textarea L" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input
        type="textarea"
        :error="'Текст ошибки'"
        size="m"
        placeholder="Textarea error M"
      />
    </div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="s" placeholder="Input error S" />
    </div>
    <div class="row items-center q-mb-md">
      <b-input :error="'Текст ошибки'" size="xs" placeholder="Input error XS" />
    </div>
    <code class="q-mb-md" v-text="t6"></code>

    <!--    <div class="b-h3 q-mb-md">Без рамок</div>-->
    <!--    <div class="row items-center q-mb-md">-->
    <!--      <b-input icon="search" light size="l" placeholder="Input light L" />-->
    <!--    </div>-->
    <!--    <div class="row items-center q-mb-md">-->
    <!--      <b-input light size="m" placeholder="Input error M" />-->
    <!--    </div>-->
    <!--    <div class="row items-center q-mb-md">-->
    <!--      <b-input light size="s" placeholder="Input error S" />-->
    <!--    </div>-->
    <!--    <div class="row items-center q-mb-md">-->
    <!--      <b-input light canceled size="xs" placeholder="Input error XS">-->
    <!--        <template slot="hint"> Текст подсказки </template>-->
    <!--      </b-input>-->
    <!--    </div>-->
    <!--    <code class="q-mb-md" v-text="t6"></code>-->
  </div>
</template>

<script>
import BInput from "../components/b-input";
export default {
  name: "Inputs",
  components: {
    BInput,
  },
  data: function () {
    return {
      t1: `<b-input size="xs" placeholder="Input XS" />`,
      t2: `<b-input size="xs" icon="doctor" placeholder="Input with icon XS" />`,
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
};
</script>

<style scoped lang="scss">
.test {
  width: 500px;
}
.wrap {
  width: 300px;
  margin-right: 20px;
}
.content {
  width: calc(100% - 320px);
}
</style>
