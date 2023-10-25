<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <div v-if="integrationSettings.length">
      <v-alert
        class="mb-5 app-regular-font font-14"
        icon="mdi-alert-circle-outline"
        text="Here you can edit your settings for activated integrations."
        variant="outlined"
        rounded="xl"
        color="#0D0D1E"
        width="632"
        style="border-color: #8b8ba9; background-color: white"
      />
      <div class="d-flex flex-row flex-wrap">
        <div
          class="bg-white"
          style="
            width: 240px;
            height: 128px;
            padding: 24px;
            border-radius: 24px;
            margin: 12px;
          "
          v-for="item in integrationSettings"
        >
          <div class="d-flex flex-row align-center">
            <div>
              <v-img
                width="24"
                height="24"
                src="@/assets/sample/img_fortnox.png"
              />
            </div>
            <span class="font-20 app-semibold-font dark-font ms-3">
              {{ item.title }}
            </span>
            <v-spacer />
            <v-icon color="#E91818" size="20">mdi-alert-circle-outline</v-icon>
          </div>
          <v-btn
            variant="outlined"
            prepend-icon="mdi-pencil-outline"
            class="mt-4"
            block
            rounded="lg"
            style="
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 10px;
              padding-bottom: 10px;
              border-color: #d1d1e2;
              color: #0d0d1e;
            "
            @click="onEditSetting"
          >
            Edit Settings
          </v-btn>
        </div>
      </div>
    </div>
    <div v-else class="w-100 d-flex flex-column align-center justify-center">
      <div class="d-flex flex-row align-center justify-center mt-15">
        <div>
          <v-img
            width="136"
            height="136"
            src="@/assets/svg/settings/emoji.svg"
          />
        </div>
        <div class="d-flex flex-column" style="width: 432px; margin-left: 64px">
          <span class="font-28 app-semibold-font dark-font">Empty!</span>
          <span class="font-16 app-regular-font dark-font mt-6"
            >You currently do not have any active integrations. Go to the
            integration page to activate necessary integrations.</span
          >
        </div>
      </div>
      <v-btn
        color="white mt-15"
        @click="onIntegrationPage"
        append-icon="mdi-chevron-right"
        rounded="lg"
        style="
          background: #20c39d !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
          color: white !important;
        "
        class="text-none"
      >
        Integration Page
      </v-btn>
    </div>
    <new-todo-category-dialog
      :dialog="newTodoCategoryDialog"
      @update:dialog="(val) => (newTodoCategoryDialog = val)"
      v-if="newTodoCategoryDialog"
    />
    <new-todo-status-dialog
      :dialog="newTodoStatusDialog"
      @update:dialog="(val) => (newTodoStatusDialog = val)"
      v-if="newTodoStatusDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NewTodoCategoryDialog from "@/components/todos/NewTodoCategoryDialog.vue";
import NewTodoStatusDialog from "@/components/todos/NewTodoStatusDialog.vue";

import { useRouter } from "vue-router";
import { reactive } from "vue";
import { SettingItem } from "@/types/interfaces";

const router = useRouter();

const integrationSettings = reactive([] as SettingItem[]);
const onIntegrationPage = () => {
  integrationSettings.push({ title: "Fortnox" });
  integrationSettings.push({ title: "Fortnox" });
  integrationSettings.push({ title: "Fortnox" });
};

const onEditSetting = () => {
  router.push({ name: "fortnox-settings" });
};
</script>
<style scoped>
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
