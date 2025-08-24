<template>
    <div class="button-group">
        <button v-for="(btn, i) in buttons" :key="i" class="button-group__btn" @click="$emit('click', btn)">
            {{ btn }}
        </button>
    </div>
</template>

<script setup>
defineProps({
    buttons: {
        type: Array,
        required: true
    }
})
defineEmits(['click'])
</script>

<style scoped lang="scss">
.button-group {
    display: flex;
    width: 100%;
}

.button-group__btn {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid var(--color-blue-gray-300);
    background-color: var(--color-light);
    cursor: pointer;
    transition: all 0.3s ease;
    

    &:hover {
        background-color: var( --color-blue-gray-100);
    }



    &:not(:last-child) {
        border-right: none;
    }

    &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);

    }

    &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
}
</style>
