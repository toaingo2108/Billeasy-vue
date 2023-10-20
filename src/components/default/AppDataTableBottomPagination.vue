<template>
  <v-pagination
    :length="props.length"
    total-visible="5"
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
</template>
<script lang="ts" setup>
const props = defineProps({
  length: { type: Number, default: 0 },
});
</script>
<style scoped>
.v-pagination :deep(.v-pagination__item--is-active button) {
  background-color: #0d0d1e !important;
}
</style>
