<template>
  <div>
    <div class="b-h1 q-mb-lg">Boxes</div>
    <div class="b-h3 q-mb-md">Options: default</div>
    <b-box>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </b-box>
    <div class="b-h3 q-mb-md">Options: default</div>
    <b-box nopadding>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </b-box>
  </div>
</template>

<script>
import BBox from "../components/b-box";
export default {
  name: "Boxes",
  components: {
    BBox
  },
  data: () => ({

  }),
  methods: {

  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 300px;
  margin-right: 20px;
}
.content {
  width: calc(100% - 320px);
}
</style>
