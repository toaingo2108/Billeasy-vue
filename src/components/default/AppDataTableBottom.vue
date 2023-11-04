<template>
  <div
    style="height: 96px; bottom: 0; z-index: 1"
    :style="
      mdAndUp
        ? 'calc(100% - 300px); left: 300px'
        : 'calc(100% - 48px); left: 48px'
    "
    class="bg-gray position-fixed d-flex flex-row align-center"
  >
    <div class="ms-10" v-if="!props.hideButton">
      <v-select
        bg-color="white"
        placeholder="Import Source"
        variant="outlined"
        rounded="lg"
        hide-details
        :items="['Activate', 'Deactivate']"
        style="width: 160px; height: 40px"
        v-model="type"
      />
    </div>
    <v-btn
      variant="plain"
      width="40"
      height="40"
      class="button-40 ms-2"
      rounded="lg"
      v-if="!props.hideButton"
    >
      <v-img
        width="40"
        height="40"
        src="@/assets/svg/customers/upload_done.svg"
      />
    </v-btn>
    <v-spacer />
    <app-data-table-bottom-pagination :length="props.length" class="me-10" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import AppDataTableBottomPagination from "./AppDataTableBottomPagination.vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const type = ref("Activate");

const props = defineProps({
  length: { type: Number, default: 0 },
  hideButton: { type: Boolean, default: false },
});
</script>
<style scoped>
div :deep(.v-field__input) {
  padding-top: 5px;
  padding-bottom: 5px;
  height: 40px;
  max-height: 40px;
  min-height: 40px;
}
</style>
