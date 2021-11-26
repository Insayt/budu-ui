<template>
  <div>
    <div class="b-h1 q-mb-lg">Для демо</div>
    <div class="test">
      <div class="q-mb-lg">
        <b-input
          icon="home"
          canceled
          v-model="searchText"
          size="l"
          placeholder="InputSearch L"
        />
      </div>
      <div class="q-mb-lg">
        <b-input
          icon="bell"
          canceled
          v-model="searchText"
          size="m"
          placeholder="InputSearch M"
        />
      </div>
      <div class="q-mb-lg">
        <b-input
          icon="doctor"
          canceled
          v-model="searchText"
          size="s"
          placeholder="InputSearch S"
        />
      </div>
      <div class="q-mb-lg">
        <b-input
          icon="search"
          canceled
          v-model="searchText"
          size="xs"
          placeholder="InputSearch XS"
        />
      </div>
    </div>

    <div class="q-mb-lg">
      <b-dropdown label="Dropdown Primary">
        <b-dropdown-item @click="onClick">
          Некий текст для дропдауна
        </b-dropdown-item>
        <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="q-mb-lg">
      <b-dropdown
        label="Dropdown Secondary"
        button-size="s"
        button-type="uncolored"
      >
        <b-dropdown-item @click="onClick">
          Некий текст для дропдауна2
        </b-dropdown-item>
        <b-dropdown-item> Некий текст для дропдауна </b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="q-mb-lg">
      <b-select
        placeholder="Врач"
        :options="options"
        :filter-fn="filter"
      ></b-select>
    </div>
  </div>
</template>

<script>
import BDropdown from "../components/b-dropdown";
import BSelect from "../components/b-select";
import BDropdownItem from "../components/b-dropdown-item";
import BInput from "../components/b-input";

const cache = [
  'Соболева Анастасия Ивановна',
  'Соловьева Екатерина Олеговна',
  'Сафронова Ирина Дмитриевна',
];
export default {
  name: "Dropdowns",
  components: {
    BDropdown,
    BDropdownItem,
    BSelect,
    BInput,
  },
  data: function() {
    return {
      searchText: "",
      options: cache
    };
  },
  methods: {
    onClick() {
      console.log("Клик");
    },
    filter(val) {
      this.options = cache.filter(v => v.toLowerCase().includes(val.toLowerCase()));
    }
  },
};
</script>

<style scoped>
.test {
  max-width: 300px;
}
</style>
