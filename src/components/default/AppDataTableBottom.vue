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
    <v-pagination
      :length="props.length"
      total-visible="5"
      class="me-10"
      active-color="white"
      color="#B2B2CB"
      rounded="lg"
    >
      <template v-slot:prev="{ onClick, disabled }">
        <div
          class="d-flex flex-row align-center justify-center"
          style="width: 40px; height: 48px"
        >
          <v-btn
            flat
            rounded="lg"
            style="
              width: 24px;
              height: 24px;
              max-width: 24px;
              min-width: 24px;
              padding: 0;
              margin: 0;
            "
            :disabled="disabled"
          >
            <v-img
              width="24"
              height="24"
              src="@/assets/svg/datatable/left.svg"
              @click="onClick"
            />
          </v-btn>
        </div>
      </template>
      <template v-slot:next="{ onClick, disabled }">
        <div
          class="d-flex flex-row align-center justify-center"
          style="width: 40px; height: 48px"
        >
          <v-btn
            flat
            rounded="lg"
            style="
              width: 24px;
              height: 24px;
              max-width: 24px;
              min-width: 24px;
              padding: 0;
              margin: 0;
            "
            :disabled="disabled"
          >
            <v-img
              width="24"
              height="24"
              src="@/assets/svg/datatable/right.svg"
              @click="onClick"
            />
          </v-btn>
        </div>
      </template>
    </v-pagination>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";

const type = ref("Activate");

const props = defineProps({
  length: { type: Number, default: 0 },
});
</script>
<style scoped>
.v-field__input {
  padding-top: 5px;
  padding-bottom: 5px;
  height: 40px;
  max-height: 40px;
  min-height: 40px;
}

.v-pagination__item--is-active button {
  background-color: #0d0d1e !important;
}
</style>
