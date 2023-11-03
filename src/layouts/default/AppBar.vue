<template>
  <v-app-bar flat color="white" class="w-100" style="left: 0">
    <v-spacer />
    <v-divider vertical class="bar-divider" />
    <v-btn icon class="mx-2">
      <v-icon color="#0D0D1E">mdi-help-circle-outline</v-icon>
      <help-menu />
    </v-btn>
    <v-divider vertical class="bar-divider" />
    <v-btn icon class="mx-2">
      <v-icon color="#0D0D1E">mdi-bell-outline</v-icon>
      <notification-menu />
    </v-btn>
    <v-divider vertical class="bar-divider" />
    <v-btn icon>
      <v-icon color="#8B8BA9" size="16">mdi-chevron-down</v-icon>
    </v-btn>
    <div class="app-semibold-font font-14">English</div>
    <div class="ms-3 me-5">
      <v-img src="@/assets/sample/flag.svg" width="18" height="14" />
    </div>
    <v-divider vertical class="bar-divider" />
    <v-btn icon>
      <v-icon color="#8B8BA9" size="16">mdi-chevron-down</v-icon>
      <profile-menu />
    </v-btn>
    <div class="app-semibold-font font-14">Jane</div>
    <v-avatar size="32" class="ms-3 me-5">
      <v-img src="@/assets/sample/profile.png" />
    </v-avatar>
  </v-app-bar>
</template>

<script lang="ts" setup>
import NotificationMenu from "@/components/appbar/NotificationMenu.vue";
import HelpMenu from "@/components/appbar/HelpMenu.vue";
import ProfileMenu from "@/components/appbar/ProfileMenu.vue";
</script>
<style scoped>
.bar-divider {
  max-height: calc(100% - 32px);
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
