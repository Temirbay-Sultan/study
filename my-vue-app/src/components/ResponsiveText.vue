<template>
  <component :is="tag">
    {{ isMobile ? mobileText : desktopText }}
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

defineProps<{
  desktopText: string
  mobileText: string
  tag?: string
}>()


const isMobile = ref(window.innerWidth <= 767)
function checkSize() {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => window.addEventListener("resize", checkSize))
onUnmounted(() => window.removeEventListener("resize", checkSize))
</script>
