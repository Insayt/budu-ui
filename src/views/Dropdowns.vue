<template>
  <div>
    <div class="b-h1 q-mb-lg">Дропдауны</div>

    <div class="q-mb-lg">
      <b-dropdown label="Dropdown Primary">
        <b-dropdown-item @click="onClick">
          Некий текст для дропдауна
        </b-dropdown-item>
        <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t1"></pre>
    </div>

    <div class="b-h3 q-mb-md">Кастомизация кнопки</div>
    <div class="q-mb-lg">
      <b-dropdown label="Dropdown Secondary" button-type="uncolored">
        <b-dropdown-item @click="onClick">
          Некий текст для дропдауна2
        </b-dropdown-item>
        <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t2"></pre>
    </div>

    <div class="b-h3 q-mb-md">Кастомизация кнопки</div>
    <div class="q-mb-lg">
      <b-dropdown button-type="uncolored" icon="more">
        <b-dropdown-item @click="onClick">
          Некий текст для дропдауна2
        </b-dropdown-item>
        <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="q-mb-md">
      <pre class="q-mb-md" v-text="t2"></pre>
    </div>
    //TODO: Подумать над функциональностью компонента b-dropdown-item
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
  data: function () {
    return {
      searchText: "",
      t1: `<b-dropdown label="Dropdown Primary">
  <b-dropdown-item @click="onClick">
    Некий текст для дропдауна
  </b-dropdown-item>
  <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
</b-dropdown>`,
      t2: `<b-dropdown label="Dropdown Secondary" button-type="uncolored">
  <b-dropdown-item @click="onClick">
    Некий текст для дропдауна2
  </b-dropdown-item>
  <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
</b-dropdown>`,
    };
  },
  methods: {
    onClick() {
      console.log("Клик");
    },
  },
};
</script>

<style scoped></style>
