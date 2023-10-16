<template>
  <div style="height: 50%" class="pb-3">
    <v-card class="h-100 d-flex flex-column">
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
            <th>Amount in SEK</th>
            <th># Invoices</th>
          </tr>
          <tr>
            <td>Not late</td>
            <td>1,000,000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Late up to 15 days</td>
            <td>1,000,000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Late between 15 and 30 days</td>
            <td>1,000,000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Late more than 30 days</td>
            <td>1,000,000</td>
            <td>10</td>
          </tr>
          <tr class="total-row">
            <td><strong>Total</strong></td>
            <td><strong>4,000,000</strong></td>
            <td><strong>40</strong></td>
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
