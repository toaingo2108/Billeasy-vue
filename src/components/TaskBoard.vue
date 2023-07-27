<template>
  <div :class="[`task-board`, className || ``]">
    <div class="task-board-item">
      <header32
        :spanText1="header31Props.spanText1"
        :spanText2="header31Props.spanText2"
        :className="header31Props.className"
      />
      <to-do-task-card
        :frame25381Props="toDoTaskCard1Props.frame25381Props"
        :frame25382Props="toDoTaskCard1Props.frame25382Props"
        :iconButton3Props="toDoTaskCard1Props.iconButton3Props"
      />
      <to-do-task-card
        :frame25381Props="toDoTaskCard2Props.frame25381Props"
        :frame25382Props="toDoTaskCard2Props.frame25382Props"
        :iconButton3Props="toDoTaskCard2Props.iconButton3Props"
      />
      <div class="to-do-task-card">
        <p class="input-text-145 poppins-semi-bold-ebony-13px-2">
          <span class="span-504 poppins-semi-bold-ebony-13px-2">Call Jimmy for project #2</span>
        </p>
        <div class="overlap-group2-4">
          <div class="details">
            <frame2538 :user="frame25381Props.user" :spanText="frame25381Props.spanText" />
            <frame2538 :user="frame25382Props.user" :spanText="frame25382Props.spanText" />
            <div class="frame-2540">
              <div class="ellipse-17-5"></div>
              <div class="category-name-11 poppins-medium-persian-rose-12px">
                <span class="span-504 poppins-medium-persian-rose-12px">Category Name</span>
              </div>
            </div>
          </div>
          <icon-button32 :src="iconButton3Props.src" :className="iconButton3Props.className" />
        </div>
      </div>
    </div>
    <div class="task-board-item variant-1">
      <header32
        :spanText1="header32Props.spanText1"
        :spanText2="header32Props.spanText2"
        :className="header32Props.className"
      />
      <to-do-task-card2
        :frame25381Props="toDoTaskCard21Props.frame25381Props"
        :frame25382Props="toDoTaskCard21Props.frame25382Props"
        :iconButton3Props="toDoTaskCard21Props.iconButton3Props"
      />
      <to-do-task-card3
        :frame25381Props="toDoTaskCard31Props.frame25381Props"
        :frame25382Props="toDoTaskCard31Props.frame25382Props"
        :iconButton3Props="toDoTaskCard31Props.iconButton3Props"
      />
    </div>
    <div class="task-board-item variant-2">
      <header32
        :spanText1="header33Props.spanText1"
        :spanText2="header33Props.spanText2"
        :className="header33Props.className"
      />
      <to-do-task-card
        :frame25381Props="toDoTaskCard3Props.frame25381Props"
        :frame25382Props="toDoTaskCard3Props.frame25382Props"
        :iconButton3Props="toDoTaskCard3Props.iconButton3Props"
      />
      <to-do-task-card2
        :frame25381Props="toDoTaskCard22Props.frame25381Props"
        :frame25382Props="toDoTaskCard22Props.frame25382Props"
        :iconButton3Props="toDoTaskCard22Props.iconButton3Props"
      />
    </div>
    <div class="task-board-item variant-3">
      <div class="header-76">
        <div class="flex-row-131">
          <div class="input-text-146 poppins-semi-bold-ebony-16px">
            <span class="span-504 poppins-semi-bold-ebony-16px">Done</span>
          </div>
          <div class="frame-2541">
            <div class="input-text-147 poppins-normal-white-12px">
              <span class="span-504 poppins-normal-white-12px">1</span>
            </div>
          </div>
        </div>
        <img
          class="line-706-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c01612f046d106ab35c/img/line-706-10@2x.png"
          alt="Line 706"
        />
      </div>
      <to-do-task-card3
        :frame25381Props="toDoTaskCard32Props.frame25381Props"
        :frame25382Props="toDoTaskCard32Props.frame25382Props"
        :iconButton3Props="toDoTaskCard32Props.iconButton3Props"
      />
    </div>
  </div>
</template>

<script>
import Header32 from "./Header32";
import ToDoTaskCard from "./ToDoTaskCard";
import Frame2538 from "./Frame2538";
import IconButton32 from "./IconButton32";
import ToDoTaskCard2 from "./ToDoTaskCard2";
import ToDoTaskCard3 from "./ToDoTaskCard3";
export default {
  name: "TaskBoard",
  components: {
    Header32,
    ToDoTaskCard,
    Frame2538,
    IconButton32,
    ToDoTaskCard2,
    ToDoTaskCard3,
  },
  props: [
    "className",
    "header31Props",
    "toDoTaskCard1Props",
    "toDoTaskCard2Props",
    "frame25381Props",
    "frame25382Props",
    "iconButton3Props",
    "header32Props",
    "toDoTaskCard21Props",
    "toDoTaskCard31Props",
    "header33Props",
    "toDoTaskCard3Props",
    "toDoTaskCard22Props",
    "toDoTaskCard32Props",
  ],
};
</script>

<style>
.task-board {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  margin-top: 40px;
  min-width: 1152px;
}

.task-board-item {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 656px;
  overflow: hidden;
  position: relative;
  width: 264px;
}

.to-do-task-card {
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

.input-text-145 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 7px;
  min-height: 20px;
  width: 208px;
}

.overlap-group2-4 {
  height: 82px;
  position: relative;
  width: 216px;
}

.details {
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

.frame-2540 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 18px;
  min-width: 117px;
}

.ellipse-17-5 {
  align-self: center;
  background-color: var(--persian-rose);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.category-name-11 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}

.header-76 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 17px;
  height: 56px;
  overflow: hidden;
  width: 264px;
}

.flex-row-131 {
  align-items: flex-end;
  display: flex;
  gap: 157px;
  height: 24px;
  margin-left: 8px;
  margin-top: 15px;
  min-width: 224px;
}

.input-text-146 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 43px;
}

.frame-2541 {
  align-items: flex-start;
  background-color: var(--alien-armpit);
  border-radius: 100px;
  display: flex;
  height: 22px;
  min-width: 24px;
  padding: 1px 10px;
}

.input-text-147 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.line-706-5 {
  height: 1px;
  width: 264px;
}

.task-board.task-board-1,
.task-board.task-board-2 {
  height: 656px;
  left: 256px;
  margin-top: unset;
  position: absolute;
  top: 256px;
}

.task-board.task-board-1 .task-board-item,
.task-board.task-board-2 .task-board-item {
  border-radius: 24px;
}

.task-board.task-board-1 .task-board-item.variant-1,
.task-board.task-board-1 .task-board-item.variant-2,
.task-board.task-board-1 .task-board-item.variant-3,
.task-board.task-board-2 .task-board-item.variant-1,
.task-board.task-board-2 .task-board-item.variant-2,
.task-board.task-board-2 .task-board-item.variant-3 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 656px;
  overflow: hidden;
  position: relative;
  width: 264px;
}
</style>
