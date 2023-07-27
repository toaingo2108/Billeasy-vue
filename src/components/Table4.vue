<template>
  <div :class="[`table-48`, className || ``]">
    <div class="row-invoices-scheduled-events">
      <cell692 />
      <div class="cell-618">
        <div class="blue-t-shirt-xs-443 poppins-semi-bold-ebony-13px">
          <span class="span-680 poppins-semi-bold-ebony-13px">Invoice nr.</span>
        </div>
        <img
          class="sort-153"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-619">
        <div class="blue-t-shirt-xs-444 poppins-semi-bold-ebony-13px">
          <span class="span-680 poppins-semi-bold-ebony-13px">Event</span>
        </div>
        <img
          class="sort-153"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-620">
        <div class="blue-t-shirt-xs-445 poppins-semi-bold-ebony-13px">
          <span class="span-680 poppins-semi-bold-ebony-13px">Event Date</span>
        </div>
        <img
          class="sort-153"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-621">
        <div class="blue-t-shirt-xs-446 poppins-semi-bold-ebony-13px">
          <span class="span-680 poppins-semi-bold-ebony-13px">Completed</span>
        </div>
        <img
          class="sort-153"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
    </div>
    <div class="table-row-46">
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents1Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents1Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents1Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents1Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents2Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents2Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents2Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents2Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents3Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents3Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents3Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents3Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents4Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents4Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents4Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents4Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents5Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents5Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents5Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents5Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents6Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents6Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents6Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents6Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents7Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents7Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents7Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents7Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents8Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents8Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents8Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents8Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents9Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents9Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents9Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents9Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents10Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents10Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents10Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents10Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents11Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents11Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents11Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents11Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents12Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents12Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents12Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents12Props.statusProps222"
      />
      <row-invoices-scheduled-events
        :statusProps="rowInvoicesScheduledEvents13Props.statusProps"
        :statusProps2="rowInvoicesScheduledEvents13Props.statusProps2"
        :statusProps22="rowInvoicesScheduledEvents13Props.statusProps22"
        :statusProps222="rowInvoicesScheduledEvents13Props.statusProps222"
      />
    </div>
  </div>
</template>

<script>
import Cell692 from "./Cell692";
import RowInvoicesScheduledEvents from "./RowInvoicesScheduledEvents";
export default {
  name: "Table4",
  components: {
    Cell692,
    RowInvoicesScheduledEvents,
  },
  props: [
    "className",
    "rowInvoicesScheduledEvents1Props",
    "rowInvoicesScheduledEvents2Props",
    "rowInvoicesScheduledEvents3Props",
    "rowInvoicesScheduledEvents4Props",
    "rowInvoicesScheduledEvents5Props",
    "rowInvoicesScheduledEvents6Props",
    "rowInvoicesScheduledEvents7Props",
    "rowInvoicesScheduledEvents8Props",
    "rowInvoicesScheduledEvents9Props",
    "rowInvoicesScheduledEvents10Props",
    "rowInvoicesScheduledEvents11Props",
    "rowInvoicesScheduledEvents12Props",
    "rowInvoicesScheduledEvents13Props",
  ],
};
</script>

<style>
.table-48 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 543px;
  left: 256px;
  position: absolute;
  top: 328px;
  width: 1152px;
}

.row-invoices-scheduled-events {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-618 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 192px;
}

.blue-t-shirt-xs-443 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 69px;
}

.sort-153 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-619 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 384px;
}

.blue-t-shirt-xs-444 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 37px;
}

.cell-620 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 336px;
}

.blue-t-shirt-xs-445 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 71px;
}

.cell-621 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 128px;
}

.blue-t-shirt-xs-446 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 75px;
}

.table-row-46 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 489px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.table-48.table-49 {
  left: unset;
  margin-top: 40px;
  position: unset;
  top: unset;
}
</style>
