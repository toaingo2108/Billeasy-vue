<template>
  <div :class="[`pagination`, className || ``]">
    <icon-button22 :src="iconButton21Props.src" />
    <div class="page-numbers-3 poppins-medium-cadet-blue-13px">
      <div class="page-number-3">
        <div class="number-3 poppins-medium-white-13px"><span class="span-178 poppins-medium-white-13px">1</span></div>
      </div>
      <div class="x1"><span class="span-178 poppins-medium-cadet-blue-13px">2</span></div>
      <div class="x1-1"><span class="span-178 poppins-medium-cadet-blue-13px">3</span></div>
      <div class="x1-2"><span class="span-178 poppins-medium-cadet-blue-13px">4</span></div>
      <div class="text-1-3"><span class="span-178 poppins-medium-cadet-blue-13px">...</span></div>
      <div class="x1-3"><span class="span-178 poppins-medium-cadet-blue-13px">15</span></div>
    </div>
    <icon-button22 :src="iconButton22Props.src" />
  </div>
</template>

<script>
import IconButton22 from "./IconButton22";
export default {
  name: "Pagination",
  components: {
    IconButton22,
  },
  props: ["className", "iconButton21Props", "iconButton22Props"],
};
</script>

<style>
.pagination {
  align-items: center;
  border-radius: 16px;
  display: flex;
  gap: 24px;
  min-width: 336px;
  position: relative;
}

.page-numbers-3 {
  align-items: center;
  display: flex;
  min-width: 240px;
}

.page-number-3 {
  align-items: flex-start;
  background-color: var(--ebony);
  border-radius: 12px;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 9px 17.5px;
}

.number-3 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.x1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 16px;
  min-height: 20px;
  min-width: 8px;
}

.x1-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 32px;
  min-height: 20px;
  min-width: 8px;
}

.x1-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 32px;
  min-height: 20px;
  min-width: 9px;
}

.text-1-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 30px;
  min-height: 20px;
  min-width: 10px;
}

.x1-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 28px;
  min-height: 20px;
  min-width: 13px;
}

.pagination.pagination-6,
.pagination.pagination-13,
.pagination.pagination-14,
.pagination.pagination-15,
.pagination.pagination-22,
.pagination.pagination-33,
.pagination.pagination-34,
.pagination.pagination-35,
.pagination.pagination-37,
.pagination.pagination-44 {
  margin-right: 32px;
}
</style>
