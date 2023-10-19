<template>
  <v-table style="width: 100%">
    <thead>
      <tr>
        <th
          class="text-left font-12 app-semibold-font shade-font"
          v-for="(header, index) in headers"
          :key="index"
        >
          <div v-if="header.checkable">
            <v-checkbox color="#20c39d" hide-details v-model="isCheckedAll" />
          </div>
          <div v-else-if="header.key != 'action'">
            <span class="dark-font app-semibold-font font-13">
              {{ header.title }}
            </span>
            <v-icon color="#59597B">mdi-unfold-more-horizontal</v-icon>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index" style="height: 36px">
        <td v-for="(header, index) in headers">
          <v-checkbox
            color="#20c39d"
            hide-details
            v-model="item.checked"
            v-if="header.key == 'checked'"
          />
          <div v-else-if="header.key == 'action'">
            <v-btn icon size="x-small" flat>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </div>
          <div
            v-else-if="header.key == 'status'"
            class="d-flex flex-row align-center"
          >
            <v-img
              src="@/assets/svg/customers/status_done.svg"
              width="24"
              height="24"
              v-if="item.status"
            />
            <v-img
              src="@/assets/svg/customers/status_paused.svg"
              width="24"
              height="24"
              v-else
            />
          </div>
          <div v-else>
            <span
              class="font-13 dark-font app-semibold-font"
              v-if="header.style == 'bold'"
            >
              {{ item[`${header.key}`] }}
            </span>
            <span class="font-13 shade-font app-medium-font" v-else>
              {{ item[`${header.key}`] }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script lang="ts" setup>
import {
  ref,
  defineProps,
  defineEmits,
  watchEffect,
  reactive,
  watch,
} from "vue";
import { TableHeadersArray, TableItemsArray } from "@/types/interfaces";

const props = defineProps({
  headers: { type: Array as () => TableHeadersArray, default: [] },
  items: { type: Array as () => TableItemsArray, default: [] },
  checkable: { type: Boolean, default: true },
});

const headers = reactive(
  props.checkable
    ? [{ checkable: true, key: "checked" }, ...props.headers]
    : props.headers
);
const items = reactive(props.items);

const isCheckedAll = ref(false);

watch(
  () => isCheckedAll.value,
  (newValue) => {
    if (newValue) {
      for (let i = 0; i < items.length; i++) {
        items[i] = { ...items[i], checked: true };
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i] = { ...items[i], checked: false };
      }
    }
  }
);

const emit = defineEmits();

const updateItems = () => {
  emit("update:Items", items);
};
</script>
<style scoped></style>
