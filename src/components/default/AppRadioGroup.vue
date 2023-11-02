<template>
  <div class="d-flex" :class="`flex-${props.direction}`">
    <div v-for="(item, index) in items" style="height: 36px" class="ps-3">
      <app-radio
        v-model="toggleArray[index]"
        class="me-2"
        @click="selectedRadio(index)"
      />
      <span class="font-14 dark-font app-regular-font">{{ item }} </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from "vue";
import AppRadio from "./AppRadio.vue";
const props = defineProps({
  modelValue: Number,
  items: { type: Array, default: [] },
  direction: { type: String, default: "column" },
});

const emit = defineEmits(["update:modelValue"]);

const toggleArray = reactive(
  props.items.map((item, index) => (index == props.modelValue ? true : false))
);
const selectedRadio = (index: number) => {
  for (let i = 0; i < toggleArray.length; i++) {
    if (i == index) {
      toggleArray[i] = true;
    } else {
      toggleArray[i] = false;
    }
  }
  emit("update:modelValue", index);
};
</script>
<style scoped></style>
