<template>
  <v-dialog v-model="props.dialog" width="752" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New Reminder Flow
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 20%">
          <span class="font-13 app-medium-font dark-font">Name</span>
          <v-text-field
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 20%; padding-left: 10px">
          <span class="font-13 app-medium-font dark-font">Code</span>
          <v-text-field
            placeholder="Code"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 20%; padding-left: 10px">
          <span class="font-13 app-medium-font dark-font">Interest rate</span>
          <v-text-field
            placeholder="%"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 20%; padding-left: 10px">
          <span class="font-13 app-medium-font dark-font">Reminder Fee</span>
          <v-text-field
            placeholder="Reminder Fee"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 20%; padding-left: 10px">
          <span class="font-13 app-medium-font dark-font">Inkasso fee</span>
          <v-text-field
            placeholder="Inkasso fee"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Description</span>
        <v-text-field
          placeholder="description"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 align-center">
        <span class="font-14 app-semibold-font dark-font" style="width: 120px">
          Event Flow
        </span>
        <v-divider />
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 align-center">
        <v-timeline
          side="end"
          align="start"
          truncate-line="both"
          line-color="#D1D1E2"
        >
          <v-timeline-item
            dot-color="#F2F2F7"
            size="small"
            icon="mdi-calendar-month-outline"
            fill-dot
            icon-color="#0D0D1E"
          >
            <div style="width: 606px">
              <v-select
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Day', 'Month']"
              />
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="#F2F2F7"
            fill-dot
            size="small"
            icon="mdi-clock-time-five-outline"
            icon-color="#0D0D1E"
          >
            <div class="d-flex flex-row align-center">
              <span class="font-14 dark-font app-regular-font me-2">Wait</span>
              <v-text-field
                placeholder="Day"
                variant="outlined"
                rounded="lg"
                hide-details
              />
              <span class="font-14 dark-font app-regular-font ms-4"
                >Day(s)</span
              >
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="#F2F2F7"
            fill-dot
            size="small"
            icon="mdi-plus"
            icon-color="#22B762"
          >
            <div class="d-flex">
              <v-btn
                color="white"
                @click="closeDialog"
                rounded="lg"
                style="
                  background: #20c39d !important;
                  padding-left: 20px;
                  padding-right: 20px;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  color: white !important;
                "
                class="text-none"
                >Add item</v-btn
              >
            </div>
          </v-timeline-item>

          <v-timeline-item fill-dot dot-color="#F2F2F7">
            <template v-slot:icon>
              <div>
                <v-img
                  width="24"
                  height="24"
                  src="@/assets/svg/customers/calendar.svg"
                />
              </div>
            </template>
            <v-card style="border-radius: 18px">
              <v-card-title class="app-semibold-font font-12 shade-font">
                DAY 1
              </v-card-title>
              <v-card-text>
                <span class="font-12 app-medium-font dark-font">
                  Final Measure
                </span>
                <div style="width: 580px">
                  <v-select
                    variant="outlined"
                    rounded="lg"
                    hide-details
                    :items="['Day', 'Month']"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
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
            padding-top: 10px;
            padding-bottom: 10px;
          "
          class="text-none"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};
</script>

<style scoped></style>
