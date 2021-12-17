<template>
  <div>
    <div class="b-h1 q-mb-lg">Модальные окна</div>

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
    <!--    <b-modal maximized>-->
    <!--      <template slot="title">Заголовок попапа максимум две строки</template>-->
    <!--      Основной текст попапа, может быть в несколько строчек-->
    <!--      <template slot="bottom">-->
    <!--        <b-button block class="test">Submit</b-button>-->
    <!--        <b-button block type="pale">Cancel</b-button>-->
    <!--      </template>-->
    <!--    </b-modal>-->
    <b-modal maximized>
      123123123
      <b-button block type="pale">Cancel</b-button>
    </b-modal>
  </div>
</template>

<script>
import BDropdown from "../components/b-dropdown";
import BDropdownItem from "../components/b-dropdown-item";
import BModal from "../components/b-modal";
import BButton from "../components/b-btn";

export default {
  name: "Modals",
  components: {
    BDropdown,
    BDropdownItem,
    BModal,
    BButton,
  },
  data: function () {
    return {
      searchText: "",
      currentSelect: [],
    };
  },
  methods: {
    onClick() {
      console.log("Клик");
    },
  },
};
</script>

<style scoped>
.test {
  margin-bottom: 12px;
}
</style>
