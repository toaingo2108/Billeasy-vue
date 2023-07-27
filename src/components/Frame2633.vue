<template>
  <div :class="[`frame-2633`, className || ``]">
    <div class="condimentum-vitae-sed poppins-semi-bold-ebony-32px">
      <span class="span-392 poppins-semi-bold-ebony-32px">Condimentum vitae sed</span>
    </div>
    <p class="lorem-ipsum-dolor-si-10 poppins-medium-comet-20px">
      <span class="span-392 poppins-medium-comet-20px"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dolor posuere sagittis nisi, nulla in sed
        tristique. Malesuada nec curabitur donec mi ac diam dolor egestas. Congue aenean sed vel egestas. Platea massa
        sit vel consectetur purus facilisi sit purus. Pharetra sit sit urna amet. Purus facilisi amet, varius
        suspendisse pretium. Nisi, facilisis diam ut id risus. Volutpat odio imperdiet commodo venenatis, tortor, erat
        eget. Lectus nunc sit sagittis eu a cursus. Neque, neque mattis nisl dolor odio. At nunc gravida tincidunt
        nulla. Facilisis et ullamcorper tempus scelerisque vitae tincidunt netus elementum. Fames non convallis
        consequat orci. Sit et pulvinar nunc orci cras tempor ut dolor, semper. Eget tristique faucibus at malesuada.
        Commodo tincidunt purus dolor porttitor. Sed ut penatibus ridiculus vivamus mauris sed quam sed aliquam. Posuere
        tortor felis, diam consequat aliquet sit tempor augue elementum. Sed sit dolor leo ultrices. Egestas viverra
        vestibulum tristique quis mauris, vestibulum ac. Fringilla senectus venenatis, sit diam odio vitae imperdiet
        quam. Purus arcu dapibus dictum lacus malesuada donec duis ipsum. Natoque diam luctus adipiscing phasellus magna
        eros. Arcu bibendum mauris suscipit viverra.</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Frame2633",
  props: ["className"],
};
</script>

<style>
.frame-2633 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -47px;
  min-height: 533px;
  width: 1216px;
}

.condimentum-vitae-sed {
  letter-spacing: 0;
  line-height: 140px;
  margin-top: -1px;
  min-height: 45px;
  width: 1216px;
}

.lorem-ipsum-dolor-si-10 {
  letter-spacing: 0;
  line-height: 200px;
  min-height: 440px;
  width: 1216px;
}

.frame-2633.frame-2634 {
  min-height: 813px;
}

.frame-2633.frame-2634 .lorem-ipsum-dolor-si-10 {
  min-height: 720px;
}

.frame-2633.frame-2635 {
  min-height: 293px;
}

.frame-2633.frame-2635 .lorem-ipsum-dolor-si-10 {
  min-height: unset;
}
</style>
