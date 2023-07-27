<template>
  <div class="to-do-task-card-9">
    <p class="input-text-169 poppins-semi-bold-ebony-13px-2">
      <span class="poppins-semi-bold-ebony-13px-2">Call Jimmy for project #2</span>
    </p>
    <div class="overlap-group-43">
      <div class="details-9">
        <frame2538 :user="frame25381Props.user" :spanText="frame25381Props.spanText" />
        <frame2538 :user="frame25382Props.user" :spanText="frame25382Props.spanText" />
        <div class="frame-2540-9">
          <div class="ellipse-17-16"></div>
          <div class="category-name-20 poppins-medium-burning-orange-12px">
            <span class="poppins-medium-burning-orange-12px">Category Name</span>
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
  name: "ToDoTaskCard3",
  components: {
    Frame2538,
    IconButton32,
  },
  props: ["frame25381Props", "frame25382Props", "iconButton3Props"],
};
</script>

<style>
.to-do-task-card-9,
.to-do-task-card-10,
.to-do-task-card-11 {
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

.input-text-169,
.input-text-170,
.input-text-171 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 7px;
  min-height: 20px;
  width: 208px;
}

.overlap-group-43,
.overlap-group-44,
.overlap-group-45 {
  height: 82px;
  position: relative;
  width: 216px;
}

.details-9,
.details-10,
.details-11 {
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

.frame-2540-9,
.frame-2540-10,
.frame-2540-11 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 18px;
  min-width: 117px;
}

.ellipse-17-16,
.ellipse-17-17,
.ellipse-17-18 {
  align-self: center;
  background-color: var(--burning-orange);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.category-name-20,
.category-name-21,
.category-name-22 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}
</style>
