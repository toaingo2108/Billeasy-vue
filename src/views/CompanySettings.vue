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
              {{ item }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 px-0">
      <company-information v-if="menuIndex == 0" />
      <account-settings v-else-if="menuIndex == 1" />
      <company-subscriptions v-else-if="menuIndex == 2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CompanyInformation from "@/components/company_settings/CompanyInformation.vue";
import AccountSettings from "@/components/company_settings/AccountSettings.vue";
import CompanySubscriptions from "@/components/company_settings/CompanySubscriptions.vue";
const menuIndex = ref(0);
const menus = [
  "Company Information",
  "Account Settings",
  "Subscriptions",
  "Register",
  "Custom Fields",
  "Reminder Flows",
  "Templates",
  "Payment Methods",
];

const onSelectMenu = (index: number) => {
  menuIndex.value = index;
};
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
