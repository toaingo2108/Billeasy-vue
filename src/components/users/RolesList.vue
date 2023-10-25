<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
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
    </div>
    <div class="mt-10">
      <v-table style="width: 100%">
        <thead>
          <tr>
            <th
              class="text-left font-13 app-semibold-font dark-font"
              v-for="(header, index) in headers"
              :key="index"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" style="height: 36px">
            <td style="min-width: 224px" class="remove-border-bottom">
              <v-text-field
                placeholder="Name"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.name"
              />
            </td>
            <td class="remove-border-bottom">
              <span
                class="font-13 dark-font app-medium-font d-flex flex-row align center ms-1"
              >
                {{ item.user_number }}
              </span>
            </td>
            <td class="remove-border-bottom">
              <span
                class="font-13 dark-font app-medium-font d-flex flex-row align center justify-center"
              >
                {{ item.invoices }}
              </span>
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="item.see" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="item.update" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="item.create" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="item.delete" />
            </td>
            <td class="remove-border-bottom">
              <v-btn
                size="x-small"
                flat
                class="me-5"
                style="
                  width: 24px;
                  height: 24px;
                  min-height: 24px;
                  min-width: 24px;
                  max-height: 24px;
                  min-height: 24px;
                  padding: 0;
                "
              >
                <v-img
                  src="@/assets/svg/datatable/dot_menu.svg"
                  width="24"
                  height="24"
                />
                <item-menu />
              </v-btn>
            </td>
          </tr>
          <tr style="height: 36px">
            <td style="min-width: 224px" class="remove-border-bottom">
              <v-text-field
                placeholder="New role"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </td>
            <td class="remove-border-bottom">
              <span
                class="font-13 dark-font app-medium-font d-flex flex-row align center ms-1"
              >
              </span>
            </td>
            <td class="remove-border-bottom">
              <span
                class="font-13 dark-font app-medium-font d-flex flex-row align center justify-center"
              >
              </span>
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="newItem.see" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="newItem.update" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="newItem.create" />
            </td>
            <td class="remove-border-bottom">
              <app-checkbox v-model="newItem.delete" />
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <subscription-categories-dialog
      :dialog="subCategoriesDialog"
      @update:dialog="(val) => (subCategoriesDialog = val)"
      v-if="subCategoriesDialog"
    />
    <subscription-import-dialog
      :dialog="importDialog"
      @update:dialog="(val) => (importDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import ItemMenu from "./UserItemMenu.vue";
import { useRouter } from "vue-router";
import AppCheckbox from "@/components/default/AppCheckbox.vue";
import SubscriptionImportDialog from "@/components/subscriptions/SubscriptionImportDialog.vue";
import SearchField from "../default/SearchField.vue";
import SubscriptionCategoriesDialog from "@/components/subscriptions/SubscriptionCategoriesDialog.vue";

const headers = [
  { title: "Name", key: "name" },
  { title: "Number of Users", key: "user_number" },
  { title: "Invoices", key: "invoices" },
  { title: "See", key: "see" },
  { title: "Update", key: "update" },
  { title: "Create", key: "create" },
  { title: "Delete", key: "delete" },
  { title: "", key: "action" },
];

const items = reactive([
  {
    name: "Owner",
    user_number: 1,
    invoices: "invoices",
    see: true,
    update: false,
    create: false,
    delete: false,
  },
  {
    name: "Owner",
    user_number: 1,
    invoices: "invoices",
    see: false,
    update: true,
    create: false,
    delete: true,
  },
  {
    name: "Owner",
    user_number: 1,
    invoices: "invoices",
    see: false,
    update: true,
    create: false,
    delete: false,
  },
]);

const newItem = reactive({
  name: "",
  see: false,
  update: false,
  create: false,
  delete: false,
});

const importDialog = ref(false);
const registerPaymentDialog = ref(false);
const subCategoriesDialog = ref(false);
const router = useRouter();
const goToNewSubscription = function () {
  router.push({ name: "new-subscription" });
};

const onSubscriptionCategories = function () {
  subCategoriesDialog.value = true;
};
const onImportData = function () {
  importDialog.value = true;
};

onImportData;
const onSelectedSubscription = function (item: any, index: number) {
  router.push({ name: "subscription-details", query: { id: item.id } });
};
</script>
<style scoped></style>
