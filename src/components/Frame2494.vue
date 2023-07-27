<template>
  <div :class="[`frame-2494-7`, className || ``]">
    <div class="user-avatar-111" :style="{ 'background-image': 'url(' + userAvatar + ')' }"></div>
    <div class="frame-2493">
      <div class="call-jimmy-regarding-project poppins-medium-ebony-14px">
        <span class="span-474 poppins-medium-ebony-14px">Call Jimmy regarding project</span>
      </div>
      <div class="date-29 poppins-normal-comet-12px">
        <span class="span-474 poppins-normal-comet-12px">2023/05/01</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2494",
  props: ["userAvatar", "className"],
};
</script>

<style>
.frame-2494-7 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 16px;
  height: 41px;
  min-width: 248px;
}

.user-avatar-111 {
  background-position: 50% 50%;
  background-size: cover;
  height: 24px;
  width: 24px;
}

.frame-2493 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 41px;
  width: 208px;
}

.call-jimmy-regarding-project {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.date-29 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}
</style>
