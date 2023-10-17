<template>
  <v-menu activator="parent" :close-on-content-click="false">
    <v-card width="640" class="rounded-xl pa-3">
      <v-card-title
        class="font-20 app-semibold-font dark-font d-flex flex-row align-center"
      >
        Notifications
        <v-badge color="#F58D13" content="20 New" inline class="ms-3" />
        <v-spacer />
        <div style="width: 144px">
          <v-text-field
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-title>
      <v-card-text>
        <v-tabs v-model="tab" color="deep-purple-accent-4">
          <v-tab :value="1">All</v-tab>
          <v-tab :value="2">Unread</v-tab>
          <v-tab :value="3">Read</v-tab>
          <v-tab :value="4">Archived</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item v-for="n in 4" :key="n" :value="n">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="d-flex flex-column mt-3"
            >
              <div class="d-flex flex-row">
                <div>
                  <v-img
                    src="@/assets/svg/appbar/message.svg"
                    width="28"
                    height="28"
                  />
                </div>
                <div class="d-flex flex-column ms-3">
                  <span class="app-medium-font font-14 dark-font">{{
                    message.title
                  }}</span>
                  <span class="app-regular-font font-13 shade-font mt-2">{{
                    message.message
                  }}</span>
                </div>
                <div>
                  <v-btn icon rounded flat><v-icon>mdi-close</v-icon></v-btn>
                </div>
              </div>
              <v-divider class="mt-3" />
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const tab = ref();

const messages = [
  {
    title: "Message Subject",
    message:
      "This is a text message. Lorem ipsum dolor sit amet consectetur. Risus sed pulvinar dolor odio id posuere odio mus. Nibh sed orci congue amet.",
  },
  {
    title: "Message Subject",
    message:
      "This is a text message. Lorem ipsum dolor sit amet consectetur. Risus sed pulvinar dolor odio id posuere odio mus. Nibh sed orci congue amet.",
  },
  {
    title: "Message Subject",
    message:
      "This is a text message. Lorem ipsum dolor sit amet consectetur. Risus sed pulvinar dolor odio id posuere odio mus. Nibh sed orci congue amet.",
  },
];
</script>

<style scoped>
div >>> .v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px 10px;
}
</style>
