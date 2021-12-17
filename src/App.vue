<template>
  <!--  <div id="app">-->
  <!--    <q-layout-->
  <!--      view="hHh Lpr lff"-->
  <!--      container-->
  <!--      style="height: 100vh"-->
  <!--      class="shadow-2 rounded-borders"-->
  <!--    >-->
  <!--      <q-drawer show-if-above side="left" bordered content-class="bg-grey-3">-->
  <!--        <q-scroll-area class="fit">-->
  <!--          <q-list bordered separator>-->
  <!--            <q-item>-->
  <!--              <img src="./assets/budu-logo.svg" />-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'typography' }" clickable v-ripple>-->
  <!--              <q-item-section>Типографика</q-item-section>-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'colors' }" clickable v-ripple>-->
  <!--              <q-item-section>Цвета</q-item-section>-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'icons' }" clickable v-ripple>-->
  <!--              <q-item-section>Иконки</q-item-section>-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'buttons' }" clickable v-ripple>-->
  <!--              <q-item-section>Кнопки</q-item-section>-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'badges' }" clickable v-ripple>-->
  <!--              <q-item-section>Бейджи</q-item-section>-->
  <!--            </q-item>-->
  <!--            <q-item :to="{ name: 'checkboxes' }" clickable v-ripple>-->
  <!--              <q-item-section>Чекбоксы</q-item-section>-->
  <!--            </q-item>-->
  <!--          </q-list>-->
  <!--        </q-scroll-area>-->
  <!--      </q-drawer>-->

  <!--      <div class="container">-->
  <!--        <div class="container__inner">-->
  <!--          <router-view />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </q-layout>-->
  <!--  </div>-->
  <div id="app">
    <div class="sidebar">
      <q-list bordered separator>
        <q-item>
          <img src="./assets/budu-logo.svg" />
        </q-item>
        <q-item :to="{ name: 'typography' }" clickable v-ripple>
          <q-item-section>Типографика</q-item-section>
        </q-item>
        <q-item :to="{ name: 'colors' }" clickable v-ripple>
          <q-item-section>Цвета</q-item-section>
        </q-item>
        <q-item :to="{ name: 'icons' }" clickable v-ripple>
          <q-item-section>Иконки</q-item-section>
        </q-item>
        <q-item :to="{ name: 'buttons' }" clickable v-ripple>
          <q-item-section>Кнопки</q-item-section>
        </q-item>
        <q-item :to="{ name: 'badges' }" clickable v-ripple>
          <q-item-section>Бейджи</q-item-section>
        </q-item>
        <q-item :to="{ name: 'checkboxes' }" clickable v-ripple>
          <q-item-section>Чекбоксы</q-item-section>
        </q-item>
        <q-item :to="{ name: 'inputs' }" clickable v-ripple>
          <q-item-section>Инпуты</q-item-section>
        </q-item>
        <q-item :to="{ name: 'dropdowns' }" clickable v-ripple>
          <q-item-section>Дропдауны</q-item-section>
        </q-item>
        <q-item :to="{ name: 'selects' }" clickable v-ripple>
          <q-item-section>Селекты</q-item-section>
        </q-item>
        <q-item :to="{ name: 'datepickers' }" clickable v-ripple>
          <q-item-section>Датапикер</q-item-section>
        </q-item>
        <q-item :to="{ name: 'modals' }" clickable v-ripple>
          <q-item-section>Модальные окна</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="container">
      <div class="container__inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/fonts/gerbera/stylesheet.css";
@import "./assets/fonts/inter/stylesheet.css";
@import "./assets/icons/style.css";

body {
  font-family: Inter !important;
  font-size: 15px !important;
  line-height: 20px !important;
}
.icon-svg {
  content: url("./assets/logo.png");
}
.sidebar {
  width: 300px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #eeeeee;
}
.container {
  padding-left: 300px;
  &__inner {
    padding: 24px;
  }
}
code {
  border-width: 1px 4px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-left-color: #00b4ff;
  border-right-color: #00b4ff;
  border-radius: 4px;
  background-color: #f5f5f5;
  max-height: inherit;
  height: inherit;
  padding: 1em;
  display: block;
  overflow: auto;
}
pre {
  font-size: 12px !important;
  line-height: 1.2 !important;
  border-width: 1px 4px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-left-color: #00b4ff;
  border-right-color: #00b4ff;
  border-radius: 4px;
  background-color: #f5f5f5;
  padding: 1em;
}
</style>
