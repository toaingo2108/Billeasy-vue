<template>
  <v-text-field
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    rounded="lg"
    :style="`width: ${props.width}; background-color: white; border-radius: 8px`"
    hide-details
  />
</template>
<script lang="ts" setup>
const props = defineProps({
  width: { type: String, default: "288px" },
});
</script>
<style scoped>
.v-text-field :deep(input.v-field__input) {
  min-height: 40px;
  padding: 5px;
}

.v-text-field :deep(.v-field__outline .v-field__outline__start) {
  border-color: #d1d1e2;
  --v-field-border-opacity: 0.8;
  --v-field-border-width: 1.5px;
}
.v-text-field :deep(.v-field__outline .v-field__outline__end) {
  border-color: #d1d1e2;
  --v-field-border-opacity: 0.8;
  --v-field-border-width: 1.5px;
}
</style>
