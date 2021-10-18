<template>
  <div>
    <div class="b-h1 q-mb-lg">Иконки</div>
    <code class="q-mb-lg" v-text="t"></code>
    <div class="icons-table">
      <div class="icons-table__item" v-for="(i, key) in icons" :key="key">
        <b-icon :name="i" size="32" :color="getRandomColor()"></b-icon>
        <div class="icons-table__name">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BIcon from "../components/b-icon";
export default {
  name: "Icons",
  components: {
    BIcon,
  },
  data: function () {
    return {
      t: `<b-icon name="archive" size="32" color="#000000"></b-icon>`,
      icons: [
        "archive",
        "alcohol",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "ball",
        "bell",
        "block",
        "calendar",
        "camera",
        "car",
        "card",
        "case",
        "chat",
        "check-circle",
        "check",
        "checklist",
        "cholesterol",
        "clip",
        "clock",
        "close",
        "compass-arrow",
        "cookies",
        "copy",
        "depress",
        "diabetes",
        "doctor",
        "download",
        "eat",
        "edit",
        "external",
        "female",
        "file",
        "fish",
        "fluorography",
        "food",
        "growth",
        "heart-filled",
        "help",
        "home",
        "image",
        "info",
        "insurance",
        "logout",
        "mail",
        "male",
        "mammography",
        "mic-off",
        "mic",
        "minus",
        "more",
        "percent",
        "phone-pickup",
        "pills",
        "pin",
        "plane",
        "plus",
        "pressure",
        "psa",
        "qr",
        "read",
        "reload",
        "rescue",
        "search",
        "settings-2",
        "shop",
        "sleep",
        "smoke",
        "sound-off",
        "sound",
        "stack",
        "star-filled",
        "star",
        "stethoscope",
        "sugar",
        "sun",
        "sweet",
        "syringe",
        "test",
        "trash",
        "tree",
        "upload",
        "videocamera-off",
        "videocamera",
        "warning",
        "weight",
      ],
    };
  },
  methods: {
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables";
.icons-table {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 15%;
    margin: 10px;
    padding: 20px;
    border: 1px solid $b-base-05;
    border-radius: 10px;
    text-align: center;
  }
  &__name {
    margin-top: 15px;
  }
}
</style>
