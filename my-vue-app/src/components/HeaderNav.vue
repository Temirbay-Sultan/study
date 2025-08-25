<script setup>
import ArrowIcon from './icons/ArrowIcon.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  withIcons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <nav class="header__nav">
    <ul class="header__list">
      <li v-for="(item, index) in items" :key="index" class="header__item">
        <a :href="item.href" class="header__link">
          {{ item.label }}
          <ArrowIcon
            v-if="withIcons && index !== items.length - 1"
            class="header__icon"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header__icon {
  width: 18px;
  height: 18px;
  margin-left: 6px;
  vertical-align: middle;
}

.header__list {
  display: flex;
  gap: 20px;
  list-style: none;
}

.header__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;
}

.header__link:hover {
  color: var(--color-primary);
}
</style>
