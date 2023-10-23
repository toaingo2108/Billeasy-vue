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
    <div class="mt-10 h-100">
      <v-row class="h-100">
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" class="h-100">
            <v-card-title
              class="font-16 app-semibold-font dark-font d-flex flex-row justify-between align-center"
            >
              New Task
              <v-chip
                style="background-color: #dca312; height: 22px"
                class="font-12 app-regular-font"
                color="white"
              >
                3
              </v-chip>
            </v-card-title>
            <v-divider />
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center light-blue-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #8348ff;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center light-blue-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #8348ff;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center light-blue-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #8348ff;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" style="height: 100%">
            <v-card-title
              class="font-16 app-semibold-font dark-font d-flex flex-row justify-between align-center"
            >
              Assigned
              <v-chip
                style="background-color: #8526e4; height: 22px"
                class="font-12 app-regular-font"
                color="white"
              >
                2
              </v-chip>
            </v-card-title>
            <v-divider />
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center lime-green-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #7ab618;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center lime-green-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #7ab618;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" class="h-100">
            <v-card-title
              class="font-16 app-semibold-font dark-font d-flex flex-row justify-between align-center"
            >
              Started
              <v-chip
                style="background-color: #126fdc; height: 22px"
                class="font-12 app-regular-font"
                color="white"
              >
                3
              </v-chip>
            </v-card-title>
            <v-divider />
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center light-blue-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #8348ff;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center lime-green-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #7ab618;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="h-100">
          <v-card rounded="xl" style="height: 100%">
            <v-card-title
              class="font-16 app-semibold-font dark-font d-flex flex-row justify-between align-center"
            >
              Done
              <v-chip
                style="background-color: #86d81e; height: 22px"
                class="font-12 app-regular-font"
                color="white"
              >
                1
              </v-chip>
            </v-card-title>
            <v-divider />
            <v-card-text
              style="
                background-color: #f7f7fa;
                border-radius: 20px;
                margin: 12px;
              "
            >
              <div class="font-13 app-semibold-font dark-font">
                Call Jimmy for project #2
              </div>
              <div class="d-flex flex-row mt-4">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_profile.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font">John Doe</span>
              </div>
              <div class="d-flex flex-row mt-2">
                <div class="me-2">
                  <v-img
                    width="16"
                    height="16"
                    src="@/assets/svg/todos/icon_calendar.svg"
                  />
                </div>
                <span class="font-13 app-regular-font dark-font"
                  >2023/06/01</span
                >
              </div>
              <div
                class="d-flex flex-row align-center pumpkin-font font-12 app-medium-font"
              >
                <div
                  style="
                    width: 5px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-right: 8px;
                    background-color: #f87037;
                  "
                />
                Category Name
                <v-spacer />
                <v-btn
                  variant="plain"
                  width="32"
                  height="32"
                  class="button-32"
                  rounded="lg"
                >
                  <v-img
                    width="32"
                    height="32"
                    src="@/assets/svg/todos/btn_more.svg"
                  />
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
  router.push({ name: "new-customer" });
};

const onImportData = function () {
  importDialog.value = true;
};
const onCustomerCategories = function () {
  customerCategoriesDialog.value = true;
};
</script>
<style scoped></style>
