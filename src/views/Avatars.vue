<template>
  <div>
    <div class="b-h1 q-mb-lg">Аватарки</div>
    <!-- <div class="b-h3 q-mb-md">Options: строки</div> -->
    <div class="row items-center q-mb-md avatars-row">
      <b-avatar size="xl" icon />
      <b-avatar size="l" icon />
      <b-avatar size="m" icon />
      <b-avatar size="s" icon />
      <b-avatar size="xs" icon />
    </div>
    <div class="row items-center q-mb-md avatars-row">
      <b-avatar size="xl" icon circle />
      <b-avatar size="l" icon circle />
      <b-avatar size="m" icon circle />
      <b-avatar size="s" icon circle />
      <b-avatar size="xs" icon circle />
    </div>
    <div class="row items-center q-mb-md avatars-row">
      <b-avatar size="xl" circle text="АБ" />
      <b-avatar size="l" circle text="АБ" />
      <b-avatar size="m" circle text="АБ" />
      <b-avatar size="s" circle text="АБ" />
      <b-avatar size="xs" circle text="АБ" />
    </div>
    <div class="row items-center q-mb-md avatars-row">
      <b-avatar size="xl" inverted text="АБ" />
      <b-avatar size="l" inverted text="АБ" />
      <b-avatar size="m" inverted text="АБ" />
      <b-avatar size="s" inverted text="АБ" />
      <b-avatar size="xs" inverted text="АБ" />
    </div>
  </div>
</template>

<script>
import BAvatar from "../components/b-avatar";
export default {
  name: "Avatars",
  components: {
    BAvatar
  },
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
.avatars-row {
  width: 100%;
  background-color: #eeeeee;
  padding: 20px;
  .b-avatar {
    margin-right: 10px;
  }
}
</style>
