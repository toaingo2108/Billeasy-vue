<template>
  <v-menu activator="parent">
    <v-card width="240" class="rounded-xl pa-3">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="lg"
          @click="item.onClick"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const onLogOut = () => {
  router.push({ name: "landing-index" });
};
const onCompanySetting = () => {
  router.push({ name: "company-setting" });
};

const items = [
  {
    text: "Company Setting",
    onClick: onCompanySetting,
  },
  {
    text: "Log Out",
    onClick: onLogOut,
  },
];
</script>

<style scoped></style>
