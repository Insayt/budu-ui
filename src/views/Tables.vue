<template>
  <div>
    <b-table :columns="columns" :items="items">
      <caption slot="caption">
        Table
      </caption>
      <tr
        slot="tbody"
        v-for="(item, index) in items"
        :key="`row_${index}`"
        class="b-table__row"
        :class="`row_${index}`">
        <td
          v-for="(column, index) in columns"
          :key="`td_${index}_${column.key}`"
          class="b-table__row-td"
          :class="`td_${index}_${column.key}`">
          {{ item[column.key] }} #
        </td>
      </tr>
    </b-table>
  </div>
</template>

<script>
import BTable from "../components/b-table";
export default {
  name: "Tables",
  components: {
    BTable,
  },
  data() {
    return {
      columns: [
        { key: "last_name", label: "Фамилия", sortable: true },
        { key: "first_name", label: "Имя", sortable: true },
        { key: "age", label: "Возраст", sortable: true },
        { key: "isActive", label: "Активный", sortable: false },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>

<style scoped></style>
