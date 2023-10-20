<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel v-for="i in 3" :key="i" elevation="0">
      <v-expansion-panel-title v-slot="{ expanded }" hide-actions>
        <div
          class="font-14 app-medium-font dark-font me-15 d-flex flex-row align-center"
        >
          Category Name
          <div class="ms-3">
            <v-img
              width="24"
              height="24"
              :src="expanded ? bottomIcon : rightIcon"
            />
          </div>
        </div>
        <v-btn
          variant="text"
          prepend-icon="mdi-plus"
          class="text-none app-medium-font font-14 ms-2"
          color="#20C39D"
          rounded="lg"
          @click.stop="onAddNewCategory"
          @mousedown.stop
          @touchstart.stop
          v-if="expanded"
        >
          Add New
        </v-btn>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-card
          v-for="(item, index) in todoItems"
          :key="index"
          class="rounded-xl mt-2"
          elevation="0"
          color="#F7F7FA"
        >
          <v-card-text class="d-flex flex-row">
            <v-avatar size="24" class="ms-3 me-3">
              <v-img :src="item.image" />
            </v-avatar>
            <div class="flex-grow">
              <div class="font-14 app-medium-font dark-font">
                {{ item.text }}
              </div>
              <div class="font-12 shade-font app-regular-font">
                {{ item.date }}
              </div>
            </div>
            <div style="width: 220px">
              <v-chip
                :style="
                  item.status == 'Done'
                    ? 'background-color: #22B762; color: white;'
                    : item.status == 'Started'
                    ? 'background-color: #376AEE; color: white;'
                    : 'background-color: #E6E6ED; color: black'
                "
                class="font-12 app-regular-font"
                >{{ item.status }}</v-chip
              >
            </div>
            <div class="d-flex flex-row align-center">
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
                <customer-todo-details-menu />
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import todoImage from "@/assets/sample/profile.png";
import rightIcon from "@/assets/svg/datatable/right.svg";
import bottomIcon from "@/assets/svg/datatable/bottom.svg";
import CustomerTodoDetailsMenu from "../customers/CustomerTodoDetailsMenu.vue";

const addNewDialog = ref(false);
const onAddNewCategory = function () {
  addNewDialog.value = true;
};

const todoItems = [
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "Done",
    date: "2023/05/01",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "New",
    date: "2023/05/01",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "Started",
    date: "2023/05/01",
  },
];
</script>
<style scoped></style>
