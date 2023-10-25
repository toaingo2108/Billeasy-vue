<template>
  <v-dialog v-model="dialog" width="1120">
    <v-card class="rounded-xl">
      <v-card-title
        class="app-semibold-font font-20 dark-font mt-6 mx-3 d-flex flex-row justify-between"
      >
        Product Categories
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
      <v-card-text class="d-flex flex-column mx-3 pb-1 align-end">
        <v-table style="width: 100%">
          <thead>
            <tr>
              <th
                class="text-left font-13 app-semibold-font dark-font"
                v-for="(header, index) in headers"
                :key="index"
              >
                {{ header.title }}
                <v-icon color="#59597B" v-if="header.title"
                  >mdi-unfold-more-horizontal</v-icon
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in items"
              :key="index"
              style="height: 36px"
            >
              <td class="remove-border-bottom">
                <span class="font-13 dark-font app-medium-font">1.</span>
              </td>
              <td style="min-width: 170px" class="remove-border-bottom">
                <v-text-field
                  placeholder="Title"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.title"
                />
              </td>
              <td style="width: 100%" class="remove-border-bottom">
                <v-text-field
                  placeholder="Title"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.description"
                />
              </td>
              <td style="min-width: 232px" class="remove-border-bottom">
                <span
                  class="font-13 dark-font app-semibold-font d-flex flex-row align center justify-center"
                >
                  {{ item.count }}
                </span>
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
                  <product-category-item-menu />
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
        <div
          style="
            height: 96px;
            display: flex;
            flex-direction: row;
            align-items: center;
          "
        >
          <app-data-table-bottom-pagination :length="15" />
        </div>
      </v-card-text>
      <new-product-category-dialog
        :dialog="categoryDialog"
        @update:dialog="(val) => (categoryDialog = val)"
      />
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import NewProductCategoryDialog from "./NewProductCategoryDialog.vue";
import AppDataTableBottomPagination from "../default/AppDataTableBottomPagination.vue";
import ProductCategoryItemMenu from "./ProductCategoryItemMenu.vue";

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
  { title: "", key: "id" },
  { title: "Article nr.", key: "title" },
  { title: "Article nr.", key: "description" },
  { title: "#Articles In Category", key: "count" },
  { title: "", key: "action" },
];

const items = [
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 1331233,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
  {
    title: "New Products",
    description:
      "This categories are for all products created the last 30 days",
    count: 133,
  },
];

const categoryDialog = ref(false);

const onAddNewCategory = function () {
  categoryDialog.value = true;
};

watchEffect(() => {
  if (!dialog.value) closeDialog();
});
</script>

<style scoped></style>
