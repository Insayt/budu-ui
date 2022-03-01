<template>
  <table class="b-table">
    <caption class="b-table__caption">
      <slot name="caption" />
    </caption>
    <thead>
      <tr class="b-table__head-row">
        <slot name="thead-start" />
        <slot name="thead">
          <th
            v-for="(column, index) in columns"
            :key="`head_${index}`"
            class="b-table__head-th">
            {{ column.label }}
          </th>
        </slot>
        <slot name="thead-end" />
      </tr>
    </thead>
    <tbody>
      <slot name="tbody">
        <tr
          v-for="(item, index) in items"
          :key="`row_${index}`"
          class="b-table__row"
          :class="`row_${index}`">
          <td
            v-for="(column, index) in columns"
            :key="`td_${index}_${column.key}`"
            class="b-table__row-td"
            :class="`td_${index}_${column.key}`">
            <slot :name="`td_${index}_${column.key}`">
              {{ item[column.key] }}
            </slot>
          </td>
        </tr>
      </slot>
    </tbody>
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
@import "../assets/styles/variables";
.b-table {
  width: 100%;
  &__caption {
    text-align: left;
  }
  .b-table__head {
    &-th {
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      color: $b-secondary-label;
    }
  }
}
</style>
