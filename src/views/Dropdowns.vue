<template>
  <div>
    123
    <b-dropdown label="Заголовок дропдауна">
      <b-dropdown-item @click="onClick">
        Некий текст для дропдауна
      </b-dropdown-item>
      <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
    </b-dropdown>
    <!--    <b-dropdown-->
    <!--      label="Заголовок дропдауна2"-->
    <!--      button-size="xs"-->
    <!--      button-type="uncolored"-->
    <!--    >-->
    <!--      <b-dropdown-item @click="onClick">-->
    <!--        Некий текст для дропдауна2-->
    <!--      </b-dropdown-item>-->
    <!--      <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>-->
    <!--    </b-dropdown>-->
    <div>
      123123
      <q-popup-proxy>
        <q-banner>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </div>
  </div>
</template>

<script>
import BDropdown from "../components/b-dropdown";
import BDropdownItem from "../components/b-dropdown-item";
export default {
  name: "Dropdowns",
  components: {
    BDropdown,
    BDropdownItem,
  },
  methods: {
    onClick() {
      console.log("Клик");
    },
  },
};
</script>

<style scoped></style>
