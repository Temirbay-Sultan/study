<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
    border: none;
    width: fit-content;
    margin: 0;
    outline: none;
    cursor: pointer;
    padding: 9px 12px;
    font-weight: 500;
    transition: all 0.3s ease;
    background-color: var(--color-blue-600);
    color: var(--color-light);

    display: inline-flex;
    border-radius: var(--border-radius);
    align-items: center;
    gap: 15px;
    font-size: 16px;
    justify-content: center;
}
</style>