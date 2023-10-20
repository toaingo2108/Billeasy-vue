<template>
  <div style="height: 50%" class="pb-3">
    <v-card class="h-100 d-flex flex-column rounded-xl">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/open_invoices.svg"
          />
        </div>
        Open invoices
        <v-icon color="#8B8BA9" size="14" class="ms-3"
          >mdi-information-outline</v-icon
        >
      </v-card-title>
      <v-card-text class="ms-4 mb-2">
        <table class="w-100 h-100 py-5 styled-table">
          <tr>
            <th></th>
            <th>
              <span class="font-12 app-semibold-font dark-font"
                >Amount in SEK</span
              >
            </th>
            <th>
              <span class="font-12 app-semibold-font dark-font"
                ># Invoices</span
              >
            </th>
          </tr>
          <tr>
            <td class="remove-border-bottom font-14 app-regular-font dark-font">
              Not late
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              1,000,000
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              10
            </td>
          </tr>
          <tr>
            <td class="remove-border-bottom font-14 app-regular-font dark-font">
              Late up to 15 days
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              1,000,000
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              10
            </td>
          </tr>
          <tr>
            <td class="remove-border-bottom font-14 app-regular-font dark-font">
              Late between 15 and 30 days
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              1,000,000
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              10
            </td>
          </tr>
          <tr>
            <td class="font-14 app-regular-font dark-font">
              Late more than 30 days
            </td>
            <td class="font-14 app-medium-font dark-font">1,000,000</td>
            <td class="font-14 app-medium-font dark-font">10</td>
          </tr>
          <tr class="total-row">
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              <strong>Total</strong>
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              <strong>4,000,000</strong>
            </td>
            <td class="remove-border-bottom font-14 app-medium-font dark-font">
              <strong>40</strong>
            </td>
          </tr>
        </table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.styled-table {
  border-collapse: collapse;
}
.styled-table th,
.styled-table td {
  padding: 5px 15px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}
.styled-table tr:last-child td {
  border-bottom: none;
}
.total-row {
  font-weight: bold;
}
</style>
