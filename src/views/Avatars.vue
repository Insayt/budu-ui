<template>
  <div>
    <div class="b-h1 q-mb-lg">Аватарки</div>
    <div class="b-h3 q-mb-md">Options: size</div>
    <code class="q-mb-lg" v-text="tSize"></code>
    <div class="row items-center q-mb-md avatars-row">
      <div class="avatar-item">
        <b-avatar size="xl" icon />
        <span>xl</span>
      </div>
      <div class="avatar-item">
        <b-avatar size="l" icon />
        <span>l</span>
      </div>
      <div class="avatar-item">
        <b-avatar size="m" icon />
        <span>m</span>
      </div>
      <div class="avatar-item">
        <b-avatar size="s" icon />
        <span>s</span>
      </div>
      <div class="avatar-item">
        <b-avatar size="xs" icon />
        <span>xs</span>
      </div>
    </div>
    <div class="b-h3 q-mb-md">Options: circle</div>
    <code class="q-mb-lg" v-text="tCircle"></code>
    <div class="row items-center q-mb-md avatars-row">
      <div class="avatar-item">
        <b-avatar size="xl" icon circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="l" icon circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="m" icon circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="s" icon circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="xs" icon circle />
      </div>
    </div>
    <div class="b-h3 q-mb-md">Options: text</div>
    <code class="q-mb-lg" v-text="tText"></code>
    <div class="row items-center q-mb-md avatars-row">
      <div class="avatar-item">
        <b-avatar size="xl" circle text="АБ" />
      </div>
      <div class="avatar-item">
        <b-avatar size="l" text="АБ" />
      </div>
      <div class="avatar-item">
        <b-avatar size="m" circle text="АБ" />
      </div>
      <div class="avatar-item">
        <b-avatar size="s" text="АБ" />
      </div>
      <div class="avatar-item">
        <b-avatar size="xs" text="АБ" />
      </div>
    </div>
    <div class="b-h3 q-mb-md">Options: inverted</div>
    <code class="q-mb-lg" v-text="tInverted"></code>
    <div class="row items-center q-mb-md avatars-row">
      <div class="avatar-item">
        <b-avatar size="xl" inverted />
      </div>
      <div class="avatar-item">
        <b-avatar size="l" inverted text="АБ"/>
      </div>
      <div class="avatar-item">
        <b-avatar size="m" inverted circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="s" inverted />
      </div>
      <div class="avatar-item">
        <b-avatar size="xs" inverted />
      </div>
    </div>
    <div class="b-h3 q-mb-md">Options: url</div>
    <code class="q-mb-lg" v-text="tUrl"></code>
    <div class="row items-center q-mb-md avatars-row">
      <div class="avatar-item">
        <b-avatar size="xl" :url="avatarUrl" />
      </div>
      <div class="avatar-item">
        <b-avatar size="l" inverted :url="avatarUrl"/>
      </div>
      <div class="avatar-item">
        <b-avatar size="m" :url="avatarUrl" circle />
      </div>
      <div class="avatar-item">
        <b-avatar size="s" :url="avatarUrl" />
      </div>
      <div class="avatar-item">
        <b-avatar size="xs" :url="avatarUrl" />
      </div>
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
  data: () => ({
    tSize: `<b-avatar size="xl"></b-avatar>`,
    tCircle: `<b-avatar circle></b-avatar>`,
    tText: `<b-avatar text="АБ"></b-avatar>`,
    tInverted: `<b-avatar inverted></b-avatar>`,
    tUrl: `<b-avatar :url="avatarUrl"></b-avatar>`,
    avatarUrl: '/images/avatar.png',
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
.avatars-row {
  width: 100%;
  background-color: #b9abab;
  padding: 20px;
  .avatar-item {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .b-avatar {

  }
}
</style>
