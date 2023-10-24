<template>
  <v-dialog v-model="props.dialog" width="848" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="d-flex flex-row mx-4">
        <div class="w-50">
          <div class="app-semibold-font font-20 dark-font mt-6">
            Invoice Information
          </div>
          <div class="d-flex flex-row mt-6">
            <span class="font-14 app-medium-font dark-font" style="width: 172px"
              >OCR number
            </span>
            <span class="font-13 app-regular-font shade-font">1234567890</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Status
            </span>
            <span class="font-13 app-regular-font shade-font">Open</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Invoice number
            </span>
            <span class="font-13 app-regular-font shade-font">12345</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Service (s)
            </span>
            <span class="font-13 app-regular-font shade-font"
              >Reminder, Swish sending</span
            >
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Total amount
            </span>
            <span class="font-13 app-regular-font shade-font">100,000</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Imported On
            </span>
            <span class="font-13 app-regular-font shade-font">2023-06-01</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Invoice Date
            </span>
            <span class="font-13 app-regular-font shade-font">2023-06-01</span>
          </div>
          <div class="d-flex flex-row mt-3">
            <span
              class="font-14 app-medium-font dark-font"
              style="width: 172px"
            >
              Last Event
            </span>
            <span class="font-13 app-regular-font shade-font">2023-06-01</span>
          </div>
          <div class="d-flex flex-row mt-10 mb-6">
            <div>
              <v-select
                placeholder="Import Source"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Activate', 'Deactivate']"
                style="width: 160px; height: 40px"
              />
            </div>
            <v-btn
              variant="plain"
              width="40"
              height="40"
              class="button-40 ms-2"
              rounded="lg"
            >
              <v-img
                width="40"
                height="40"
                src="@/assets/svg/customers/upload_done.svg"
              />
            </v-btn>
          </div>
        </div>
        <div class="w-50 pe-4 pt-8">
          <v-timeline
            side="center"
            align="start"
            truncate-line="both"
            line-color="#D1D1E2"
          >
            <v-timeline-item
              dot-color="#F2F2F7"
              icon="mdi-calendar-month-outline"
              fill-dot
              icon-color="#0D0D1E"
            >
              <template v-slot:icon>
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/svg/invoices/invoice_imported.svg"
                  />
                </div>
              </template>
              <div
                style="
                  width: 152px;
                  border-radius: 12px;
                  background-color: white;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
                  display: flex;
                  flex-direction: column;
                  line-height: 1.5;
                "
              >
                <span class="font-13 dark-font app-medium-font">
                  Invoice Imported
                </span>
                <span class="font-11 blue-600 app-medium-font">
                  2023/05/25
                </span>
              </div>
            </v-timeline-item>
            <v-timeline-item
              dot-color="#F2F2F7"
              fill-dot
              size="small"
              icon="mdi-clock-time-five-outline"
              icon-color="#0D0D1E"
            >
              <template v-slot:icon>
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/svg/invoices/invoice_sending.svg"
                  />
                </div>
              </template>
              <div
                style="
                  width: 152px;
                  border-radius: 12px;
                  background-color: white;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
                  display: flex;
                  flex-direction: column;
                  line-height: 1.5;
                "
              >
                <span class="font-13 dark-font app-medium-font">
                  Invoice Sending
                </span>
                <span class="font-11 blue-600 app-medium-font">
                  2023/06/21
                </span>
              </div>
            </v-timeline-item>

            <v-timeline-item
              dot-color="#F2F2F7"
              fill-dot
              size="small"
              icon="mdi-plus"
              icon-color="#22B762"
            >
              <template v-slot:icon>
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/svg/invoices/email_reminder.svg"
                  />
                </div>
              </template>
              <div
                style="
                  width: 152px;
                  border-radius: 12px;
                  background-color: white;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
                  display: flex;
                  flex-direction: column;
                "
              >
                <span class="font-13 dark-font app-medium-font">
                  Email Reminder
                </span>
              </div>
            </v-timeline-item>

            <v-timeline-item fill-dot dot-color="#F2F2F7">
              <template v-slot:icon>
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/svg/invoices/reminder_fee.svg"
                  />
                </div>
              </template>
              <div
                style="
                  width: 152px;
                  border-radius: 12px;
                  background-color: white;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
                  display: flex;
                  flex-direction: column;
                "
              >
                <span class="font-13 dark-font app-medium-font">
                  Reminder Fee
                </span>
              </div>
            </v-timeline-item>

            <v-timeline-item fill-dot dot-color="#F2F2F7">
              <template v-slot:icon>
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/svg/invoices/invoice_collection.svg"
                  />
                </div>
              </template>
              <div
                style="
                  width: 162px;
                  border-radius: 12px;
                  background-color: white;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
                "
              >
                <span class="font-13 dark-font app-medium-font">
                  Invoice Collection
                </span>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-card-title>
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

const scheduled = ref(false);
</script>

<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px 10px;
}
div :deep(.v-select .v-field__input) {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
