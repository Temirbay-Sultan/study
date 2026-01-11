<template>
  <div class="footer__column">
    <a
      v-for="(item, index) in items"
      :key="index"
      class="footer__column__text"
      :href="item.href"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { label: string; href: string }[]
}>()
</script>

<style scoped lang="scss">
.footer__column {
  display: flex;
  gap: 12px;
}

.footer__column__text {
  transition: all 0.2s ease;
  color: var(--color-blue-gray-600);
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
