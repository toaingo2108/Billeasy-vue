<template>
  <div class="dropdown-85">
    <div class="label-149 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-86">
      <div class="text-204 poppins-medium-ebony-14px">
        <span class="poppins-medium-ebony-14px">{{ spanText2 }}</span>
      </div>
      <img
        class="chevron-down-295"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown24",
  props: ["spanText1", "spanText2"],
};
</script>

<style>
.dropdown-85 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 355px;
}

.label-149 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 355px;
}

.dropdown-86 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 355px;
}

.text-204 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 299px;
}

.chevron-down-295 {
  height: 24px;
  width: 24px;
}
</style>
