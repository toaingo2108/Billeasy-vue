<template>
  <v-menu
    activator="parent"
    :close-on-content-click="false"
    v-model="menuDialog"
  >
    <v-card class="rounded-xl pa-2" width="672" color="#F2F2F7">
      <v-card-title class=""> Item #5 </v-card-title>
      <v-card-text class="d-flex flex-column pb-1 w-100">
        <v-tabs v-model="tab" color="#20C39D">
          <v-tab
            :value="index"
            class="text-none font-14 app-medium-font"
            :class="tab == index ? 'teal-font' : 'blue-600'"
            v-for="(menu, index) in tabMenus"
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
            v-for="(menu, index) in tabMenus"
            :key="index"
            :value="index"
          >
            <div v-if="menu.title == 'To-do Details'">
              <div class="d-flex flex-row mt-6">
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Name
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-text-field
                      placeholder="Start Time"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      value="Item #5"
                    />
                  </div>
                </div>
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Due Date
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-text-field
                      placeholder="Due Date"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      value="2023-06-01"
                    />
                  </div>
                </div>
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Assignee / Person
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-select
                      bg-color="white"
                      placeholder="Assignee / Person"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row mt-4">
                <div style="width: 66.66%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Task Description
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-textarea
                      placeholder="Enter description..."
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      rows="4"
                    />
                  </div>
                </div>
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Category
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-select
                      bg-color="white"
                      placeholder="Assignee / Person"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                  <div class="mt-5">
                    <span class="font-13 app-medium-font dark-font">
                      Status
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-select
                      bg-color="white"
                      placeholder="Assignee / Person"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row mt-6 ms-2">
                <span class="font-12 shade-font app-semibold-font">
                  TO DO RELATION
                </span>
              </div>
              <div class="d-flex flex-row mt-4">
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Invoice
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-select
                      bg-color="white"
                      placeholder="Invoice"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                </div>
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Subscription
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-text-field
                      placeholder="Subscription"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                </div>
                <div style="width: 33.33%" class="px-2">
                  <div>
                    <span class="font-13 app-medium-font dark-font">
                      Person
                    </span>
                  </div>
                  <div class="mt-1">
                    <v-select
                      bg-color="white"
                      placeholder="Person"
                      variant="outlined"
                      rounded="lg"
                      hide-details
                      :items="['John Doe', 'Jane Doe']"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row pb-1 px-2 mt-6">
                <div style="width: 138px">
                  <span class="font-14 app-medium-font dark-font">
                    Created on
                  </span>
                </div>
                <div>
                  <span class="font-13 app-regular-font shade-font">
                    2023-05-01, 13.20
                  </span>
                </div>
              </div>
              <div class="d-flex flex-row pt-1 pb-1 px-2">
                <div style="width: 138px">
                  <span class="font-14 app-medium-font dark-font">
                    Last updated on
                  </span>
                </div>
                <div>
                  <span class="font-13 app-regular-font shade-font">
                    2023-05-01, 13.20
                  </span>
                </div>
              </div>
            </div>
            <div v-else-if="menu.title == 'To-do Notes'">
              <div class="d-flex flex-row justify-end mt-2">
                <v-btn
                  color="white"
                  @click="onAddNewNote"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  style="
                    background: #20c39d !important;
                    color: white !important;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                  "
                  class="text-none"
                  >New Note</v-btn
                >
              </div>
              <div class="d-flex flex-row align-center mt-8 mb-10 mx-4">
                <app-data-table
                  :headers="noteHeaders"
                  :items="noteItems"
                  items-per-page="15"
                  style="margin-bottom: 80px"
                  :checkable="false"
                >
                  <template v-slot:action>
                    <todo-note-item-menu />
                  </template>
                </app-data-table>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-divider class="mt-5" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          class="text-none"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-color: #d1d1e2;
          "
          >Cancel</v-btn
        >
        <v-btn
          class="text-none"
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-sync"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import todoUnselectedIcon from "@/assets/svg/customers/todos_unselected.svg";
import todoSelectedIcon from "@/assets/svg/customers/todos.svg";
import notesIcon from "@/assets/svg/customers/notes.svg";
import notesUnselectedIcon from "@/assets/svg/customers/notes_unselected.svg";
import AppDataTable from "../default/AppDataTable.vue";
import TodoNoteItemMenu from "./TodoNoteItemMenu.vue";

const props = defineProps({
  dialog: Boolean,
});

const menuDialog = ref(false);

const emit = defineEmits();

const closeDialog = () => {
  menuDialog.value = false;
};

const tab = ref(0);
const tabMenus = [
  {
    title: "To-do Details",
    selected_icon: todoSelectedIcon,
    unselected_icon: todoUnselectedIcon,
  },
  {
    title: "To-do Notes",
    selected_icon: notesIcon,
    unselected_icon: notesUnselectedIcon,
  },
];

const noteHeaders = [
  { title: "Header", key: "header", style: "bold", align: "left" },
  { title: "Updated at", key: "updated_at", align: "left" },
  { title: "", key: "action" },
];

const noteItems = [
  {
    header: "123",
    updated_at: "2023-08-01, 12:32",
  },
  {
    header: "123",
    updated_at: "2023-08-01, 12:32",
  },
  {
    header: "123",
    updated_at: "2023-08-01, 12:32",
  },
  {
    header: "123",
    updated_at: "2023-08-01, 12:32",
  },
  {
    header: "123",
    updated_at: "2023-08-01, 12:32",
  },
];
</script>

<style scoped>
div :deep(.v-label) {
  opacity: 1;
}

.v-checkbox .v-selection-control {
  min-height: 40px;
}
</style>
