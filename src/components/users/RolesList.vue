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
    <div class="mt-10 w-100 pe-4">
      <v-table style="width: 100%; background-color: #0000">
        <thead>
          <tr>
            <th
              class="text-left font-13 app-semibold-font dark-font remove-border-bottom"
              v-for="(header, index) in headers"
              :key="index"
            >
              <div
                class="d-flex flex-row align-center"
                :class="
                  header.align ? `justify-${header.align}` : 'justify-center'
                "
              >
                {{ header.title }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style="height: 56px" v-for="(item, index) in items" :key="index">
            <v-hover v-slot="{ isHovering, props }">
              <td
                style="min-width: 224px"
                class="remove-border-bottom"
                v-bind="props"
              >
                <div
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                  "
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  class="d-flex flex-row align-center"
                >
                  <v-text-field
                    placeholder="Name"
                    variant="outlined"
                    rounded="lg"
                    hide-details
                    v-model="item.name"
                    class="me-2"
                  />
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  class="font-13 dark-font app-medium-font d-flex flex-row align-center ps-2"
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 168px;
                  "
                >
                  {{ item.user_number }}
                </div>
              </td>
              <td
                class="remove-border-bottom"
                v-bind="props"
                style="width: 100%"
              >
                <div
                  class="font-13 dark-font app-medium-font d-flex flex-row align-center justify-center"
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 100%;
                  "
                >
                  {{ item.invoices }}
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="item.see" />
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="item.update" />
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="item.create" />
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="item.delete" />
                </div>
              </td>
              <td class="remove-border-bottom" v-bind="props">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 64px;
                  "
                  class="d-flex flex-row align-center"
                >
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
                      background-color: #0000;
                    "
                  >
                    <v-img
                      src="@/assets/svg/datatable/dot_menu.svg"
                      width="24"
                      height="24"
                    />
                    <item-menu />
                  </v-btn>
                </div>
              </td>
            </v-hover>
          </tr>
          <tr style="height: 56px">
            <v-hover v-slot="{ isHovering, props }">
              <td style="min-width: 224px" class="remove-border-bottom">
                <div
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                  "
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  class="d-flex flex-row align-center"
                >
                  <v-text-field
                    placeholder="New role"
                    variant="outlined"
                    rounded="lg"
                    hide-details
                    class="me-2"
                  />
                </div>
              </td>
              <td class="remove-border-bottom">
                <div
                  class="font-13 dark-font app-medium-font d-flex flex-row align center"
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 168px;
                  "
                ></div>
              </td>
              <td class="remove-border-bottom">
                <div
                  class="font-13 dark-font app-medium-font d-flex flex-row align center justify-center"
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                  "
                ></div>
              </td>
              <td class="remove-border-bottom">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="newItem.see" />
                </div>
              </td>
              <td class="remove-border-bottom">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="newItem.update" />
                </div>
              </td>
              <td class="remove-border-bottom">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="newItem.create" />
                </div>
              </td>
              <td class="remove-border-bottom">
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 134px;
                  "
                  class="d-flex flex-row align-center justify-center"
                >
                  <app-checkbox v-model="newItem.delete" />
                </div>
              </td>
              <td>
                <div
                  :class="isHovering ? 'bg-hover' : 'bg-row'"
                  style="
                    margin-top: 3px;
                    margin-bottom: 3px;
                    height: calc(100% - 6px);
                    width: 64px;
                  "
                ></div>
              </td>
            </v-hover>
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
  { title: "Name", key: "name", align: "left" },
  { title: "Number of Users", key: "user_number", align: "left" },
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

const onSelectedSubscription = function (item: any, index: number) {
  router.push({ name: "subscription-details", query: { id: item.id } });
};
</script>
<style scoped>
td,
th {
  border: solid 0px #0000 !important;
  border-style: solid none;
  padding: 0 !important;
}
th:first-child > div {
  padding-left: 12px;
}
td:first-child > div {
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: var(--app-data-table-row-color, white);
  padding-left: 12px;
}
td:last-child > div {
  border-bottom-right-radius: 16px !important;
  border-top-right-radius: 16px !important;
  background-color: var(--app-data-table-row-color, white);
}
td .bg-hover {
  background-color: #eef3f8 !important;
}
td .bg-row {
  background-color: var(--app-data-table-row-color, white) !important;
}
</style>
