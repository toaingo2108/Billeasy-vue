<template>
  <div :class="[`bottom-section-56`, className || ``]">
    <img
      class="top-border-62"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-11@2x.png"
      alt="Top Border"
    />
    <div class="tion-container-12">
      <div class="actions-23">
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
  name: "BottomSection92",
  components: {
    Dropdown172,
    IconButton,
    Pagination,
  },
  props: ["className", "iconButtonProps", "paginationProps"],
};
</script>

<style>
.bottom-section-56 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 1216px;
}

.top-border-62 {
  height: 1px;
  width: 1216px;
}

.tion-container-12 {
  align-items: flex-start;
  display: flex;
  gap: 608px;
  min-width: 1152px;
  position: relative;
}

.actions-23 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 208px;
  position: relative;
}

.bottom-section-56.bottom-section-57,
.bottom-section-56.bottom-section-60,
.bottom-section-56.bottom-section-61,
.bottom-section-56.bottom-section-65,
.bottom-section-56.bottom-section-66,
.bottom-section-56.bottom-section-67,
.bottom-section-56.bottom-section-69,
.bottom-section-56.bottom-section-70,
.bottom-section-56.bottom-section-71,
.bottom-section-56.bottom-section-72,
.bottom-section-56.bottom-section-74,
.bottom-section-56.bottom-section-75,
.bottom-section-56.bottom-section-76,
.bottom-section-56.bottom-section-77,
.bottom-section-56.bottom-section-78,
.bottom-section-56.bottom-section-79,
.bottom-section-56.bottom-section-80,
.bottom-section-56.bottom-section-81,
.bottom-section-56.bottom-section-82,
.bottom-section-56.bottom-section-83,
.bottom-section-56.bottom-section-84 {
  left: 224px;
  position: absolute;
  top: 871px;
}

.bottom-section-56.bottom-section-58,
.bottom-section-56.bottom-section-59 {
  left: 0;
  position: absolute;
  top: 487px;
}

.bottom-section-56.bottom-section-73 {
  margin-top: 1px;
}
</style>
