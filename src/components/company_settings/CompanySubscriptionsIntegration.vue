<template>
  <div>
    <div class="ma-8">
      <span class="font-14 blue-600 app-medium-font"
        >Current payment method:
      </span>
      <span class="font-14 dark-font app-semibold-font">Invoice</span>
      <span class="font-14 blue-600 app-medium-font ms-6">Update Method</span>
    </div>
    <div class="d-flex flex-row justify-between">
      <div>
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 0
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 0
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="s-lg"
          @click="onSelectOption(0)"
          >All</v-btn
        >
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 1
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 1
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="0"
          @click="onSelectOption(1)"
          >Activated</v-btn
        >
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 2
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 2
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="e-lg"
          @click="onSelectOption(2)"
          >Not Activated</v-btn
        >
      </div>
    </div>
    <div class="mt-10">
      <v-row>
        <v-col cols="12" md="4" v-for="item in items">
          <v-card elevation="0" color="#F7F7FA" rounded="xl">
            <v-card-text class="ms-1">
              <span
                class="font-12 white-font app-regular-font rounded-pill px-2 py-1"
                :class="
                  item.status == 'Not Activated'
                    ? 'bg-pumpkin-orange '
                    : item.status == 'Activated'
                    ? 'bg-forest'
                    : 'bg-cerulean'
                "
              >
                {{ item.status }}
              </span>
            </v-card-text>
            <v-card-text class="d-flex flex-row mx-2 pt-2 pb-0">
              <div class="me-2">
                <v-img width="24" height="24" :src="item.image" />
              </div>
              <span class="font-20 dark-font app-semibold-font">
                {{ item.title }}
              </span>
            </v-card-text>
            <v-card-text class="font-12 shade-font app-regular-font mx-2 pb-0">
              {{ item.description }}
            </v-card-text>
            <v-card-text class="font-12 dark-font app-regular-font mx-2">
              {{ item.term }}
            </v-card-text>
            <v-card-actions
              class="d-flex flex-row justify-between pt-1 pb-6 mx-4"
            >
              <v-btn
                variant="outlined"
                class="font-14 dark-font app-medium-font text-none"
                color="#0D0D1E"
                style="border-color: #d1d1e2"
                rounded="lg"
                @click="onClickedButton(item.status)"
              >
                {{
                  item.status == "Not Activated"
                    ? "Read More"
                    : item.status == "Activated"
                    ? "Inactivate"
                    : "Activate"
                }}
              </v-btn>
              <v-btn
                variant="outlined"
                class="font-14 dark-font app-medium-font text-none"
                style="border-color: #d1d1e2; color: #e91818 !important"
                rounded="lg"
                v-if="item.status == 'Activated'"
              >
                Remove
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <fortnox-billeasy-integration-dialog
      :dialog="integrationDialog"
      @update:dialog="(val) => (integrationDialog = val)"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import fortnoxImg from "@/assets/sample/img_fortnox.png";
import FortnoxBilleasyIntegrationDialog from "./FortnoxBilleasyIntegrationDialog.vue";

const option = ref(0);

const items = [
  {
    status: "Not Activated",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
  {
    status: "Activated",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
  {
    status: "Paused",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
  {
    status: "Not Activated",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
  {
    status: "Activated",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
  {
    status: "Not Activated",
    title: "Fortnox",
    image: fortnoxImg,
    description:
      "Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and products between the programs..",
    term: "100 :- excl. VAT / month",
  },
];

const integrationDialog = ref(false);
const onSelectOption = (index: number) => {
  option.value = index;
};

const onClickedButton = (status: string) => {
  if (status == "Activated") {
    onInactivate();
  } else {
    onActivate();
  }
};

const onActivate = () => {
  integrationDialog.value = true;
};
const onInactivate = () => {};
</script>
