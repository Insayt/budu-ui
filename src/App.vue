<template>
  <div class="q-page" id="app">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-drawer show-if-above side="left" bordered content-class="bg-grey-3">
        <q-scroll-area class="fit">
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
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
.bg-budu-primary {
  background: #a2aa33;
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
</style>
