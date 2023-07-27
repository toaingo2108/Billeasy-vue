<template>
  <div :class="[`frame-2574-12`, className || ``]"><img class="portal-1" :src="src" alt="Portal" /></div>
</template>

<script>
export default {
  name: "Frame25744",
  props: ["src", "className"],
};
</script>

<style>
.frame-2574-12 {
  align-items: center;
  background-color: var(--observatory);
  border-radius: 100px;
  display: flex;
  height: 64px;
  overflow: hidden;
  padding: 0 16px;
  width: 64px;
}

.portal-1 {
  height: 32px;
  width: 32px;
}

.frame-2574-12.frame-2590 {
  align-items: center;
  background-color: var(--mystic);
  border-radius: 100px;
  display: flex;
  height: 64px;
  margin-bottom: 1px;
  overflow: hidden;
  padding: 0 15px;
  width: 64px;
}

.frame-2574-12.frame-2591 {
  align-items: center;
  background-color: var(--mystic);
  border-radius: 100px;
  display: flex;
  height: 64px;
  margin-bottom: 1px;
  overflow: hidden;
  padding: 0 16px;
  width: 64px;
}
</style>
