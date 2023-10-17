<template>
  <v-menu activator="parent" :close-on-content-click="false">
    <v-card width="200" class="rounded-xl pa-3">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="lg"
        >
          <template v-slot:prepend>
            <v-img :src="item.icon" width="20" height="20" class="me-3" />
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
          <template v-slot:append>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
          <v-menu activator="parent" open-on-hover location="end">
            <v-card width="224" class="rounded-xl pa-3">
              <v-list>
                <v-list-item
                  v-for="(item, i) in subMenus"
                  :key="i"
                  :value="item"
                  color="primary"
                  rounded="lg"
                >
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import guidesIcon from "@/assets/svg/appbar/guides.svg";
import faqIcon from "@/assets/svg/appbar/faq.svg";

const items = [
  { text: "Guides", icon: guidesIcon },
  { text: "Faq", icon: faqIcon },
];
const subMenus = [
  { text: "Get started" },
  { text: "Configuration" },
  { text: "Send invoice" },
  { text: "Upgrade my plan" },
];
</script>

<style scoped></style>
