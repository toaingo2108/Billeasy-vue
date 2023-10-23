<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(item, index) in todoItems"
      :key="index"
      elevation="0"
      :style="`--panel-before-bg-color: ${item.color}`"
      :class="`${props.type}-panel bg-${props.theme}-color`"
    >
      <v-expansion-panel-title v-slot="{ expanded }" hide-actions>
        <div
          class="font-14 app-medium-font dark-font me-15 d-flex flex-row align-center"
        >
          <div
            style="
              width: 5px;
              height: 5px;
              border-radius: 2.5px;
              margin-right: 8px;
            "
            :style="`background-color: ${item.color}`"
          />
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
          :class="props.type == 'detailed' ? 'ms-8' : ''"
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
            <div
              v-if="props.type != 'simple'"
              style="width: 416px"
              class="d-flex flex-row align-center"
            >
              <span class="font-14 app-regular-font shade-font">
                Invoice:
              </span>
              <span class="font-14 dark-font app-semibold-font">1232332</span>
              <div
                style="
                  width: 5px;
                  height: 5px;
                  background-color: #d1d1e2;
                  border-radius: 2.5px;
                  margin: 8px;
                "
              />
              <span class="font-14 app-regular-font shade-font">
                Subscription:
              </span>
              <span class="font-14 dark-font app-semibold-font">Premium</span>
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
                <slot name="action"></slot>
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

const props = defineProps({
  type: { type: String, default: "simple" },
  theme: { type: String, default: "light" },
});

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
    color: "#8348FF",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "New",
    date: "2023/05/01",
    color: "#8CCD22",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "Started",
    date: "2023/05/01",
    color: "#F87137",
  },
];
</script>
<style scoped>
.bg-light-color {
  background-color: white;
}
.bg-dark-color {
  background-color: #0000;
}

.detailed-panel :deep(.v-expansion-panel-text__wrapper::before) {
  content: ""; /* This is essential for the pseudo-element to be displayed */
  display: block; /* Ensure it behaves as a block element */
  position: absolute;
  left: 0;
  top: 0; /* Adjust as needed */
  width: 2px;
  height: 100%;
  margin-left: 38px;
  background-color: var(--panel-before-bg-color, #8348ff);
}
.v-expansion-panels :deep(.v-expansion-panel-text) {
  position: relative;
}

.v-expansion-panels :deep(.v-expansion-panel-title__overlay) {
  opacity: 0;
}
</style>
