<template>
  <div class="frame-2571-2">
    <frame2574 />
    <div class="frame-2575-3">
      <div class="create-account poppins-semi-bold-white-32px">
        <span class="poppins-semi-bold-white-32px">Create Account</span>
      </div>
      <p class="install-the-web-app poppins-medium-mischka-18px">
        <span class="poppins-medium-mischka-18px"
          >Install the web app, connect to your accounting and configure your account settings.</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import Frame2574 from "./Frame2574";
export default {
  name: "Frame2571",
  components: {
    Frame2574,
  },
};
</script>

<style>
.frame-2571-2,
.frame-2571-3 {
  align-items: flex-start;
  background-color: var(--ebony);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 352px;
  overflow: hidden;
  padding: 52px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.frame-2571-2:hover,
.frame-2571-3:hover {
  transform: scale(1.1);
}

.frame-2575-3,
.frame-2575-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 136px;
  width: 437px;
}

.create-account,
.create-account-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  text-align: center;
  width: 437px;
}

.install-the-web-app,
.install-the-web-app-1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 64px;
  text-align: center;
  width: 437px;
}
</style>
