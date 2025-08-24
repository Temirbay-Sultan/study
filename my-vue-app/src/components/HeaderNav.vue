<template>
    <nav class="header__nav">
        <ul class="header__menu">
            <li v-for="(item, index) in menu" :key="index" class="header__menu-item">
                <a class="header__menu-link" :href="item.href">
                    {{ item.label }}
                    <ArrowIcon v-if="item.hasIcon" :width="15" :height="8" color="#0F172A" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import ArrowIcon from "@/components/icons/ArrowIcon.vue"
defineProps({
    menu: {
        type: Array,
        default: () => [
            { label: 'Products', href: '#', hasIcon: true },
            { label: 'Solutions', href: '#', hasIcon: true },
            { label: 'Services', href: '#', hasIcon: true },
            { label: 'Help Center', href: '#', hasIcon: true },
            { label: 'Pricing', href: '#', hasIcon: false },
        ]
    }
})
</script>

<style scoped lang="scss">
.header__nav {
    display: flex;
    flex: 1;
    justify-content: center;
}

.header__menu {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0;
    margin: 0;
}

.header__menu-link {
    color: var(--color-blue-gray);
    font-size: 16px;
    text-decoration: none;
}
</style>
