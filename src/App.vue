<template>
  <div class="q-page" id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->

    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header color="budu-primary" elevated class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>

            Budu UI
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above side="left" bordered content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list bordered separator>
            <q-item :to="{ name: 'typography' }" clickable v-ripple>
              <q-item-section>Типографика</q-item-section>
            </q-item>
            <q-item :to="{ name: 'colors' }" clickable v-ripple>
              <q-item-section>Цвета</q-item-section>
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
</style>
