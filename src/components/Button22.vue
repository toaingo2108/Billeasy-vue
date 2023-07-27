<template>
  <div :class="[`button-107`, className || ``]">
    <img class="check-149" :src="check" alt="Check" />
    <div class="text-190 poppins-medium-white-14px"><span class="spanixlj9 poppins-medium-white-14px">Save</span></div>
  </div>
</template>

<script>
export default {
  name: "Button22",
  props: ["check", "className"],
};
</script>

<style>
.button-107 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-bottom: 11px;
  margin-left: 341px;
  min-width: 112px;
  padding: 8.5px 24.5px;
  transition: all 0.15s ease;
}

.button-107:hover {
  transform: translate(0, -5px);
}

.check-149 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-190 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.button-107.button-108 {
  margin-bottom: unset;
  margin-left: unset;
  margin-top: 183px;
}

.button-107.button-109,
.button-107.button-110,
.button-107.button-111,
.button-107.button-112 {
  align-self: unset;
  margin-bottom: unset;
  margin-left: unset;
}

.button-107.button-113,
.button-107.button-114 {
  align-self: unset;
  margin-bottom: unset;
  margin-left: unset;
  margin-right: 33px;
}
</style>
