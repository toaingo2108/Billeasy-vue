<template>
  <div class="bottom-section-68">
    <img class="top-border-93" :src="topBorder" alt="Top Border" /><pagination
      :className="paginationProps.className"
      :iconButton21Props="paginationProps.iconButton21Props"
      :iconButton22Props="paginationProps.iconButton22Props"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "BottomSection222",
  components: {
    Pagination,
  },
  props: ["topBorder", "paginationProps"],
};
</script>

<style>
.bottom-section-68,
.bottom-section-85,
.bottom-section-86 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  position: relative;
  width: 1120px;
}

.top-border-93,
.top-border-94,
.top-border-95 {
  height: 1px;
  width: 1120px;
}
</style>
