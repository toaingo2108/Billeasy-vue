<template>
  <v-table
    style="width: 100%; background-color: #0000"
    :style="`--app-data-table-row-color: ${props.rowColor}`"
  >
    <thead>
      <tr>
        <th
          class="text-left font-12 app-semibold-font shade-font"
          v-for="(header, index) in headers"
          :key="index"
        >
          <div
            v-if="header.checkable"
            class="d-flex flex-row align-center justify-center"
          >
            <app-checkbox v-model="isCheckedAll" />
          </div>
          <div
            v-else-if="header.key != 'action'"
            class="d-flex flex-row align-center"
            :class="header.align ? `justify-${header.align}` : 'justify-center'"
          >
            <span class="dark-font app-semibold-font font-13">
              {{ header.title }}
            </span>
            <v-icon color="#59597B">mdi-unfold-more-horizontal</v-icon>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
        style="height: 50px; padding-top: 3px; padding-bottom: 3px"
        @click="onRowClicked(item, index)"
      >
        <v-hover v-slot="{ isHovering, props }">
          <td v-for="(header, index) in headers" v-bind="props">
            <div
              class="w-100 d-flex flex-row align-center"
              :class="[
                header.align ? `justify-${header.align}` : 'justify-center',
                isHovering ? 'bg-hover' : 'bg-row',
              ]"
              style="
                margin-top: 3px;
                margin-bottom: 3px;
                height: calc(100% - 6px);
              "
            >
              <app-checkbox
                v-model="item.checked"
                v-if="header.key == 'checked'"
              />
              <div v-else-if="header.key == 'action'">
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
              <div
                v-else-if="header.key == 'status' || header.style == 'status'"
                class="d-flex flex-row align-center"
              >
                <v-img
                  src="@/assets/svg/customers/status_done.svg"
                  width="24"
                  height="24"
                  v-if="`${item[`${header.key}`]}` == 'true'"
                />
                <v-img
                  src="@/assets/svg/customers/status_paused.svg"
                  width="24"
                  height="24"
                  v-else-if="`${item[`${header.key}`]}` == 'false'"
                />
                <v-img
                  src="@/assets/svg/customers/status_alert.svg"
                  width="24"
                  height="24"
                  v-else-if="`${item[`${header.key}`]}` == 'alert'"
                />
                <v-img
                  src="@/assets/svg/customers/status_close.svg"
                  width="24"
                  height="24"
                  v-else-if="`${item[`${header.key}`]}` == 'cancel'"
                />
              </div>
              <div
                v-else-if="header.style == 'checkbox'"
                class="d-flex flex-row align-center"
              >
                <app-checkbox v-model="item[`${header.key}`]" />
              </div>
              <div
                v-else
                :style="header.width ? `width: ${header.width};` : ''"
              >
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
            </div>
          </td>
        </v-hover>
      </tr>
    </tbody>
  </v-table>
</template>
<script lang="ts" setup>
import { ref, watchEffect, reactive, watch } from "vue";
import { TableHeadersArray, TableItemsArray } from "@/types/interfaces";
import AppCheckbox from "./AppCheckbox.vue";

const props = defineProps({
  headers: { type: Array as () => TableHeadersArray, default: [] },
  items: { type: Array as () => TableItemsArray, default: [] },
  checkable: { type: Boolean, default: true },
  onRowClicked: { type: Function, default: () => {} },
  rowColor: { type: String, default: "white" },
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
<style scoped>
/*  .white-bottom {
  border-bottom: 1px solid #0000 !important;
  background-color: white;
} */

table {
  border-collapse: separate;
  margin-top: -10px; /* correct offset on first border spacing if desired */
}
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
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  background-color: var(--app-data-table-row-color, white);
}
.bg-hover {
  background-color: #eef3f8 !important;
}
.bg-row {
  background-color: var(--app-data-table-row-color, white) !important;
}
</style>
