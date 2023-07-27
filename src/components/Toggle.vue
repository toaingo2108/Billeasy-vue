<template>
  <div class="toggle-1">
    <div class="ellipse-16-1"></div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
};
</script>

<style>
.toggle-1,
.toggle-2,
.toggle-3,
.toggle-4 {
  align-items: center;
  align-self: center;
  background-color: var(--caribbean-green);
  border-radius: 100px;
  display: flex;
  height: 16px;
  overflow: hidden;
  padding: 0 2px;
  width: 28px;
}

.ellipse-16-1,
.ellipse-16-2,
.ellipse-16-3,
.ellipse-16-4 {
  background-color: var(--white);
  border-radius: 6px;
  height: 12px;
  margin-left: 12px;
  width: 12px;
}
</style>
