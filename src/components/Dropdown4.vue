<template>
  <div class="dropdown-127">
    <div class="label-329 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-128">
      <div class="text-316 poppins-medium-ebony-14px"><span class="poppins-medium-ebony-14px">John Doe</span></div>
      <img
        class="chevron-down-313"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown4",
  props: ["spanText1"],
};
</script>

<style>
.dropdown-127 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 182px;
}

.label-329 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 182px;
}

.dropdown-128 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 182px;
}

.text-316 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 126px;
}

.chevron-down-313 {
  height: 24px;
  width: 24px;
}
</style>
