<template>
  <v-menu activator="parent">
    <v-card width="240" class="rounded-xl pa-3">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="lg"
          @click="item.onClick"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
const props = defineProps({
  onDelete: { type: Function, default: () => {} },
  onEdit: { type: Function, default: () => {} },
});

const items = [
  {
    text: "Edit",
    onClick: props.onEdit,
  },
  {
    text: "Delete",
    onClick: props.onDelete,
  },
];
</script>

<style scoped></style>
