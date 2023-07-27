<template>
  <div :class="[`status`, className || ``]"><img class="check-11" :src="src" alt="check" /></div>
</template>

<script>
export default {
  name: "Status",
  props: ["src", "className"],
};
</script>

<style>
.status {
  align-items: center;
  background-color: var(--snow-flurry);
  border-radius: 8px;
  display: flex;
  height: 24px;
  margin-left: 36px;
  overflow: hidden;
  padding: 0 5px;
  width: 24px;
}

.check-11 {
  height: 14px;
  width: 14px;
}

.status.status-3,
.status.status-4,
.status.status-5,
.status.status-6,
.status.status-7,
.status.status-8,
.status.status-11,
.status.status-12,
.status.status-13,
.status.status-14,
.status.status-15,
.status.status-16,
.status.status-17,
.status.status-19,
.status.status-21,
.status.status-23,
.status.status-24,
.status.status-25,
.status.status-27,
.status.status-29,
.status.status-31,
.status.status-32,
.status.status-33,
.status.status-34,
.status.status-35,
.status.status-36,
.status.status-37,
.status.status-38,
.status.status-39,
.status.status-40,
.status.status-41,
.status.status-42,
.status.status-43,
.status.status-44 {
  margin-left: unset;
}

.status.status-45 {
  align-items: center;
  background-color: var(--snow-flurry);
  border-radius: 8px;
  display: flex;
  height: 24px;
  overflow: hidden;
  padding: 0 5px;
  width: 24px;
}

.status.status-9 {
  background-color: var(--hawkes-blue);
  margin-left: unset;
}

.status.status-10 {
  background-color: var(--cosmos);
  margin-left: unset;
}

.status.status-18,
.status.status-20,
.status.status-22,
.status.status-26,
.status.status-28,
.status.status-30 {
  background-color: var(--karry);
  margin-left: unset;
}

.status.status-46,
.status.status-47,
.status.status-48,
.status.status-49,
.status.status-50,
.status.status-51 {
  align-items: center;
  background-color: var(--cosmos);
  border-radius: 8px;
  display: flex;
  height: 24px;
  overflow: hidden;
  padding: 0 5px;
  width: 24px;
}
</style>
