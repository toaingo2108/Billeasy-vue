<template>
  <div class="update-note-2">
    <input-field22 :spanText1="inputField221Props.spanText1" :spanText2="inputField221Props.spanText2" />
    <input-field22
      :spanText1="inputField222Props.spanText1"
      :spanText2="inputField222Props.spanText2"
      :className="inputField222Props.className"
    />
    <bottom-section22 :className="bottomSection2Props.className" :button22Props="bottomSection2Props.button22Props" />
  </div>
</template>

<script>
import InputField22 from "./InputField22";
import BottomSection22 from "./BottomSection22";
export default {
  name: "UpdateNote",
  components: {
    InputField22,
    BottomSection22,
  },
  props: ["inputField221Props", "inputField222Props", "bottomSection2Props"],
};
</script>

<style>
.update-note-2,
.update-note-3 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 336px;
  left: 964px;
  overflow: hidden;
  position: absolute;
  top: 472px;
  width: 400px;
}
</style>
