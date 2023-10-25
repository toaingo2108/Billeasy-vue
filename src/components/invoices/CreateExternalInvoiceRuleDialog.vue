<template>
  <v-dialog v-model="props.dialog" width="560" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Create External Invoice Rule
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 50%; padding-right: 16px">
          <span class="font-13 app-medium-font dark-font">Rule Type *</span>
          <v-select
            bg-color="white"
            placeholder="Rule Type"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Sending', 'Sent']"
          />
        </div>
        <div style="width: 50%; padding-left: 16px">
          <span class="font-13 app-medium-font dark-font">From Date *</span>
          <v-text-field
            placeholder="From Date"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 50%; padding-right: 16px">
          <span class="font-13 app-medium-font dark-font">Name *</span>
          <v-text-field
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 50%; padding-left: 16px">
          <span class="font-13 app-medium-font dark-font">Send Channel</span>
          <v-select
            bg-color="white"
            placeholder="From Date"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Swish', 'Singapore']"
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 33.33%; padding-right: 8px">
          <span class="font-13 app-medium-font dark-font">Key *</span>
          <v-select
            bg-color="white"
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Amount', 'Amount2']"
          />
        </div>
        <div style="width: 33.33%; padding-left: 8px; padding-right: 8px">
          <span class="font-13 app-medium-font dark-font">Comparer *</span>
          <v-select
            bg-color="white"
            placeholder="From Date"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['More than', 'Equal', 'Less than']"
          />
        </div>
        <div style="width: 33.33%; padding-left: 8px">
          <span class="font-13 app-medium-font dark-font">Value</span>
          <v-text-field
            placeholder="Value"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
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
            padding-top: 5px;
            padding-bottom: 5px;
          "
          class="text-none"
          >Create</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};
</script>

<style scoped></style>
