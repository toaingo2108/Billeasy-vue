<template>
  <div
    style="height: 96px; bottom: 0; width: calc(100% - 300px)"
    class="bg-gray position-fixed d-flex flex-row align-center"
  >
    <div>
      <v-select
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
      class="img-button ms-2"
      rounded="lg"
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

const type = ref("Activate");

const props = defineProps({
  length: { type: Number, default: 0 },
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
