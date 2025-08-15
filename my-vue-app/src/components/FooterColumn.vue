<template>
    <div class="footer__column">
        <p v-for="(item, index) in items" :key="index" class="footer__column__text" @click="$emit('click', item)">
            {{ item }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: string[]
}>()
defineEmits(['click'])
</script>

<style scoped lang="scss">
.footer__column {
    display: flex;
    gap: 12px;
}

.footer__column__text {
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--color-blue-gray-600);
    font-size: 16px;
    font-weight: 300;

    &:hover {
        text-decoration: underline;
    }
}
</style>
