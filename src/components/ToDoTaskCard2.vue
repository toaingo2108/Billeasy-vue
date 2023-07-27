<template>
  <div class="to-do-task-card-6">
    <p class="input-text-166 poppins-semi-bold-ebony-13px-2">
      <span class="poppins-semi-bold-ebony-13px-2">Call Jimmy for project #2</span>
    </p>
    <div class="overlap-group-40">
      <div class="details-6">
        <frame2538 :user="frame25381Props.user" :spanText="frame25381Props.spanText" />
        <frame2538 :user="frame25382Props.user" :spanText="frame25382Props.spanText" />
        <div class="frame-2540-6">
          <div class="ellipse-17-12"></div>
          <div class="category-name-17 poppins-medium-lima-12px">
            <span class="poppins-medium-lima-12px">Category Name</span>
          </div>
        </div>
      </div>
      <icon-button32 :src="iconButton3Props.src" :className="iconButton3Props.className" />
    </div>
  </div>
</template>

<script>
import Frame2538 from "./Frame2538";
import IconButton32 from "./IconButton32";
export default {
  name: "ToDoTaskCard2",
  components: {
    Frame2538,
    IconButton32,
  },
  props: ["frame25381Props", "frame25382Props", "iconButton3Props"],
};
</script>

<style>
.to-do-task-card-6,
.to-do-task-card-7,
.to-do-task-card-8 {
  align-items: flex-end;
  background-color: var(--whisper);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-height: 142px;
  padding: 8px;
  width: 240px;
}

.input-text-166,
.input-text-167,
.input-text-168 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 7px;
  min-height: 20px;
  width: 208px;
}

.overlap-group-40,
.overlap-group-41,
.overlap-group-42 {
  height: 82px;
  position: relative;
  width: 216px;
}

.details-6,
.details-7,
.details-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 0;
  min-height: 74px;
  position: absolute;
  top: 0;
  width: 208px;
}

.frame-2540-6,
.frame-2540-7,
.frame-2540-8 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 18px;
  min-width: 117px;
}

.ellipse-17-12,
.ellipse-17-13,
.ellipse-17-15 {
  align-self: center;
  background-color: var(--lima);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.category-name-17,
.category-name-18,
.category-name-19 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}
</style>
