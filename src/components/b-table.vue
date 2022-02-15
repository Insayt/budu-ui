<template>
  <table class="b-table">
    Table
    <tr>
      <th v-for="(column, index) in columns" :key="index">
        {{ column.label }}
      </th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td v-for="(column, index) in columns" :key="index">
        {{ item[column.key] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "b-table",
  props: {
    columns: Array,
    items: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.b-table {
  width: 100%;
}
</style>
