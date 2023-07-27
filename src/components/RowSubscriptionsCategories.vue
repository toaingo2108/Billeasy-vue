<template>
  <div class="row-subscriptions-categories-1 poppins-semi-bold-ebony-13px">
    <div class="text-6-2"><span class="poppins-semi-bold-ebony-13px">1.</span></div>
    <input42 />
    <div class="input-119">
      <p class="input-text-193 poppins-normal-ebony-14px">
        <span class="poppins-normal-ebony-14px">This categories are for all products created the last 30 days</span>
      </p>
    </div>
    <div class="number-72"><span class="poppins-semi-bold-ebony-13px">1331233</span></div>
    <dropdown82 />
    <div class="icon-button-376"></div>
  </div>
</template>

<script>
import Input42 from "./Input42";
import Dropdown82 from "./Dropdown82";
export default {
  name: "RowSubscriptionsCategories",
  components: {
    Input42,
    Dropdown82,
  },
};
</script>

<style>
.row-subscriptions-categories-1 {
  align-items: center;
  display: flex;
  min-width: 1056px;
  position: relative;
}

.text-6-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 24px;
}

.input-119 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 464px;
}

.input-text-193 {
  letter-spacing: 0;
  line-height: 24px;
  width: 440px;
}

.number-72 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 12px;
  min-height: 20px;
  text-align: center;
  width: 168px;
}

.icon-button-376 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 22px;
  width: 20px;
}
</style>
