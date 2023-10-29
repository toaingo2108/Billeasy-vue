<template>
  <div class="w-100 h-100 d-flex flex-row min-height-inherit">
    <div class="setting-left-section">
      <div class="my-8">
        <span class="font-28 dark-font app-semibold-font mx-8">Settings</span>
        <div class="d-flex flex-column mt-10 mx-4">
          <div v-for="(item, index) in menus" class="font-14">
            <v-btn
              flat
              variant="text"
              style="height: 44px; min-height: 44px; max-height: 44px"
              class="text-none font-14 app-medium-font d-flex flex-row justify-start"
              :class="index == menuIndex ? 'teal-font' : 'shade-font'"
              @click="onSelectMenu(index)"
              width="250"
            >
              {{ item.title }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 px-0">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const menuIndex = ref(0);
const menus = [
  {
    title: "Company Information",
    route: "company-information",
  },
  {
    title: "Account Settings",
    route: "company-account",
  },
  {
    title: "Subscriptions",
    route: "company-subscriptions",
  },
  {
    title: "Register",
    route: "company-register",
  },
  {
    title: "Custom Fields",
    route: "company-custom-fields",
  },
  {
    title: "Reminder Flows",
    route: "company-reminder-flows",
  },
  {
    title: "Templates",
    route: "company-templates",
  },
  {
    title: "Payment Methods",
    route: "company-payment-methods",
  },
];

const router = useRouter();
const route = useRoute();

const onSelectMenu = (index: number) => {
  menuIndex.value = index;
  router.push({ name: menus[index].route });
};

const checkRoute = () => {
  for (let i = 0; i < menus.length; i++) {
    if (route.name == menus[i].route) {
      menuIndex.value = i;
    }
  }
};

checkRoute();
</script>
<style scoped>
.setting-left-section {
  max-height: 0;
  overflow-y: hidden;
  position: sticky;
  min-height: inherit;
  overflow-x: hidden;
  max-width: 300px;
  min-width: 300px;
  width: 300px;
  top: 64px;
}
.setting-left-section:hover {
  overflow-y: auto;
}
.setting-left-section::-webkit-scrollbar {
  width: 8px;
  transition-duration: 0.5s;
}

/* Track */
.setting-left-section::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px light-grey;
  border-radius: 3px;
}
/* Handle */
.setting-left-section::-webkit-scrollbar-thumb {
  background: rgba(240, 160, 0, 0.3);
  border-radius: 3px;
}

/* Handle on hover */
.setting-left-section::-webkit-scrollbar-thumb:hover {
  background: #f0a000;
}
</style>
