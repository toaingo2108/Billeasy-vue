<template>
  <div :class="[`bottom-section-39`, className || ``]">
    <img
      class="top-border-44"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-11@2x.png"
      alt="Top Border"
    />
    <pagination
      :className="paginationProps.className"
      :iconButton21Props="paginationProps.iconButton21Props"
      :iconButton22Props="paginationProps.iconButton22Props"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "BottomSection323",
  components: {
    Pagination,
  },
  props: ["className", "paginationProps"],
};
</script>

<style>
.bottom-section-39 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  left: 0;
  position: absolute;
  top: 615px;
  width: 1216px;
}

.top-border-44 {
  height: 1px;
  width: 1216px;
}

.bottom-section-39.bottom-section-40,
.bottom-section-39.bottom-section-42 {
  left: unset;
  position: relative;
  top: unset;
}

.bottom-section-39.bottom-section-41,
.bottom-section-39.bottom-section-44 {
  left: 224px;
  top: 871px;
}

.bottom-section-39.bottom-section-43 {
  left: unset;
  margin-top: 138px;
  position: relative;
  top: unset;
}
</style>
