<template>
  <div class="frame-26-4">
    <img
      class="unsplashhpj-sk-u2-uysu-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/unsplash-hpjsku2uysu-9@2x.png"
      alt="unsplash:hpjSkU2UYSU"
    />
    <div class="frame-2625-2">
      <div class="what-is-doc-smart-1 poppins-semi-bold-ebony-32px">
        <span class="poppins-semi-bold-ebony-32px">What is DocSmart?</span>
      </div>
      <p class="lorem-ipsum-dolor-si-11 poppins-medium-comet-20px">
        <span class="poppins-medium-comet-20px"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla ipsum, gravida pellentesque massa nec,
          feugiat sagittis erat.</span
        >
      </p>
    </div>
    <button7 :className="button7Props.className" />
  </div>
</template>

<script>
import Button7 from "./Button7";
export default {
  name: "Frame26272",
  components: {
    Button7,
  },
  props: ["button7Props"],
};
</script>

<style>
.frame-26-4 {
  align-items: center;
  background-color: var(--white);
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 701px;
  padding: 32px 0;
  position: relative;
  width: 501px;
}

.unsplashhpj-sk-u2-uysu-3 {
  height: 288px;
  width: 437px;
}

.frame-2625-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -79px;
  min-height: 221px;
  width: 437px;
}

.what-is-doc-smart-1 {
  letter-spacing: 0;
  line-height: 140px;
  margin-top: -1px;
  min-height: 45px;
  width: 437px;
}

.lorem-ipsum-dolor-si-11 {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -40px;
  min-height: 160px;
  width: 437px;
}
</style>
