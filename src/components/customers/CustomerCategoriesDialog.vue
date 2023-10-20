<template>
  <v-dialog v-model="dialog" width="1120">
    <v-card class="rounded-xl">
      <v-card-title
        class="app-semibold-font font-20 dark-font mt-6 mx-3 d-flex flex-row justify-between"
      >
        Customer Categories
        <div class="d-flex flex-row">
          <div style="width: 207px">
            <v-text-field
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
          <div>
            <v-btn
              variant="text"
              prepend-icon="mdi-plus"
              class="text-none app-medium-font font-14 ms-2"
              color="white"
              rounded="lg"
              style="
                background: #20c39d;
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
                height: 40px;
              "
              @click="onAddNewCategory"
            >
              New Category
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <v-data-table :headers="headers" :items="items" items-per-page="7">
        </v-data-table>
      </v-card-text>
      <new-customer-category-dialog
        :dialog="categoryDialog"
        @update:dialog="(val) => (categoryDialog = val)"
      />
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, watchEffect } from "vue";
import NewCustomerCategoryDialog from "./NewCustomerCategoryDialog.vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const dialog = ref(props.dialog);

const closeDialog = () => {
  emit("update:dialog", false);
  dialog.value = false;
};

const headers = [
  { title: "Name", key: "title" },
  { title: "Description", key: "description" },
  { title: "#Customers In Category", key: "count" },
  { title: "", key: "action" },
];

const items = [
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 1331233,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
  {
    title: "New Customers",
    description:
      "This categories are for all customers created the last 30 days",
    count: 133,
  },
];

const priceDialog = ref(false);
const categoryDialog = ref(false);

const onAddNewCategory = function () {
  categoryDialog.value = true;
};

watchEffect(() => {
  if (!dialog.value) closeDialog();
});
</script>

<style scoped>
.v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px 10px;
}
</style>
