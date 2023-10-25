<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div style="width: 288px">
          <search-field />
        </div>
        <div class="ml-2">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="button-40"
            rounded="lg"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/products/filter.svg"
            />
          </v-btn>
        </div>
      </div>
      <div class="d-flex align-center">
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="onInviteNewUser"
        >
          Invite New User
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        style="margin-bottom: 80px"
        :on-row-clicked="onSelectedUser"
        :checkable="false"
      >
        <template v-slot:action>
          <item-menu />
        </template>
      </app-data-table>
    </div>
    <invite-new-user-dialog
      :dialog="inviteNewUserDialog"
      @update:dialog="(val) => (inviteNewUserDialog = val)"
      v-if="inviteNewUserDialog"
    />
    <edit-user-dialog
      :dialog="editUserDialog"
      @update:dialog="(val) => (editUserDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ItemMenu from "./UserItemMenu.vue";
import { useRouter } from "vue-router";
import AppDataTable from "@/components/default/AppDataTable.vue";
import SearchField from "../default/SearchField.vue";
import InviteNewUserDialog from "@/components/users/InviteNewUserDialog.vue";
import EditUserDialog from "./EditUserDialog.vue";

const headers = [
  { title: "First Name", key: "first_name", style: "bold" },
  { title: "Last Name", key: "last_name", style: "bold" },
  { title: "Email", key: "email" },
  { title: "Role", key: "role" },
  { title: "Last Login", key: "last_login" },
  { title: "Is Verified", key: "is_verified", style: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe123@email.com",
    role: "Owner",
    last_login: "2023-07-01, 21:32",
    is_verified: true,
  },
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe123@email.com",
    role: "Owner",
    last_login: "2023-07-01, 21:32",
    is_verified: true,
  },
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe123@email.com",
    role: "Owner",
    last_login: "2023-07-01, 21:32",
    is_verified: true,
  },
];

const importDialog = ref(false);
const editUserDialog = ref(false);
const inviteNewUserDialog = ref(false);
const router = useRouter();
const onInviteNewUser = function () {
  inviteNewUserDialog.value = true;
};

const onImportData = function () {
  importDialog.value = true;
};

onImportData;
const onSelectedUser = function (item: any, index: number) {
  editUserDialog.value = true;
};
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px;
}
</style>
