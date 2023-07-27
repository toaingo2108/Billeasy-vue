<template>
  <div class="bottom-section-4">
    <img
      class="top-border-6"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-16@2x.png"
      alt="Top Border"
    />
    <div class="tion-container">
      <div class="actions">
        <dropdown172 />
        <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
      </div>
      <pagination
        :iconButton21Props="paginationProps.iconButton21Props"
        :iconButton22Props="paginationProps.iconButton22Props"
      />
    </div>
  </div>
</template>

<script>
import Dropdown172 from "./Dropdown172";
import IconButton from "./IconButton";
import Pagination from "./Pagination";
export default {
  name: "BottomSection2",
  components: {
    Dropdown172,
    IconButton,
    Pagination,
  },
  props: ["iconButtonProps", "paginationProps"],
};
</script>

<style>
.bottom-section-4,
.bottom-section-5,
.bottom-section-6,
.bottom-section-7,
.bottom-section-8,
.bottom-section-9,
.bottom-section-10,
.bottom-section-11,
.bottom-section-12,
.bottom-section-13,
.bottom-section-14,
.bottom-section-15 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 80px;
  overflow: hidden;
  width: 928px;
}

.top-border-6,
.top-border-7,
.top-border-8,
.top-border-9,
.top-border-10,
.top-border-11,
.top-border-12,
.top-border-13,
.top-border-14,
.top-border-15,
.top-border-16,
.top-border-17 {
  height: 1px;
  width: 1216px;
}

.tion-container,
.tion-container-1,
.tion-container-2,
.tion-container-3,
.tion-container-4,
.tion-container-5,
.tion-container-6,
.tion-container-7,
.tion-container-8,
.tion-container-9,
.tion-container-10,
.tion-container-11 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 320px;
  min-width: 864px;
  position: relative;
}

.actions,
.actions-1,
.actions-2,
.actions-3,
.actions-4,
.actions-5,
.actions-6,
.actions-7,
.actions-8,
.actions-9,
.actions-10,
.actions-11 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 208px;
  position: relative;
}
</style>
