<template>
  <v-dialog v-model="props.dialog" width="720" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Fortnox: Billeasy integration
      </v-card-title>
      <v-card-text class="font-14 shade-font app-regular-font mx-1">
        Automate the bookkeeping by integrating Billeasy with Fortnox
      </v-card-text>
      <v-card-text class="font-13 shade-font app-regular-font mx-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo
        lorem, semper vel augue et, luctus vestibulum sapien. In hac habitasse
        platea dictumst. Quisque nec pretium nibh, et efficitur nisl. Aliquam
        imperdiet vulputate posuere. Proin scelerisque a sapien nec auctor.
        Morbi ac vestibulum mauris. Vivamus urna justo, porta quis interdum
        eget, posuere at nibh. <br /><br /><br />Cras tempus placerat elit, a
        eleifend ipsum facilisis vitae. Donec pretium ultricies magna ac
        pulvinar. Maecenas blandit, urna eu dignissim consectetur, dui quam
        tincidunt magna, sit amet tempor ipsum est et mauris. Mauris ut arcu
        est. Integer elementum rutrum consectetur. Nullam et lacus magna. Fusce
        ut condimentum dui. Proin facilisis finibus viverra. Phasellus sit amet
        ex vel leo mattis lobortis. Duis eleifend enim vel massa cursus dapibus.
        Integer placerat purus a enim lacinia, a malesuada augue congue. Fusce
        non suscipit ex, non tempor mi. Aenean malesuada erat enim, ut consequat
        risus scelerisque at.
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 mx-1">
        <app-checkbox v-model="agree" class="mt-1" />
        <span class="font-14 app-regular-font dark-font ms-3"
          >I understand that clicking activate below adds a cost of 100 :- excl.
          month on my regular bill, and I will be charged for the cost of the
          integration for the remainder of the current payment period.</span
        >
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
            border-color: #d1d1e2;
          "
          class="text-none"
          >Cancel</v-btn
        >
        <v-btn
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          class="text-none"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import AppCheckbox from "@/components/default/AppCheckbox.vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};

const agree = ref(false);
</script>

<style scoped></style>
