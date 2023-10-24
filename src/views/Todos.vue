<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">To-do's</div>
      <div
        class="app-medium-font font-14 teal-font d-flex flex-row align-center"
      >
        <v-btn variant="plain" class="text-none" @click="onTodoCustomize">
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
            @click="onTodoStatus"
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
            @click="onTodoCategory"
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
    <new-todo-category-dialog
      :dialog="newTodoCategoryDialog"
      @update:dialog="(val) => (newTodoCategoryDialog = val)"
      v-if="newTodoCategoryDialog"
    />
    <new-todo-status-dialog
      :dialog="newTodoStatusDialog"
      @update:dialog="(val) => (newTodoStatusDialog = val)"
      v-if="newTodoStatusDialog"
    />
    <new-todo-item-dialog
      :dialog="newTodoItemDialog"
      @update:dialog="(val) => (newTodoItemDialog = val)"
      v-if="newTodoItemDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NewTodoCategoryDialog from "@/components/todos/NewTodoCategoryDialog.vue";
import NewTodoItemDialog from "@/components/todos/NewTodoItemDialog.vue";
import NewTodoStatusDialog from "@/components/todos/NewTodoStatusDialog.vue";
import TodoCategoryList from "@/components/default/TodoCategoryList.vue";
import TodoDetailsUpdateMenu from "@/components/todos/TodoDetailsUpdateMenu.vue";

const newTodoCategoryDialog = ref(false);
const newTodoStatusDialog = ref(false);
const newTodoItemDialog = ref(false);

import { useRouter } from "vue-router";
import SearchField from "@/components/default/SearchField.vue";

const router = useRouter();

const openNewTodoDialog = function () {
  console.log("asdfasdfasdf");
  newTodoItemDialog.value = true;
};

const onTodoDetails = () => {
  newTodoItemDialog.value = true;
};
const onTodoCustomize = () => {
  router.push({ name: "todos-customize" });
};

const onTodoCategory = function () {
  newTodoCategoryDialog.value = true;
};
const onTodoStatus = function () {
  newTodoStatusDialog.value = true;
};
</script>
<style scoped></style>
