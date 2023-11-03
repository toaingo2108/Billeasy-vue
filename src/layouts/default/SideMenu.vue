<template>
  <div class="left-section">
    <v-navigation-drawer
      permanent
      :width="mdAndUp ? 300 : 48"
      color="#0D0D1E"
      dark
      height="auto"
    >
      <v-list v-model="selected">
        <v-list-subheader class="d-flex justify-center my-5 mb-10">
          <v-img height="104" width="120" src="@/assets/logo.png" />
        </v-list-subheader>
        <v-list-item
          v-for="([icon, text, name], i) in menuItems"
          :key="i"
          link
          @click="onOpenMenu(name, i)"
          :ref="`menuItem-${i}`"
          :active="i == selected"
          class="pa-3"
        >
          <template v-slot:prepend>
            <v-img
              :src="icon"
              width="20"
              height="20"
              :class="mdAndUp ? 'ml-5' : ''"
            />
          </template>
          <v-list-item-title
            v-text="text"
            class="ml-3"
            v-if="mdAndUp"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const router = useRouter();
const route = useRoute();
const { mdAndUp } = useDisplay();
// const store = useStore();

import homeIcon from "@/assets/svg/sideMenu/home.svg";
import productsIcon from "@/assets/svg/sideMenu/products.svg";
import customersIcon from "@/assets/svg/sideMenu/customers.svg";
import invoicesIcon from "@/assets/svg/sideMenu/invoices.svg";
import subscriptionsIcon from "@/assets/svg/sideMenu/subscriptions.svg";
import todosIcon from "@/assets/svg/sideMenu/todos.svg";
import reportsIcon from "@/assets/svg/sideMenu/reports.svg";
import settingsIcon from "@/assets/svg/sideMenu/settings.svg";
import eventLogIcon from "@/assets/svg/sideMenu/event_log.svg";
import usersIcon from "@/assets/svg/sideMenu/users.svg";

const menuItems = [
  [homeIcon, "Home", "home"],
  [productsIcon, "Products", "products"],
  [customersIcon, "Customers", "customers"],
  [invoicesIcon, "Invoices", "invoices"],
  [subscriptionsIcon, "Subscriptions", "subscriptions"],
  [todosIcon, "To-do's", "todos"],
  [reportsIcon, "Reports", "reports"],
  [settingsIcon, "Settings", "settings"],
  [eventLogIcon, "Event log", "event-log"],
  [usersIcon, "Users", "users"],
];
const selected = ref(-1);

function checkRoute() {
  for (let i = 0; i < menuItems.length; i++) {
    if (route.name === menuItems[i][2]) {
      selected.value = i;
      break;
    }
  }
}

function onOpenMenu(name: string, index: number) {
  if (name == "logout") {
    // store.dispatch("auth/logout");
    // router.push({ name: "login" });
  } else if (route.name != name) {
    router.push({ name });
  }
  selected.value = index;
}

watch(
  () => route.name,
  () => {
    checkRoute();
  }
);

checkRoute();
</script>
<style scoped>
@media (max-width: 960px) {
  .left-section {
    max-height: 0;
    overflow-y: hidden;
    position: sticky;
    min-height: inherit;
    overflow-x: hidden;
    max-width: 48px;
    min-width: 48px;
    width: 48px;
    top: 56px;
    background: #084468;
    z-index: 1005;
  }
}
@media (min-width: 960px) {
  .left-section {
    max-height: 0;
    overflow-y: hidden;
    position: sticky;
    min-height: inherit;
    overflow-x: hidden;
    max-width: 300px;
    min-width: 300px;
    width: 300px;
    top: 56px;
    background: #084468;
    z-index: 1005;
  }
}

.left-section:hover {
  overflow-y: auto;
}
.left-section::-webkit-scrollbar {
  width: 8px;
  transition-duration: 0.5s;
}

/* Track */
.left-section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px light-grey;
  border-radius: 3px;
}
/* Handle */
.left-section::-webkit-scrollbar-thumb {
  background: rgba(240, 160, 0, 0.3);
  border-radius: 3px;
}

/* Handle on hover */
.left-section::-webkit-scrollbar-thumb:hover {
  background: #f0a000;
}
</style>
