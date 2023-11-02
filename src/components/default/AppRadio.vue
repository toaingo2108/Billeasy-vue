<template>
  <v-btn
    variant="plain"
    width="18"
    height="18"
    rounded="circle"
    style="
      width: 18px !important;
      height: 18px !important;
      min-height: 18px !important;
      min-width: 18px !important;
      max-height: 18px !important;
      max-width: 18px !important;
      padding: 0;
    "
    @click.stop="toggleCheckbox"
  >
    <v-img
      width="18"
      height="18"
      :src="props.modelValue ? trueImage : falseImage"
    />
  </v-btn>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import trueImage from "@/assets/svg/radio/true.svg";
import falseImage from "@/assets/svg/radio/false.svg";
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const toggleCheckbox = () => {
  const newValue = !props.modelValue;
  emit("update:modelValue", newValue);
};
</script>
<style scoped></style>
