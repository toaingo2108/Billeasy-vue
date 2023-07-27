<template>
  <div class="table-row-4">
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
    <row-settings-register-currencies />
  </div>
</template>

<script>
import RowSettingsRegisterCurrencies from "./RowSettingsRegisterCurrencies";
export default {
  name: "TableRow22",
  components: {
    RowSettingsRegisterCurrencies,
  },
};
</script>

<style>
.table-row-4,
.table-row-5,
.table-row-6,
.table-row-7,
.table-row-8,
.table-row-9,
.table-row-10,
.table-row-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 426px;
  position: relative;
  width: 864px;
}
</style>
