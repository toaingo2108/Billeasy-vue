<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">To-do's</div>
      <div
        class="app-medium-font font-14 teal-font d-flex flex-row align-center"
      >
        <v-btn variant="plain" class="text-none">
          <v-icon color="#20C39D" class="me-2">mdi-vector-square </v-icon>
          Customize
        </v-btn>
      </div>
    </div>
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div style="width: 288px">
          <search-field />
        </div>
        <div class="ml-2">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="button-40"
            rounded="lg"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/products/filter.svg"
            />
          </v-btn>
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="button-40"
            rounded="lg"
            @click="onImportData"
          >
            <v-img width="40" height="40" src="@/assets/svg/todos/graph.svg" />
          </v-btn>
        </div>
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="button-40"
            rounded="lg"
            @click="onCustomerCategories"
          >
            <v-img width="40" height="40" src="@/assets/svg/todos/check.svg" />
          </v-btn>
        </div>
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="openNewTodoDialog"
        >
          New To-do
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <todo-category-list
        type="detailed"
        theme="dark"
        :on-item-clicked="onTodoDetails"
      >
        <template v-slot:action>
          <todo-details-update-menu />
        </template>
      </todo-category-list>
    </div>
    <customer-export-dialog
      :dialog="exportDialog"
      @update:dialog="(val) => (exportDialog = val)"
    />
    <customer-import-dialog
      :dialog="importDialog"
      @update:dialog="(val) => (importDialog = val)"
    />
    <customer-categories-dialog
      :dialog="customerCategoriesDialog"
      @update:dialog="(val) => (customerCategoriesDialog = val)"
      v-if="customerCategoriesDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomerExportDialog from "@/components/customers/CustomerExportDialog.vue";
import CustomerImportDialog from "@/components/customers/CustomerImportDialog.vue";
import CustomerCategoriesDialog from "@/components/customers/CustomerCategoriesDialog.vue";
import TodoCategoryList from "@/components/default/TodoCategoryList.vue";
import TodoDetailsUpdateMenu from "@/components/todos/TodoDetailsUpdateMenu.vue";

const exportDialog = ref(false);
const importDialog = ref(false);
const customerCategoriesDialog = ref(false);

import { useRouter } from "vue-router";
import SearchField from "@/components/default/SearchField.vue";

const router = useRouter();

const openNewTodoDialog = function () {
  // router.push({ name: "new-customer" });
};

const onTodoDetails = () => {
  router.push({ name: "todos-details" });
};

const onImportData = function () {
  importDialog.value = true;
};
const onCustomerCategories = function () {
  customerCategoriesDialog.value = true;
};
</script>
<style scoped></style>
