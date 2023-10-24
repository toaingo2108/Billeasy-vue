<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center w-100">
      <div>
        <v-btn
          variant="outlined"
          prepend-icon="mdi-chevron-left"
          @click="onBack"
          rounded="lg"
          color="#0D0D1E"
          style="
            border-color: #d1d1e2;
            text-decoration: none;
            margin-right: 24px;
          "
          >Back</v-btn
        >
      </div>
      <div class="app-semibold-font font-20 blue-600">Subscriptions</div>
    </div>
    <div>
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font"
          :class="tab == index ? 'teal-font' : 'blue-600'"
          v-for="(menu, index) in menus"
        >
          <div class="me-2">
            <v-img
              width="18"
              height="18"
              :src="index == tab ? menu.selected_icon : menu.unselected_icon"
            />
          </div>
          {{ menu.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="(menu, index) in menus"
          :key="index"
          :value="index"
        >
          <div v-if="menu.title == 'Subscription'">
            <div class="d-flex justify-between">
              <div class="d-flex mt-6">
                <div style="width: 288px">
                  <search-field />
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  color="#20C39D"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  elevation="4"
                  class="text-none white-font app-medium-font font-14"
                  @click="openNewNoteDialog"
                >
                  New Note
                </v-btn>
              </div>
            </div>
            <div class="mt-10">
              <app-data-table
                :headers="noteHeaders"
                :items="noteItems"
                items-per-page="15"
                style="margin-bottom: 80px"
                :checkable="false"
              >
                <template v-slot:action>
                  <subscription-note-item-menu />
                </template>
              </app-data-table>
              <div
                style="height: 96px; bottom: 0; width: calc(100% - 300px)"
                class="bg-gray position-fixed d-flex flex-row align-center justify-end"
              >
                <app-data-table-bottom-pagination :length="15" class="me-10" />
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == 'Notes'">
            <div class="d-flex justify-between">
              <div class="d-flex mt-6">
                <div style="width: 288px">
                  <search-field />
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  color="#20C39D"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  elevation="4"
                  class="text-none white-font app-medium-font font-14"
                  @click="openNewNoteDialog"
                >
                  New Note
                </v-btn>
              </div>
            </div>
            <div class="mt-10">
              <app-data-table
                :headers="noteHeaders"
                :items="noteItems"
                items-per-page="15"
                style="margin-bottom: 80px"
                :checkable="false"
              >
                <template v-slot:action>
                  <subscription-note-item-menu />
                </template>
              </app-data-table>
              <div
                style="height: 96px; bottom: 0; width: calc(100% - 300px)"
                class="bg-gray position-fixed d-flex flex-row align-center justify-end"
              >
                <app-data-table-bottom-pagination :length="15" class="me-10" />
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == `To-do's`">
            <div class="d-flex justify-between">
              <div class="d-flex mt-6">
                <div style="width: 288px">
                  <search-field />
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  color="#20C39D"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  elevation="4"
                  class="text-none white-font app-medium-font font-14"
                  @click="openNewNoteDialog"
                >
                  New To-do
                </v-btn>
              </div>
            </div>
            <div class="mt-10">
              <todo-category-list>
                <template v-slot:action>
                  <customer-todo-details-menu />
                </template>
              </todo-category-list>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
    <subscription-add-note-dialog
      :dialog="addNewNoteDialog"
      @update:dialog="(val) => (addNewNoteDialog = val)"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import subscriptionIcon from "@/assets/svg/subscriptions/subscription.svg";
import subscriptionUnselectedIcon from "@/assets/svg/subscriptions/subscription_unselected.svg";
import notesIcon from "@/assets/svg/customers/notes.svg";
import notesUnselectedIcon from "@/assets/svg/customers/notes_unselected.svg";
import todosIcon from "@/assets/svg/customers/todos.svg";
import todosUnselectedIcon from "@/assets/svg/customers/todos_unselected.svg";
import SearchField from "../default/SearchField.vue";
import AppDataTable from "../default/AppDataTable.vue";
import AppDataTableBottomPagination from "../default/AppDataTableBottomPagination.vue";
import TodoCategoryList from "../default/TodoCategoryList.vue";
import SubscriptionAddNoteDialog from "./SubscriptionAddNoteDialog.vue";
import SubscriptionNoteItemMenu from "./SubscriptionNoteItemMenu.vue";
import CustomerTodoDetailsMenu from "../customers/CustomerTodoDetailsMenu.vue";

const tab = ref(0);

const addNewNoteDialog = ref(false);

const router = useRouter();
const onBack = function () {
  router.push({ name: "subscriptions" });
};

const menus = [
  {
    title: "Subscription",
    selected_icon: subscriptionIcon,
    unselected_icon: subscriptionUnselectedIcon,
  },
  {
    title: "Notes",
    selected_icon: notesIcon,
    unselected_icon: notesUnselectedIcon,
  },
  {
    title: "To-do's",
    selected_icon: todosIcon,
    unselected_icon: todosUnselectedIcon,
  },
];

const noteHeaders = [
  { title: "Header", key: "header", style: "bold" },
  { title: "Updated At", key: "updated_at", style: "bold" },
  { title: "Created At", key: "created_at" },
  { title: "Created By", key: "created_by" },
  { title: "Updated By", key: "updated_by" },
  { title: "", key: "action" },
];

const noteItems = [
  {
    header: 1001,
    update_at: "Blue t-shirt, XS",
    created_at: "1231231234",
    updated_at: "2023-08-01, 12:32",
    created_by: "Stockholm",
    updated_by: "2023-07-01",
  },
  {
    header: 1001,
    update_at: "Blue t-shirt, XS",
    created_at: "1231231234",
    updated_at: "2023-08-01, 12:32",
    created_by: "Stockholm",
    updated_by: "2023-07-01",
  },
  {
    header: 1001,
    update_at: "Blue t-shirt, XS",
    created_at: "1231231234",
    updated_at: "2023-08-01, 12:32",
    created_by: "Stockholm",
    updated_by: "2023-07-01",
  },
];

const openNewNoteDialog = function () {
  addNewNoteDialog.value = true;
};
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}

div :deep(.v-label) {
  opacity: 1;
}
div :deep(.v-chip__close) {
  color: #8b8ba9;
}

.icon-button {
  width: 32px;
  height: 32px;
  max-width: 32px;
  max-height: 32px;
  min-width: 32px;
  min-height: 32px;
  padding: 0;
  border-color: #d1d1e2;
}
</style>
