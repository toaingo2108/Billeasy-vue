<template>
  <v-app class="d-flex flex-row h-100 pa-0 min-height-inherit">
    <side-menu class="hidden-sm-and-down" />
    <default-view
      class="w-100 min-width-200 mx-0 d-flex flex-column align-center"
    />
  </v-app>
</template>

<script lang="ts" setup>
import SideMenu from "./SideMenu.vue";
import DefaultView from "./View.vue";
</script>
