<template>
  <v-app>
    <div class="d-flex flex-row h-100 pa-0 min-height-inherit">
      <side-menu />
      <div
        class="w-100 min-width-200 mx-0 d-flex flex-column align-center pa-0 min-height-inherit"
      >
        <app-bar />
        <default-view
          class="w-100 px-0"
          style="
            padding-top: 64px;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0;
            min-height: calc(100vh - 64px);
          "
        />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import SideMenu from "./SideMenu.vue";
import AppBar from "./AppBar.vue";
import DefaultView from "./View.vue";
</script>
<style scoped>
.v-main {
  flex: auto;
}
</style>
