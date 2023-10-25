<template>
  <v-app>
    <div class="d-flex flex-row h-100 pa-0 min-height-inherit">
      <default-view class="w-100 px-0" />
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
</script>
<style scoped>
.v-main {
  flex: auto;
}
</style>
