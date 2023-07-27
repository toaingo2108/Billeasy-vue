<template>
  <div :class="[`information-36`, className || ``]">
    <div class="flex-row-239">
      <header5
        :spanText="header5Props.spanText"
        :className="header5Props.className"
        :frame2443Props="header5Props.frame2443Props"
      />
      <icon-button32 :src="iconButton32Props.src" :className="iconButton32Props.className" />
    </div>
    <div class="frame-2481-8">
      <div class="company-name poppins-medium-ebony-14px">
        <span class="span-779 poppins-medium-ebony-14px">Company Name</span>
      </div>
      <div class="company-inc poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">Company Inc.</span>
      </div>
    </div>
    <div class="frame-2482-8">
      <div class="org-number poppins-medium-ebony-14px">
        <span class="span-779 poppins-medium-ebony-14px">Org. Number</span>
      </div>
      <div class="text-125-1 poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">111111-111111</span>
      </div>
    </div>
    <div class="frame-2483-3">
      <div class="website poppins-medium-ebony-14px">
        <span class="span-779 poppins-medium-ebony-14px">Website</span>
      </div>
      <div class="wwwwebsitecom poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">www.website.com</span>
      </div>
    </div>
    <div class="frame-2484-4">
      <div class="phone-1 poppins-medium-ebony-14px"><span class="span-779 poppins-medium-ebony-14px">Phone</span></div>
      <div class="number-83 poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">1202933</span>
      </div>
    </div>
    <div class="frame-2485-3">
      <div class="address-11 poppins-medium-ebony-14px">
        <span class="span-779 poppins-medium-ebony-14px">Address</span>
      </div>
      <p class="x22-house-name-street-city poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">22, House Name, Street, City</span>
      </p>
    </div>
    <div class="frame-2486">
      <div class="city poppins-medium-ebony-14px"><span class="span-779 poppins-medium-ebony-14px">City</span></div>
      <div class="place-113 poppins-normal-comet-13px">
        <span class="span-779 poppins-normal-comet-13px">Stockholm</span>
      </div>
    </div>
    <div class="frame-2487">
      <div class="country poppins-medium-ebony-14px">
        <span class="span-779 poppins-medium-ebony-14px">Country</span>
      </div>
      <div class="place-114 poppins-normal-comet-13px"><span class="span-779 poppins-normal-comet-13px">SE</span></div>
    </div>
  </div>
</template>

<script>
import Header5 from "./Header5";
import IconButton32 from "./IconButton32";
export default {
  name: "Information2",
  components: {
    Header5,
    IconButton32,
  },
  props: ["className", "header5Props", "iconButton32Props"],
};
</script>

<style>
.information-36 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 336px;
  margin-top: 40px;
  overflow: hidden;
  padding: 22px 0;
  width: 480px;
}

.flex-row-239 {
  align-items: center;
  display: flex;
  gap: 223px;
  height: 32px;
  min-width: 416px;
  position: relative;
}

.frame-2481-8 {
  align-items: flex-start;
  display: flex;
  gap: 208px;
  height: 21px;
  margin-top: 30px;
  min-width: 416px;
}

.company-name {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 117px;
}

.company-inc,
.text-125-1,
.wwwwebsitecom,
.number-83,
.x22-house-name-street-city,
.place-113,
.place-114 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2482-8 {
  align-items: flex-start;
  display: flex;
  gap: 267px;
  height: 21px;
  margin-top: 14px;
  min-width: 416px;
}

.org-number {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 91px;
}

.frame-2483-3 {
  align-items: flex-start;
  display: flex;
  gap: 240px;
  height: 21px;
  margin-top: 12px;
  min-width: 416px;
}

.website,
.address-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 58px;
}

.frame-2484-4 {
  align-items: flex-start;
  display: flex;
  gap: 320px;
  height: 21px;
  margin-top: 12px;
  min-width: 416px;
}

.phone-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 45px;
}

.frame-2485-3 {
  align-items: flex-start;
  display: flex;
  gap: 178px;
  height: 21px;
  margin-top: 12px;
  min-width: 416px;
}

.frame-2486 {
  align-items: flex-start;
  display: flex;
  gap: 319px;
  height: 21px;
  margin-top: 12px;
  min-width: 416px;
}

.city {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 28px;
}

.frame-2487 {
  align-items: flex-start;
  display: flex;
  gap: 344px;
  height: 21px;
  margin-top: 12px;
  min-width: 416px;
}

.country {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 57px;
}

.information-36.information-39,
.information-36.information-43,
.information-36.information-44 {
  left: 256px;
  margin-top: unset;
  position: absolute;
  top: 176px;
}
</style>
